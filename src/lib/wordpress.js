// In-memory cache. Lives only as long as this serverless function's
// container stays warm -- that's fine, its whole job is to absorb the
// repeat requests that land on the SAME warm container within a short
// window (Vercel keeps functions warm between nearby requests). It does
// NOT persist across cold starts, so it's not a substitute for the
// s-maxage CDN header already set on each page -- the two work together.
const wpCache = new Map();

// How long a cached response is considered fresh.
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Keep this comfortably under Vercel's function execution limit.
// Hobby (free) plan caps a Serverless Function at 10 seconds TOTAL --
// that budget also has to cover Astro rendering itself, not just this
// fetch. A single retry with a 4s timeout leaves headroom:
//   worst case ~= 4s + 0.2s + 4s = 8.2s, well under the 10s hard limit.
// (The previous 8s timeout + 2 retries could take up to ~25s, which
// is why the WHOLE PAGE crashed with FUNCTION_INVOCATION_FAILED
// whenever the WordPress backend was slow to respond.)
const REQUEST_TIMEOUT_MS = 4000;
const MAX_RETRIES = 1;
const RETRY_DELAY_MS = 200;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithTimeout(endpoint, body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Astro-SSR-Bot)",
      },
      body,
      signal: controller.signal,
      cache: "no-store", // don't let fetch/Node cache this either
    });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchWithRetry(endpoint, body) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetchWithTimeout(endpoint, body);

      // Retry on server errors (5xx) -- a 4xx is a bad query, retrying won't help.
      if (!response.ok) {
        if (response.status >= 500 && attempt < MAX_RETRIES) {
          lastError = new Error(`WP responded ${response.status}`);
          await sleep(RETRY_DELAY_MS * (attempt + 1));
          continue;
        }
        return null;
      }

      const json = await response.json();
      if (json.errors) {
        if (import.meta.env.DEV) {
          console.error("WordPress GraphQL errors:", json.errors);
        }
        return null;
      }

      return json.data;
    } catch (error) {
      lastError = error;
      // AbortError (timeout) or network error -- worth a retry.
      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }
    }
  }

  if (import.meta.env.DEV) {
    console.error("WordPress query failed after retries:", lastError);
  }
  return null;
}

// IMPORTANT: set WP_API_URL in your Vercel Project -> Settings ->
// Environment Variables to point at your PRODUCTION WordPress site.
// The hardcoded fallback below points at a *staging* subdomain, which
// is typically hosted on slower/less reliable infrastructure than
// production -- that mismatch was the direct cause of pages timing out
// and crashing every hour or two. Don't rely on this fallback in prod.
export async function queryWordPress(query, variables = {}) {
  const endpoint =
    import.meta.env.WP_API_URL || "https://staging.vincenzoroofing.com/graphql";

  const cacheKey = JSON.stringify({ endpoint, query, variables });
  const now = Date.now();

  const cached = wpCache.get(cacheKey);
  if (cached) {
    // A request for the same query is already in flight on this warm
    // container -- reuse it instead of firing a duplicate network call.
    if (cached.promise) {
      return cached.promise;
    }
    // Fresh enough -- serve straight from cache, no network call at all.
    if (now - cached.timestamp < CACHE_TTL_MS) {
      return cached.data;
    }
  }

  const body = JSON.stringify({ query, variables });

  const promise = fetchWithRetry(endpoint, body).then((data) => {
    if (data) {
      wpCache.set(cacheKey, { data, timestamp: Date.now() });
      return data;
    }

    // Live fetch failed (timeout / WP down / etc). Rather than return
    // null and risk every consumer having to null-check everything,
    // fall back to the last known-good data for this query -- even if
    // it's past its 5-minute TTL -- so the page keeps rendering
    // correctly instead of showing empty sections or crashing.
    if (cached && cached.data) {
      wpCache.set(cacheKey, { data: cached.data, timestamp: cached.timestamp });
      return cached.data;
    }

    // No live data AND nothing cached yet (e.g. very first request on
    // a cold container while WP happens to be down) -- let the caller's
    // existing `?.` fallbacks handle it gracefully.
    wpCache.delete(cacheKey);
    return null;
  });

  // Store the in-flight promise immediately so any request that comes
  // in while this one is still pending reuses it instead of duplicating it.
  wpCache.set(cacheKey, { promise, data: cached?.data, timestamp: cached?.timestamp });

  return promise;
}

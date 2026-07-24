const wpCache = new Map();

// How long a cached response is considered fresh. Tune to taste —
// shorter = content updates show up sooner, longer = fewer WP hits.
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Abort a request if WP hasn't responded in this long, so a slow/hung
// endpoint can never block the whole page render indefinitely.
const REQUEST_TIMEOUT_MS = 8000;

// Retry transient failures (network errors, 5xx) this many times before
// giving up, with a short backoff between attempts.
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 300;

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

      // Retry on server errors (5xx) — a 4xx is a bad query, retrying won't help.
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
      // AbortError (timeout) or network error — worth a retry.
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

export async function queryWordPress(query, variables = {}) {
  const endpoint =
    import.meta.env.WP_API_URL ||
    "https://staging2.vincenzoroofing.com/graphql";
  const cacheKey = JSON.stringify({ endpoint, query, variables });
  const now = Date.now();

  const cached = wpCache.get(cacheKey);
  if (cached) {
    // Still-pending request for the same query — reuse it instead of
    // firing a duplicate network call (dedupes concurrent requests).
    if (cached.promise) {
      return cached.promise;
    }
    // Resolved and still within TTL — serve straight from cache.
    if (now - cached.timestamp < CACHE_TTL_MS) {
      return cached.data;
    }
  }

  const body = JSON.stringify({ query, variables });

  const promise = fetchWithRetry(endpoint, body).then((data) => {
    if (data) {
      wpCache.set(cacheKey, { data, timestamp: Date.now() });
    } else {
      // Don't cache failures — let the next request try again fresh.
      wpCache.delete(cacheKey);
    }
    return data;
  });

  // Store the in-flight promise immediately so any request that comes in
  // while this one is still pending reuses it rather than duplicating it.
  wpCache.set(cacheKey, { promise });

  return promise;
}
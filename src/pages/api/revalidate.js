// Called by a WordPress webhook whenever a post/page is created, updated,
// or deleted (e.g. via the "WP Webhooks" plugin, or a small `save_post` /
// `wp_after_insert_post` hook in functions.php that POSTs here on save).
//
// This site is fully static (astro.config.mjs -> output: 'static'), which is
// what makes it fast and cheap to host. That means WordPress content is
// baked into the HTML at build time — the only way to bring in new content
// is to run a new build. Previously that build had to be triggered manually.
//
// This endpoint closes that gap: WordPress calls it on save, and it forwards
// the request to your host's Deploy Hook, which kicks off a new build
// automatically. Netlify/Vercel builds for a site this size typically finish
// in well under a minute, so edits show up live within 1-2 minutes with no
// manual step and no change to how any page fetches or renders data.
export const prerender = false;

export async function POST({ request }) {
	try {
		// Shared-secret check so random requests on the internet can't spam
		// your build minutes. Set the same value in WordPress and in your
		// host's environment variables.
		const secret = import.meta.env.REVALIDATE_SECRET;
		const providedSecret =
			request.headers.get("x-revalidate-secret") ||
			new URL(request.url).searchParams.get("secret");

		if (secret && providedSecret !== secret) {
			return new Response(
				JSON.stringify({ success: false, message: "Invalid secret." }),
				{ status: 401, headers: { "Content-Type": "application/json" } }
			);
		}

		// Deploy Hook URL from Netlify (Site settings > Build & deploy > Build
		// hooks) or Vercel (Project settings > Git > Deploy Hooks).
		const deployHookUrl = import.meta.env.DEPLOY_HOOK_URL;

		if (!deployHookUrl) {
			return new Response(
				JSON.stringify({
					success: false,
					message: "DEPLOY_HOOK_URL is not configured.",
				}),
				{ status: 500, headers: { "Content-Type": "application/json" } }
			);
		}

		const triggerResponse = await fetch(deployHookUrl, { method: "POST" });

		if (!triggerResponse.ok) {
			return new Response(
				JSON.stringify({
					success: false,
					message: `Deploy hook responded ${triggerResponse.status}.`,
				}),
				{ status: 502, headers: { "Content-Type": "application/json" } }
			);
		}

		return new Response(
			JSON.stringify({ success: true, message: "Rebuild triggered." }),
			{ status: 200, headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		console.error("Revalidate error:", err);
		return new Response(
			JSON.stringify({ success: false, message: "Server error." }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}

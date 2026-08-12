import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/revalidate.js
var revalidate_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
async function POST({ request }) {
	try {
		request.headers.get("x-revalidate-secret") || new URL(request.url).searchParams.get("secret");
		return new Response(JSON.stringify({
			success: false,
			message: "DEPLOY_HOOK_URL is not configured."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("Revalidate error:", err);
		return new Response(JSON.stringify({
			success: false,
			message: "Server error."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/revalidate@_@js
var page = () => revalidate_exports;
//#endregion
export { page };

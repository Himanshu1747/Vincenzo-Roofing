import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { O as defineMiddleware } from "./render_Cme7R16p.mjs";
//#region src/pages/middleware.js
var middleware_exports = /* @__PURE__ */ __exportAll({ onRequest: () => onRequest });
var onRequest = defineMiddleware((context, next) => {
	const pathname = new URL(context.request.url).pathname;
	if (context.request.method === "GET" && pathname !== "/" && !pathname.endsWith("/") && !pathname.includes(".")) {
		const newUrl = new URL(context.request.url);
		newUrl.pathname = pathname + "/";
		return context.redirect(newUrl.toString(), 301);
	}
	return next();
});
//#endregion
//#region \0virtual:astro:page:src/pages/middleware@_@js
var page = () => middleware_exports;
//#endregion
export { page };

import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import { t as $$Contactform } from "./Contactform_CxduvreT.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contact;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/contact", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    contactPage{
      contactFormSecData
      vincenzosRoofingLlcTitle
      vincenzosRoofingLlcGridLists{
        vincenzosRoofingLlcIconImage{
          node{
            mediaItemUrl
          }
        }
        vincenzosRoofingLlcGristContent
      }
      finalCtaSecContent
    }
  }
}
`))?.page;
	const seodata = alldata?.seo || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">Contact</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ CONTACT SECTION ============ -->${renderComponent($$result, "Contactform", $$Contactform, {})}<!-- Emergency / Final CTA --><section class="cta-band"><div class="cta-inner">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.contactPage?.finalCtaSecContent || "error")}` })}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/contact.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };

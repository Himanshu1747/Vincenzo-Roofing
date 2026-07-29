import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Contactform } from "./Contactform_2Oc9u69s.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/contact", idType: URI) {
    title
    content
    contactpage{
      vincenzosRoofingLlcGrid{
        socialImage{
          node{
            mediaItemUrl
          }
        }
        socialContent
      }
      finalCtaContent
    }

  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Contact</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ CONTACT SECTION ============ -->${renderComponent($$result, "Contactform", $$Contactform, {})}<!-- Emergency / Final CTA --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.contactpage?.finalCtaContent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/contact.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };

import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { a as renderScript, i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/commercial-flat-roofing.astro
var commercial_flat_roofing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CommercialFlatRoofing,
	file: () => $$file,
	url: () => $$url
});
var $$CommercialFlatRoofing = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/commercial-flat-roofing", idType: URI) {
    title
    content
    commercialFlatRoofing{
      whatwedoCeontent
      systemContent
      syestemGrid{
        systemGridData
      }
      systemLastData
      workwithContent
      workwithList{
        workwithContent
      }
      assessmentData
      assessmentGrid{
        assessmentContent
      }
      scopeContent
      scopeList{
        scopelistData
      }
      straightContent
      howWorkData
      workingSteps{
        workingstepData
      }
      ongoingData
      localExpertiseContent
      localExpertiseGrids{
        localExpertiseContentGrid
      }
      faqContent
      faqLists{
        faqTitle
        faqAnswer
      }
      ctaData
    }
  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Commercial flat roofing</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ INTRO ============ --><section class="section"><div class="container narrow">${unescapeHTML(alldata?.commercialFlatRoofing?.whatwedoCeontent || "error")}</div></section><!-- ============ ROOFING SYSTEMS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.commercialFlatRoofing?.systemContent || "error")}</div><div class="sys">${alldata?.commercialFlatRoofing?.syestemGrid.map((sysitems) => renderTemplate`<div class="s">${unescapeHTML(sysitems?.systemGridData || "error")}</div>`)}</div><div class="card pale" style="margin-top:22px">${unescapeHTML(alldata?.commercialFlatRoofing?.systemLastData || "error")}</div></div></section><!-- ============ PROPERTY TYPES ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.commercialFlatRoofing?.workwithContent || "error")}</div><div class="props">${alldata?.commercialFlatRoofing?.workwithList.map((woeitems, index) => renderTemplate`<div class="prop"${addAttribute(index, "key")}><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(woeitems?.workwithContent || "error")}</div></div>`)}</div></div></section><!-- ============ WARNING SIGNS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.commercialFlatRoofing?.assessmentData || "error")}</div><div class="warn">${alldata?.commercialFlatRoofing?.assessmentGrid.map((asseitems, index) => renderTemplate`<div class="w"${addAttribute(index, "key")}><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(asseitems?.assessmentContent || "error")}</div></div>`)}</div></div></section><!-- ============ SCOPE ============ --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.commercialFlatRoofing?.scopeContent || "error")}` })}<ul class="checks" style="margin-top: 30px;">${alldata?.commercialFlatRoofing?.scopeList.map((scopitems) => renderTemplate`<li>${scopitems?.scopelistData || "error"}</li>`)}</ul></div></section><!-- ============ COST ============ --><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.commercialFlatRoofing?.straightContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.commercialFlatRoofing?.howWorkData || "error")}</div><div class="steps">${alldata?.commercialFlatRoofing?.workingSteps.map((stepsitems) => renderTemplate`<div class="step"><span class="n">Step 01</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(stepsitems?.workingstepData || "error")}` })}</div>`)}</div></div></section><!-- ============ MAINTENANCE PROGRAM ============ --><section class="section alt"><div class="container"><div class="maint">${unescapeHTML(alldata?.commercialFlatRoofing?.ongoingData || "errror")}</div></div></section><!-- ============ NH WEATHER ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.commercialFlatRoofing?.localExpertiseContent || "errror")}</div><div class="grid-2">${alldata?.commercialFlatRoofing?.localExpertiseGrids.map((locitems) => renderTemplate`<div class="card">${unescapeHTML(locitems?.localExpertiseContentGrid || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><hr><!-- ============ FAQ ============ --><section class="section" id="faq"><div class="container"><div style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.commercialFlatRoofing?.faqContent || "error")}</div><div class="faq-list">${alldata?.commercialFlatRoofing?.faqLists.map((faqitem) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqitem?.faqTitle || "error"}</span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqitem?.faqAnswer || "error")}</div>` })}</div>`)}</div>${renderScript($$result, "/home/claude/roofing_check/roofing/src/pages/service/commercial-flat-roofing.astro?astro&type=script&index=0&lang.ts")}</div></section><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<section class="cta-band"><div class="cta-inner"><div class="center-ctas"><h2>Request a Commercial Site Survey</h2><p>Request a Commercial Site Survey We measure, assess what is already up there, and give you written per-square-foot pricing for each viable system — with a schedule built around keeping your building operating.</p><div class="btns"><a class="btn btn-blue" href="/contact">Get Your Free Estimate<br></a><a class="btn btn-ghost-w" href="tel:+1 (603) 502-7080">Call Now</a></div></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/service/commercial-flat-roofing.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/commercial-flat-roofing.astro";
var $$url = "/service/commercial-flat-roofing";
//#endregion
//#region \0virtual:astro:page:src/pages/service/commercial-flat-roofing@_@astro
var page = () => commercial_flat_roofing_exports;
//#endregion
export { page };

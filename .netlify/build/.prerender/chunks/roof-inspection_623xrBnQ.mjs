import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/roof-inspection.astro
var roof_inspection_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoofInspection,
	file: () => $$file,
	url: () => $$url
});
var $$RoofInspection = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/roof-inspection", idType: URI) {
    title
    content
    roofInspection {
      whatWeDoContent
      whenToBookContent
      whenToBookGrids{
        whenToBookGridData
      }
      theInspectionContent
      theInspectionGrids{
        titl
        inspectionGridContent
      }
      theDeliverableContent
      straightPricingContent
      howItWorksContent
      howItWorksGrids{
        howItWorksSteps
      }
      localExpertiseContent
      localExpertiseGrid{
        localExpertiseGridContent
      }
      alsoUsefulForContent
      alsoUsefulForGrids{
        alsoUsefulForGridContent
      }
      faqContent
      faqLists{
        faqTitle
        faqAnswer
      }
      finalCtaContent
    }
  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">Services</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ BREADCRUMB ============ --><!-- ============ INTRO ============ --><section class="section"><div class="container narrow">${unescapeHTML(alldata?.roofInspection?.whatWeDoContent || "error")}</div></section><!-- ============ WHEN YOU NEED ONE ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofInspection?.whenToBookContent || "error")}</div><div class="when">${alldata?.roofInspection?.whenToBookGrids?.map((bookitems, index) => renderTemplate`<div class="wn">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="n">${String(index + 1).padStart(2, "0")}</span><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(bookitems?.whenToBookGridData || "error")}` })}</div>` })}</div>`)}</div></div></section><!-- ============ TWENTY POINT CHECK ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.roofInspection?.theInspectionContent || "error")}</div><div class="grid-2">${alldata?.roofInspection?.theInspectionGrids.map((inspeitems) => renderTemplate`<div class="cl-group"><div class="head">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(inspeitems?.titl || "error")}` })}` })}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(inspeitems?.inspectionGridContent || "error")}` })}</div>`)}</div></div></section><!-- ============ WHAT YOU RECEIVE ============ --><section class="section alt"><div class="container"><div class="report">${unescapeHTML(alldata?.roofInspection?.theDeliverableContent || "error")}</div></div></section><!-- ============ COST ============ --><section class="section"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.roofInspection?.straightPricingContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofInspection?.howItWorksContent || "error")}</div><div class="steps">${alldata?.roofInspection?.howItWorksGrids?.map((stemitems, index) => renderTemplate`<div class="step"><span class="n">Step${" "}${String(index + 1).padStart(2, "0")}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(stemitems?.howItWorksSteps || "errror")}` })}</div>`)}</div></div></section><!-- ============ NH SPECIFIC ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.roofInspection?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.roofInspection?.localExpertiseGrid.map((localitems) => renderTemplate`<div class="card">${unescapeHTML(localitems?.localExpertiseGridContent || "error")}</div>`)}</div></div></section><!-- ============ REAL ESTATE AND INSURANCE ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:32px">${unescapeHTML(alldata?.roofInspection?.alsoUsefulForContent || "error")}</div><div class="grid-2">${alldata?.roofInspection?.alsoUsefulForGrids.map((usefulitems) => renderTemplate`<div class="card">${unescapeHTML(usefulitems?.alsoUsefulForGridContent || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><!-- ============ FAQ ============ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.roofInspection?.faqContent || "error")}</div><div class="faq-list">${alldata?.roofInspection?.faqLists.map((faqlistss) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqlistss?.faqTitle || "error"}</span><span class="plus"></span>` })}</button><div class="faq-a"><div class="faq-item open"><div class="faq-a">${unescapeHTML(faqlistss?.faqAnswer || "error")}</div></div></div>` })}</div>`)}</div></div></section><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.roofInspection?.finalCtaContent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
            document.addEventListener("DOMContentLoaded", () => {
                // Select all FAQ question buttons
                const faqButtons = document.querySelectorAll(".faq-q");

                faqButtons.forEach((button) => {
                    button.addEventListener("click", () => {
                        // Find the parent item of the clicked button
                        const currentItem = button.closest(".faq-item");

                        // Optional: Close all other open FAQ items
                        document
                            .querySelectorAll(".faq-item")
                            .forEach((item) => {
                                if (item !== currentItem) {
                                    item.classList.remove("open");
                                }
                            });

                        // Toggle the 'open' class on the clicked item
                        currentItem.classList.toggle("open");
                    });
                });
            });
        <\/script></body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/service/roof-inspection.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/roof-inspection.astro";
var $$url = "/service/roof-inspection";
//#endregion
//#region \0virtual:astro:page:src/pages/service/roof-inspection@_@astro
var page = () => roof_inspection_exports;
//#endregion
export { page };

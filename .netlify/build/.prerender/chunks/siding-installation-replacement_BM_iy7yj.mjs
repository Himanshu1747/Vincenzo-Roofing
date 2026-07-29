import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/siding-installation-replacement.astro
var siding_installation_replacement_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SidingInstallationReplacement,
	file: () => $$file,
	url: () => $$url
});
var $$SidingInstallationReplacement = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/siding-installation-replacement", idType: URI) {
    title
    content
    sidingInstallationReplacement{
      whatWeDoContent
      assessmentContent
      assessmentGrids{
        assessmentGridContent
      }
      materialsContent
      materialsGrids{
        materialsTopBodyContent
        bottomBodyContent
      }
      materialsLastContent
      underTheSurfaceContent
      scopeOfWorkContent
      scopeWorkList{
        scopeListName
      }
      straightPricingContent
      howItWorksContent
      howItWorksGrids{
        howItWorksStepContent
      }
      worthConsideringContent
      worthConsideringGrids{
        worthConsideringGridContent
      }
      localExpertiseContent
      localExpertiseGrid{
        localExpertiseGridContent
      }
      faqContent
      faqList{
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
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;"> Siding Installation & Replacement</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ INTRO ============ --><section class="section"><div class="container narrow">${unescapeHTML(alldata?.sidingInstallationReplacement?.whatWeDoContent || "error")}</div></section><!-- ============ SIGNS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.sidingInstallationReplacement?.assessmentContent || "error")}</div><div class="signs">${alldata?.sidingInstallationReplacement?.assessmentGrids?.map((signitems, index) => renderTemplate`<div class="sg"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(signitems?.assessmentGridContent || "error")}</div></div>`)}</div></div></section><!-- ============ MATERIALS ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.sidingInstallationReplacement?.materialsContent || "error")}</div><div class="sys">${alldata?.sidingInstallationReplacement?.materialsGrids?.map((matitems, index) => renderTemplate`<div${addAttribute(`s ${index === 0 ? "feat" : ""}`, "class")}><div>${unescapeHTML(matitems?.materialsTopBodyContent || "error")}</div><div>${unescapeHTML(matitems?.bottomBodyContent || "error")}</div></div>`)}</div><div class="card pale" style="margin-top:22px">${unescapeHTML(alldata?.sidingInstallationReplacement?.materialsLastContent || "error")}</div></div></section><!-- ============ WALL LAYERS ============ --><section class="section alt"><div class="container"><div class="layers">${unescapeHTML(alldata?.sidingInstallationReplacement?.underTheSurfaceContent || "error")}</div></div></section><!-- ============ SCOPE ============ --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.sidingInstallationReplacement?.scopeOfWorkContent || "error")}` })}<ul class="checks">${alldata?.sidingInstallationReplacement?.scopeWorkList?.map((scopeitems) => renderTemplate`<li>${unescapeHTML(scopeitems?.scopeListName || "error")}</li>`)}</ul></div></section><!-- ============ COST ============ --><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.sidingInstallationReplacement?.straightPricingContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.sidingInstallationReplacement?.howItWorksContent || "error")}</div><div class="steps">${alldata?.sidingInstallationReplacement?.howItWorksGrids?.map((stepitems, index) => renderTemplate`<div class="step"><span class="n">Step ${String(index + 1).padStart(2, "0")}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(stepitems?.howItWorksStepContent || "error")}` })}</div>`)}</div></div></section><!-- ============ ROOF AND SIDING TOGETHER ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:32px">${unescapeHTML(alldata?.sidingInstallationReplacement?.worthConsideringContent || "error")}</div><div class="grid-2">${alldata?.sidingInstallationReplacement?.worthConsideringGrids?.map((worthitems, index) => renderTemplate`<div${addAttribute(`card ${index === 0 ? "pale" : ""}`, "class")}>${unescapeHTML(worthitems?.worthConsideringGridContent || "error")}</div>`)}</div></div></section><!-- ============ NH WEATHER ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.sidingInstallationReplacement?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.sidingInstallationReplacement?.localExpertiseGrid?.map((localitems) => renderTemplate`<div class="card">${unescapeHTML(localitems?.localExpertiseGridContent || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><!-- ============ FAQ ============ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.sidingInstallationReplacement?.faqContent || "error")}</div><div class="faq-list">${alldata?.sidingInstallationReplacement?.faqList?.map((faqitems) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faqitems?.faqTitle || "error"}</span><span class="plus"></span></button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswer || "error")}</div></div>`)}</div></div></section><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.sidingInstallationReplacement?.finalCtaContent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "/home/claude/roofing_check/roofing/src/pages/service/siding-installation-replacement.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/siding-installation-replacement.astro";
var $$url = "/service/siding-installation-replacement";
//#endregion
//#region \0virtual:astro:page:src/pages/service/siding-installation-replacement@_@astro
var page = () => siding_installation_replacement_exports;
//#endregion
export { page };

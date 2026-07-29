import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/roof-replacement.astro
var roof_replacement_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoofReplacement,
	file: () => $$file,
	url: () => $$url
});
var $$RoofReplacement = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/roof-replacement", idType: URI) {
    title
    content
    roofReplacement {
      whatWeContent
      repairReplaceContent
      repairReplaceList {
        aboutRepairReplace
      }
      repairReplaceLastData
      scopeWorkContent
      scopeLists{
        listName
      }
      optionContent
      optionGrids{
        optionData
      }
      lastOptionData
      straightPriceContent
      howItWorkContent
      howworkGrids{
        howWorkData
      }
      localExpertiseContent
      localExpertiseGrid{
        localExpertiseData
      }
      whyVincContent
      whyVincGrids{
        vincGridData
      }
      faqContent
      faqList{
        faqQuestion
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
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Roof Replacement</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ INTRO ============ --><section class="section"><div class="container narrow">${unescapeHTML(alldata?.roofReplacement?.whatWeContent || "error")}</div></section><!-- ============ SIGNS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofReplacement?.repairReplaceContent || "error")}</div><div class="signs">${alldata?.roofReplacement?.repairReplaceList.map((roofreplitems, index) => renderTemplate`<div class="sign"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(roofreplitems?.aboutRepairReplace || "error")}</div></div>`)}</div><div>${unescapeHTML(alldata?.roofReplacement?.repairReplaceLastData || "error")}</div></div></section><!-- ============ WHAT'S INCLUDED ============ --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.roofReplacement?.scopeWorkContent || "error")}` })}<ul class="checks" style="margin-top: 20px;">${alldata?.roofReplacement?.scopeLists.map((scopeitems) => renderTemplate`<li>${scopeitems?.listName || "error"}</li>`)}</ul></div></section><!-- ============ MATERIALS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofReplacement?.optionContent || "error")}</div><div class="grid-2">${alldata?.roofReplacement?.optionGrids.map((mapitems) => renderTemplate`<div class="card">${unescapeHTML(mapitems?.optionData || "error")}</div>`)}</div><div class="card pale" style="margin-top:22px">${unescapeHTML(alldata?.roofReplacement?.lastOptionData || "error")}</div></div></section><!-- ============ COST ============ --><section class="section"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.roofReplacement?.straightPriceContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofReplacement?.howItWorkContent || "error")}</div><div class="steps">${alldata?.roofReplacement?.howworkGrids.map((roofrelitems, index) => renderTemplate`<div class="step"><span class="n">Step ${String(index + 1).padStart(2, "0")}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(roofrelitems?.howWorkData || "error")}` })}</div>`)}</div></div></section><!-- ============ NH WEATHER ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.roofReplacement?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.roofReplacement?.localExpertiseGrid.map((rooflists) => renderTemplate`<div class="card">${unescapeHTML(rooflists?.localExpertiseData || "error")}</div>`)}</div></div></section><!-- ============ WHY US ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofReplacement?.whyVincContent || "error")}</div><div class="grid-2">${alldata?.roofReplacement?.whyVincGrids.map((whyitems) => renderTemplate`<div class="card">${unescapeHTML(whyitems?.vincGridData || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><!-- ============ FAQ ============ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.roofReplacement?.faqContent || "error")}</div><div class="faq-list">${alldata?.roofReplacement?.faqList.map((faqitems) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqitems?.faqQuestion || "error"} </span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswer || "error")}</div>` })}</div>`)}</div></div></section><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED SERVICES ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.roofReplacement?.ctaData || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
      document.addEventListener("DOMContentLoaded", () => {
        // Select all FAQ question buttons
        const faqButtons = document.querySelectorAll(".faq-q");

        faqButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Find the parent item of the clicked button
            const currentItem = button.closest(".faq-item");

            // Optional: Close all other open FAQ items
            document.querySelectorAll(".faq-item").forEach((item) => {
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
}, "/home/claude/roofing_check/roofing/src/pages/service/roof-replacement.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/roof-replacement.astro";
var $$url = "/service/roof-replacement";
//#endregion
//#region \0virtual:astro:page:src/pages/service/roof-replacement@_@astro
var page = () => roof_replacement_exports;
//#endregion
export { page };

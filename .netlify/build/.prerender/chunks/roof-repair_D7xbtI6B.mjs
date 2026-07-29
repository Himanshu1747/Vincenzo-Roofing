import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/roof-repair.astro
var roof_repair_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoofRepair,
	file: () => $$file,
	url: () => $$url
});
var $$RoofRepair = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/roof-repair", idType: URI) {
    title
    content
    roofRepair {
      whatWeDoContent
      weFixXontent
      weFixGrids {
        weFixData
      }
      honestAdviceSecContent
      honestGrids {
        honestTitle
        honestTitleDesc
      }
      honestLastLines
      scopeWorkSecContent
      scopeWorkSecLists {
        scopeWorkListName
      }
      straightPricingContent
      howItWorkContent
      howItWorkLists {
        howItWorkListData
      }
      localExpertiseContent
      localExpertiseGrids {
        expertiseData
      }
      faqContent
      faqList{
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
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Roof repair</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><section class="section"><div class="container narrow">${unescapeHTML(alldata?.roofRepair?.whatWeDoContent || "error")}</div></section><!-- ============ COMMON PROBLEMS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofRepair?.weFixXontent || "error")}</div><div class="probs">${alldata?.roofRepair?.weFixGrids.map((fixitems, index) => {
		const sequenceNumber = String(index + 1).padStart(2, "0");
		return renderTemplate`<div class="prob"${addAttribute(index, "key")}><span class="n">${sequenceNumber}</span><div>${unescapeHTML(fixitems?.weFixData || "error")}</div></div>`;
	})}</div></div></section><!-- ============ REPAIR VS REPLACE ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofRepair?.honestAdviceSecContent || "error")}</div><div class="compare">${alldata?.roofRepair?.honestGrids.map((honeitems) => renderTemplate`<div class="col repair"><div class="head">${honeitems?.honestTitle || "error"}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(honeitems?.honestTitleDesc || "error")}` })}</div>`)}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.roofRepair?.honestLastLines || "error")}` })}</div></section><!-- ============ WHAT'S INCLUDED ============ --><section class="section alt"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.roofRepair?.scopeWorkSecContent || "error")}` })}<ul class="checks" style="margin-top: 20px;">${alldata?.roofRepair?.scopeWorkSecLists.map((repairlist) => renderTemplate`<li>${repairlist?.scopeWorkListName || "error"}</li>`)}</ul></div></section><!-- ============ COST ============ --><section class="section"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.roofRepair?.straightPricingContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.roofRepair?.howItWorkContent || "error")}</div><div class="steps">${alldata?.roofRepair?.howItWorkLists.map((worklists, index) => {
		const stepLabel = `Step ${String(index + 1).padStart(2, "0")}`;
		return renderTemplate`<div class="step"${addAttribute(index, "key")}><span class="n">${stepLabel}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(worklists?.howItWorkListData || "error")}` })}</div>`;
	})}</div></div></section><!-- ============ NH WEATHER ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.roofRepair?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.roofRepair?.localExpertiseGrids.map((localitems) => renderTemplate`<div class="card">${unescapeHTML(localitems?.expertiseData || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.roofRepair?.faqContent || "error")}</div><div class="faq-list">${alldata?.roofRepair?.faqList.map((faqlist) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqlist?.faqTitle || "error"} </span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqlist?.faqAnswer || "error")}</div>` })}</div>`)}</div></div></section><!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.roofRepair?.ctaData || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "/home/claude/roofing_check/roofing/src/pages/service/roof-repair.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/roof-repair.astro";
var $$url = "/service/roof-repair";
//#endregion
//#region \0virtual:astro:page:src/pages/service/roof-repair@_@astro
var page = () => roof_repair_exports;
//#endregion
export { page };

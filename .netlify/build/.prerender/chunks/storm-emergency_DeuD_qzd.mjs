import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/storm-emergency.astro
var storm_emergency_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StormEmergency,
	file: () => $$file,
	url: () => $$url
});
var $$StormEmergency = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/storm-emergency", idType: URI) {
    title
    content
    stormEmergency{
      rightNowContent
      rightNowGrids{
        rightNowGridContent
      }
      rightNowBottomContent
      whatWeHandleContent
      whatWeHandleGrids{
        whatWeHandleGridContent
      }
      howItWorksContent
      howItWorksGrids{
        howItWorksGridTitle
        howItWorksGridContent
      }
      insuranceClaimsContent
      insuranceClaimsGrids{
        insuranceClaimsContent
      }
      insuranceClaimsSecondGrid{
        insuranceClaimsSecondGridContent
      }
      scopeOfWorkContent
      scopeOfWorkList{
        scopeOfWorkListName
      }
      straightPricingContent
      localExpertiseContent
      localExpertiseGrid{
        localExpertiseGridContent
      }
      faqSecContent
      faqSecLists{
        faqTitle
        faqAnswer
      }
      finalCtaSecContent
    }

  }
}
`))?.page;
	const stepWords = [
		"First",
		"Second",
		"Third",
		"Fourth",
		"Fifth",
		"Sixth",
		"Seventh",
		"Eighth",
		"Ninth",
		"Tenth"
	];
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Storm Damage & Emergency</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ WHAT TO DO RIGHT NOW ============ --><section class="section"><div class="container"><div class="now">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.stormEmergency?.rightNowContent || "error")}` })}<div class="now-grid">${alldata?.stormEmergency?.rightNowGrids?.map((griditems, index) => renderTemplate`<div class="now-step"><span class="n">${stepWords[index] || `Step ${index + 1}`}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(griditems?.rightNowGridContent || "error")}` })}</div>`)}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.stormEmergency?.rightNowBottomContent || "error")}` })}</div></div></section><!-- ============ DAMAGE TYPES ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.stormEmergency?.whatWeHandleContent || "error")}</div><div class="dmg">${alldata?.stormEmergency?.whatWeHandleGrids?.map((handleitems, index) => renderTemplate`<div class="d"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(handleitems?.whatWeHandleGridContent || "error")}</div></div>`)}</div></div></section><!-- ============ RESPONSE TIMELINE ============ --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.stormEmergency?.howItWorksContent || "error")}` })}<div class="tl">${alldata?.stormEmergency?.howItWorksGrids?.map((tlitems) => renderTemplate`<div class="tl-item"><div class="tl-time">${tlitems?.howItWorksGridTitle || "error"}</div><div class="tl-body">${unescapeHTML(tlitems?.howItWorksGridContent || "error")}</div></div>`)}</div></div></section><!-- ============ INSURANCE ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.stormEmergency?.insuranceClaimsContent || "error")}</div><div class="cov">${alldata?.stormEmergency?.insuranceClaimsGrids?.map((claimitems, index) => renderTemplate`<div${addAttribute(`col ${index === 0 ? "yes" : "no"}`, "class")}>${unescapeHTML(claimitems?.insuranceClaimsContent || "error")}</div>`)}</div><div class="grid-2" style="margin-top:24px">${alldata?.stormEmergency?.insuranceClaimsSecondGrid?.map((secgriditems, index) => renderTemplate`<div${addAttribute(`card ${index === 1 ? "pale" : ""}`, "class")}>${unescapeHTML(secgriditems?.insuranceClaimsSecondGridContent || "error")}</div>`)}</div></div></section><!-- ============ SCOPE ============ --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.stormEmergency?.scopeOfWorkContent || "error")}` })}<ul class="checks">${alldata?.stormEmergency?.scopeOfWorkList?.map((scopeitems) => renderTemplate`<li>${unescapeHTML(scopeitems?.scopeOfWorkListName || "error")}</li>`)}</ul></div></section><!-- ============ COST ============ --><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.stormEmergency?.straightPricingContent || "error")}</div></div></section><!-- ============ NH STORMS ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.stormEmergency?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.stormEmergency?.localExpertiseGrid?.map((localitems) => renderTemplate`<div class="card">${unescapeHTML(localitems?.localExpertiseGridContent || "error")}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><!-- ============ FAQ ============ --><section class="section"><div class="container narrow"><div style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.stormEmergency?.faqSecContent || "error")}</div><div class="faq-list">${alldata?.stormEmergency?.faqSecLists?.map((faqitems) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faqitems?.faqTitle || "error"}</span><span class="p"></span></button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswer || "error")}</div></div>`)}</div></div></section><!-- ============ SERVICE AREAS ============ --><!-- ============ RELATED ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.stormEmergency?.finalCtaSecContent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "/home/claude/roofing_check/roofing/src/pages/service/storm-emergency.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/storm-emergency.astro";
var $$url = "/service/storm-emergency";
//#endregion
//#region \0virtual:astro:page:src/pages/service/storm-emergency@_@astro
var page = () => storm_emergency_exports;
//#endregion
export { page };

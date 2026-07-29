import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/metal-roofing.astro
var metal_roofing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$MetalRoofing,
	file: () => $$file,
	url: () => $$url
});
var $$MetalRoofing = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/metal-roofing", idType: URI) {
    title
    content
    metalRoofing{
      whatWeDoContent
      compresiionContent
      compressionTable
      installContent
      installcontentGrid{
        installDataaGrid
      }
      whyMetalContent
      whyMetalGrid{
        whymetalLists
      }
      straightAnswerContent
      straightanswerLists{
        aswerListsss
      }
      scopeworkData
      scopeLists{
        scopelistName
      }
      traightPricingContent
      howWorkContent
      stephowWork{
        workContentHow
      }
      expertiseContent
      expertiseGrid{
        expertiseData
      }
      faqContent
      faqList{
        faqTitle
        faqAnswer
      }
      ctaContent
    }

  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">metal-roofing</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><section class="section"><div class="container narrow">${unescapeHTML(alldata?.metalRoofing?.whatWeDoContent || "error")}</div></section><!-- ============ METAL VS ASPHALT ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.metalRoofing?.compresiionContent || "error")}</div><div class="cmp">${unescapeHTML(alldata?.metalRoofing?.compressionTable || "error")}</div></div></section><!-- ============ SYSTEM TYPES ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.metalRoofing?.installContent || "error")}</div><div class="sys">${alldata?.metalRoofing?.installcontentGrid.map((items) => renderTemplate`<div class="s">${unescapeHTML(items?.installDataaGrid || "error")}</div>`)}</div></div></section><!-- ============ BENEFITS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.metalRoofing?.whyMetalContent || "error")}</div><div class="ben">${alldata?.metalRoofing?.whyMetalGrid?.map((metalitems, index) => renderTemplate`<div class="b"${addAttribute(index, "key")}><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(metalitems?.whymetalLists || "error")}</div></div>`)}</div></div></section><!-- ============ MYTHS ============ --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.metalRoofing?.straightAnswerContent || "error")}</div><div class="grid-2">${alldata?.metalRoofing?.straightanswerLists.map((answlist) => renderTemplate`<div class="myth">${unescapeHTML(answlist?.aswerListsss || "error")}</div>`)}</div></div></section><!-- ============ SCOPE ============ --><section class="section alt"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.metalRoofing?.scopeworkData || "error")}` })}<ul class="checks">${alldata?.metalRoofing?.scopeLists?.map((scopelistss, index) => renderTemplate`<li${addAttribute(index, "key")}>${scopelistss?.scopelistName || "error"}</li>`)}</ul></div></section><!-- ============ COST ============ --><section class="section"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.metalRoofing?.traightPricingContent || "error")}</div></div></section><!-- ============ PROCESS ============ --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.metalRoofing?.howWorkContent || "error")}</div><div class="steps">${alldata?.metalRoofing?.stephowWork?.map((stepitems, index) => renderTemplate`<div class="step"${addAttribute(index, "key")}><span class="n">Step${" "}${String(index + 1).padStart(2, "0")}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(stepitems?.workContentHow || "error")}` })}</div>`)}</div></div></section><!-- ============ NH WEATHER ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.metalRoofing?.expertiseContent || "error")}</div><div class="grid-2">${alldata?.metalRoofing?.expertiseGrid.map((expitems) => renderTemplate`<div class="card">${unescapeHTML(expitems?.expertiseData || "error")}</div>`)}</div></div></section><section class="section" style="background: #fff;"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.metalRoofing?.faqContent || "error")}</div><div class="faq-list">${alldata?.metalRoofing?.faqList.map((faqitems) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqitems?.faqTitle || "error"}${" "}</span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswer || "error")}</div>` })}</div>`)}</div></div></section><!-- ============ RECENT WORK ============ --><div style="background: #f6f7f9;">${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}</div><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.metalRoofing?.ctaContent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "/home/claude/roofing_check/roofing/src/pages/service/metal-roofing.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/metal-roofing.astro";
var $$url = "/service/metal-roofing";
//#endregion
//#region \0virtual:astro:page:src/pages/service/metal-roofing@_@astro
var page = () => metal_roofing_exports;
//#endregion
export { page };

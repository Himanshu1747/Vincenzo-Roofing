import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/gutters-decks.astro
var gutters_decks_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuttersDecks,
	file: () => $$file,
	url: () => $$url
});
var $$GuttersDecks = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/gutters-decks", idType: URI) {
    title
    content
    guttersDecks{
      whatWeDoContent
      partOneContent
      assessmentContent
      assessmentGrids{
        assessmentGridData
      }
      optionsContent
      optionsGrids{
        optionsGridData
      }
      optionsLastData
      scopeContent
      scopeList{
        listName
      }
      straightPricingContent
      partTwoContent
      whatWeBuildContent
      whatWeBuildGrids{
        whatWeBuildGridData
      }
      materialsContent
      materialsGrid{
        materialData
      }
      scopeOfWorkSecondContent
      scopeOfWorkSecondList{
        scopeOfWorkSecondListName
      }
      straightPricingSecondSecContent
      localExpertiseContent
      localExpertiseGrids{
        localExpertiseGridContent
      }
      faqContent
      faqList{
        faqTitle
        faqAnswers
      }
      finalCtaConatent
    }

  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- ============ HERO ============ --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span style="color:#fff;">Gutters & Decks</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><!-- ============ INTRO ============ --><section class="section"><div class="container narrow">${unescapeHTML(alldata?.guttersDecks?.whatWeDoContent || "error")}</div></section><!-- ============================================================
     PART ONE: GUTTERS
============================================================= --><section class="svc-open" id="gutters"><div class="container">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.guttersDecks?.partOneContent || "error")}` })}</div></section><!-- Gutter signs --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.guttersDecks?.assessmentContent || "error")}</div><div class="signs">${alldata?.guttersDecks?.assessmentGrids?.map((griditems, index) => renderTemplate`<div class="sg"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(griditems?.assessmentGridData || "error")}</div></div>`)}</div></div></section><!-- Gutter options --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.guttersDecks?.optionsContent || "error")}</div><div class="sys">${alldata?.guttersDecks?.optionsGrids?.map((optitems, index) => renderTemplate`<div${addAttribute(`s ${index === 1 ? "feat" : ""}`, "class")}>${unescapeHTML(optitems?.optionsGridData || "error")}</div>`)}</div><div class="card pale" style="margin-top:22px">${unescapeHTML(alldata?.guttersDecks?.optionsLastData || "error")}</div></div></section><!-- Gutter scope + cost --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.guttersDecks?.scopeContent || "error")}` })}<ul class="checks">${alldata?.guttersDecks?.scopeList?.map((scopeitems) => renderTemplate`<li>${unescapeHTML(scopeitems?.listName || "error")}</li>`)}</ul></div></section><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.guttersDecks?.straightPricingContent || "error")}</div></div></section><!-- ============================================================
     PART TWO: DECKS
============================================================= --><section class="svc-open" id="decks"><div class="container">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.guttersDecks?.partTwoContent || "error")}` })}</div></section><!-- Deck services --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.guttersDecks?.whatWeBuildContent || "error")}</div><div class="signs">${alldata?.guttersDecks?.whatWeBuildGrids?.map((builditems, index) => renderTemplate`<div class="sg"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${unescapeHTML(builditems?.whatWeBuildGridData || "error")}</div></div>`)}</div></div></section><!-- Decking materials --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.guttersDecks?.materialsContent || "error")}</div><div class="sys">${alldata?.guttersDecks?.materialsGrid?.map((materialitems, index) => renderTemplate`<div${addAttribute(`s ${index === 1 ? "feat" : ""}`, "class")}>${unescapeHTML(materialitems?.materialData || "error")}</div>`)}</div></div></section><!-- Deck build standards --><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.guttersDecks?.scopeOfWorkSecondContent || "error")}` })}<ul class="checks">${alldata?.guttersDecks?.scopeOfWorkSecondList?.map((scopetwo) => renderTemplate`<li>${unescapeHTML(scopetwo?.scopeOfWorkSecondListName || "error")}</li>`)}</ul></div></section><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.guttersDecks?.straightPricingSecondSecContent || "error")}</div></div></section><!-- ============ NH CONDITIONS ============ --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.guttersDecks?.localExpertiseContent || "error")}</div><div class="grid-2">${alldata?.guttersDecks?.localExpertiseGrids?.map((localitems) => renderTemplate`<div class="card">${unescapeHTML(localitems?.localExpertiseGridContent || "error")}</div>`)}</div></div></section><!-- ============ FAQ ============ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.guttersDecks?.faqContent || "error")}</div><div class="faq-list">${alldata?.guttersDecks?.faqList?.map((faqitems) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faqitems?.faqTitle || "error"}</span><span class="plus"></span></button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswers || "error")}</div></div>`)}</div></div></section><!-- ============ RELATED SERVICES ============ -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- ============ FINAL CTA ============ --><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.guttersDecks?.finalCtaConatent || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
      document.addEventListener("DOMContentLoaded", () => {
        const faqButtons = document.querySelectorAll(".faq-q");

        faqButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const currentItem = button.closest(".faq-item");

            document.querySelectorAll(".faq-item").forEach((item) => {
              if (item !== currentItem) {
                item.classList.remove("open");
              }
            });

            currentItem.classList.toggle("open");
          });
        });
      });
    <\/script></body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/service/gutters-decks.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/gutters-decks.astro";
var $$url = "/service/gutters-decks";
//#endregion
//#region \0virtual:astro:page:src/pages/service/gutters-decks@_@astro
var page = () => gutters_decks_exports;
//#endregion
export { page };

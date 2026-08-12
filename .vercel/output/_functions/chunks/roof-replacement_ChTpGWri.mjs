import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import { t as $$Relatedservice } from "./Relatedservice_Cn25Rld7.mjs";
//#region src/pages/service/roof-replacement.astro
var roof_replacement_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoofReplacement,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$RoofReplacement = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RoofReplacement;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/roof-replacement", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    roofReplacementPage {
      whatWeDoContent
      repairOrReplaceSecContent
      repairOrReplaceGrid {
        repairOrReplaceGridContent
      }
      repairOrReplaceSecLastLine
      scopeOfWorkContent
      scopeOfWorkLists {
        scopeOfWorkListName
      }
      yourOptionsContent
      yourOptionsGrids {
        yourOptionsGridContent
      }
      noteContent
      straightPricingContent
      howItWorksContent
      howItWorksGrids {
        howItWorksGridContent
      }
      localExpertiseContent
      localExpertiseGrids {
        localExpertiseGridContent
      }
      whyVincenzoSContent
      whyVincenzoSGrids {
        whyVincenzoSGridContent
      }
      faqContent
      faqList {
        faqTitle
        faqAnswer
      }
      finalCtaContent
    }
  }
}
`))?.page;
	const seodata = alldata?.seo || {};
	const pageData = alldata?.roofReplacementPage || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Page Hero --><section class="page-hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="breadcrumb"><a href="/service/">Home</a><span>/</span><span style="color:#fff;">Roof Replacement</span></div>${alldata?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata.content)}` })}`}</div></section><!-- Intro -->${pageData?.whatWeDoContent && renderTemplate`<section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whatWeDoContent)}` })}</div></section>`}<!-- Signs --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.repairOrReplaceSecContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.repairOrReplaceSecContent)}` })}`}</div>${pageData?.repairOrReplaceGrid && renderTemplate`<div class="signs">${pageData.repairOrReplaceGrid.map((item, index) => {
		return renderTemplate`<div class="sign"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${item?.repairOrReplaceGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.repairOrReplaceGridContent)}` })}`}</div></div>`;
	})}</div>`}${pageData?.repairOrReplaceSecLastLine && renderTemplate`<div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.repairOrReplaceSecLastLine)}` })}</div>`}</div></section><!-- Scope of Work --><section class="section"><div class="container narrow">${pageData?.scopeOfWorkContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.scopeOfWorkContent)}` })}`}${pageData?.scopeOfWorkLists && renderTemplate`<ul class="checks" style="margin-top: 20px;">${pageData.scopeOfWorkLists.map((list) => renderTemplate`<li>${list?.scopeOfWorkListName}</li>`)}</ul>`}</div></section><!-- Materials --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.yourOptionsContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.yourOptionsContent)}` })}`}</div>${pageData?.yourOptionsGrids && renderTemplate`<div class="grid-2">${pageData.yourOptionsGrids.map((grid) => renderTemplate`<div class="card">${grid?.yourOptionsGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.yourOptionsGridContent)}` })}`}</div>`)}</div>`}${pageData?.noteContent && renderTemplate`<div class="card pale" style="margin-top:22px">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.noteContent)}` })}</div>`}</div></section><!-- Cost -->${pageData?.straightPricingContent && renderTemplate`<section class="section"><div class="container"><div class="cost-band">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.straightPricingContent)}` })}</div></div></section>`}<!-- Process --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.howItWorksContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.howItWorksContent)}` })}`}</div>${pageData?.howItWorksGrids && renderTemplate`<div class="steps">${pageData.howItWorksGrids.map((step, index) => {
		return renderTemplate`<div class="step"><span class="n">${`Step ${String(index + 1).padStart(2, "0")}`}</span>${step?.howItWorksGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(step.howItWorksGridContent)}` })}`}</div>`;
	})}</div>`}</div></section><!-- NH Weather --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${pageData?.localExpertiseContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.localExpertiseContent)}` })}`}</div>${pageData?.localExpertiseGrids && renderTemplate`<div class="grid-2">${pageData.localExpertiseGrids.map((grid) => renderTemplate`<div class="card">${grid?.localExpertiseGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.localExpertiseGridContent)}` })}`}</div>`)}</div>`}</div></section><!-- Why Us --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.whyVincenzoSContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whyVincenzoSContent)}` })}`}</div>${pageData?.whyVincenzoSGrids && renderTemplate`<div class="grid-2">${pageData.whyVincenzoSGrids.map((grid) => renderTemplate`<div class="card">${grid?.whyVincenzoSGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.whyVincenzoSGridContent)}` })}`}</div>`)}</div>`}</div></section><!-- FAQ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${pageData?.faqContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.faqContent)}` })}`}</div>${pageData?.faqList && renderTemplate`<div class="faq-list">${pageData.faqList.map((faq) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faq?.faqTitle}</span><span class="plus"></span></button><div class="faq-a">${faq?.faqAnswer && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(faq.faqAnswer)}` })}`}</div></div>`)}</div>`}</div></section><!-- Related Services -->${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- Final CTA -->${pageData?.finalCtaContent && renderTemplate`<section class="cta-band"><div class="cta-inner">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.finalCtaContent)}` })}</div></section>`}</main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/roof-replacement.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/roof-replacement.astro";
var $$url = "/service/roof-replacement";
//#endregion
//#region \0virtual:astro:page:src/pages/service/roof-replacement@_@astro
var page = () => roof_replacement_exports;
//#endregion
export { page };

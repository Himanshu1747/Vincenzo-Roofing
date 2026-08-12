import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import { t as $$Relatedservice } from "./Relatedservice_Cn25Rld7.mjs";
//#region src/pages/service/roof-repair.astro
var roof_repair_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoofRepair,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$RoofRepair = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RoofRepair;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/roof-repair", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    roofRepairPage {
      whatWeDoContent
      whatWeFixContent
      whatWeFixGrid {
        whatWeFixGridContent
      }
      honestAdviceContent
      honestAdviceGrid {
        honestAdviceContentGrids
      }
      scopeOfWorkContent
      scopeOfWorkList {
        scopeOfWorkListName
      }
      straightPricingContent
      howItWorksContent
      howItWorksGrids {
        howItWorksContent
      }
      localExpertiseContent
      localExpertiseGrid {
        localExpertiseGridContent
      }
      faqContent
      faqList {
        faqTitle
        faqAnswer
      }
      fialCtaContent
    }
  }
}
`))?.page;
	const seodata = alldata?.seo || {};
	const pageData = alldata?.roofRepairPage || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Page Hero --><section class="page-hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="breadcrumb"><a href="/service/">Home</a><span>/</span><span style="color:#fff;">Roof repair</span></div>${alldata?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata.content)}` })}`}</div></section><!-- Intro -->${pageData?.whatWeDoContent && renderTemplate`<section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whatWeDoContent)}` })}</div></section>`}<!-- Common Problems --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.whatWeFixContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whatWeFixContent)}` })}`}</div>${pageData?.whatWeFixGrid && renderTemplate`<div class="probs">${pageData.whatWeFixGrid.map((item, index) => {
		return renderTemplate`<div class="prob"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${item?.whatWeFixGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whatWeFixGridContent)}` })}`}</div></div>`;
	})}</div>`}</div></section><!-- Repair vs Replace --><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.honestAdviceContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.honestAdviceContent)}` })}`}</div>${pageData?.honestAdviceGrid && renderTemplate`<div class="compare">${pageData.honestAdviceGrid.map((grid) => renderTemplate`<div class="col repair">${grid?.honestAdviceContentGrids && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.honestAdviceContentGrids)}` })}`}</div>`)}</div>`}</div></section><!-- Scope of Work --><section class="section alt"><div class="container narrow">${pageData?.scopeOfWorkContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.scopeOfWorkContent)}` })}`}${pageData?.scopeOfWorkList && renderTemplate`<ul class="checks" style="margin-top: 20px;">${pageData.scopeOfWorkList.map((item) => renderTemplate`<li>${item?.scopeOfWorkListName}</li>`)}</ul>`}</div></section><!-- Cost -->${pageData?.straightPricingContent && renderTemplate`<section class="section"><div class="container"><div class="cost-band">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.straightPricingContent)}` })}</div></div></section>`}<!-- Process --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.howItWorksContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.howItWorksContent)}` })}`}</div>${pageData?.howItWorksGrids && renderTemplate`<div class="steps">${pageData.howItWorksGrids.map((item, index) => {
		return renderTemplate`<div class="step"><span class="n">${`Step ${String(index + 1).padStart(2, "0")}`}</span>${item?.howItWorksContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.howItWorksContent)}` })}`}</div>`;
	})}</div>`}</div></section><!-- NH Weather --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${pageData?.localExpertiseContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.localExpertiseContent)}` })}`}</div>${pageData?.localExpertiseGrid && renderTemplate`<div class="grid-2">${pageData.localExpertiseGrid.map((grid) => renderTemplate`<div class="card">${grid?.localExpertiseGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.localExpertiseGridContent)}` })}`}</div>`)}</div>`}</div></section><!-- Related Services --><!-- FAQ --><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${pageData?.faqContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.faqContent)}` })}`}</div>${pageData?.faqList && renderTemplate`<div class="faq-list">${pageData.faqList.map((faq) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faq?.faqTitle}</span><span class="plus"></span></button><div class="faq-a">${faq?.faqAnswer && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(faq.faqAnswer)}` })}`}</div></div>`)}</div>`}</div></section>${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- Final CTA -->${pageData?.fialCtaContent && renderTemplate`<section class="cta-band"><div class="cta-inner"><div class="center-ctas">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.fialCtaContent)}` })}</div></div></section>`}</main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/roof-repair.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/roof-repair.astro";
var $$url = "/service/roof-repair";
//#endregion
//#region \0virtual:astro:page:src/pages/service/roof-repair@_@astro
var page = () => roof_repair_exports;
//#endregion
export { page };

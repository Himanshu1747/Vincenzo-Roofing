import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import { t as $$Relatedservice } from "./Relatedservice_Cn25Rld7.mjs";
//#region src/pages/service/storm-emergency.astro
var storm_emergency_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StormEmergency,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$StormEmergency = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StormEmergency;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/storm-emergency", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    stormEmergencyPage {
      rightNowTopContent
      rightNowGrids {
        rightNowGridContent
      }
      rightNowBottomContent
      whatWeHandleContent
      whatWeHandleGrids {
        whatWeHandleGridContent
      }
      howItWorksContent
      howItWorksGrids {
        howItWorksTitleNameGrids
        howItWorksGridContent
      }
      insuranceClaimsContent
      insurance_claims_first_grids {
        insuranceClaimsFirstContetentGrid
      }
      insuranceClaimsSecondGrids {
        insuranceClaimsSecondContents
      }
      scopeOfWorkContent
      scopeOfWorkGrid {
        scopeOfWorkGridListName
      }
      straightPricingContent
      localExpertiseContent
      localExpertiseGrid {
        localExpertiseGridContents
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
	const pageData = alldata?.stormEmergencyPage || {};
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
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Hero --><section class="page-hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="breadcrumb"><a href="/service/">Home</a><span>/</span><span style="color:#fff;">Storm Damage &amp; Emergency</span></div>${alldata?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata.content)}` })}`}</div></section><!-- What to do right now --><section class="section"><div class="container"><div class="now">${pageData?.rightNowTopContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.rightNowTopContent)}` })}`}${pageData?.rightNowGrids && renderTemplate`<div class="now-grid">${pageData.rightNowGrids.map((item, index) => {
		return renderTemplate`<div class="now-step"><span class="n">${stepWords[index] || `Step ${index + 1}`}</span>${item?.rightNowGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.rightNowGridContent.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div>`;
	})}</div>`}${pageData?.rightNowBottomContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.rightNowBottomContent)}` })}`}</div></div></section><!-- Damage Types --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.whatWeHandleContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whatWeHandleContent)}` })}`}</div>${pageData?.whatWeHandleGrids && renderTemplate`<div class="dmg">${pageData.whatWeHandleGrids.map((item, index) => {
		return renderTemplate`<div class="d"><span class="n">${String(index + 1).padStart(2, "0")}</span><div>${item?.whatWeHandleGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whatWeHandleGridContent.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div></div>`;
	})}</div>`}</div></section><!-- Response Timeline --><section class="section"><div class="container narrow">${pageData?.howItWorksContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.howItWorksContent)}` })}`}${pageData?.howItWorksGrids && renderTemplate`<div class="tl">${pageData.howItWorksGrids.map((item) => renderTemplate`<div class="tl-item"><div class="tl-time">${item?.howItWorksTitleNameGrids || ""}</div><div class="tl-body">${item?.howItWorksGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.howItWorksGridContent.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div></div>`)}</div>`}</div></section><!-- Insurance --><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.insuranceClaimsContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.insuranceClaimsContent)}` })}`}</div>${pageData?.insurance_claims_first_grids && renderTemplate`<div class="cov">${pageData.insurance_claims_first_grids.map((grid, index) => {
		return renderTemplate`<div${addAttribute(index === 0 ? "col yes" : "col no", "class")}>${grid?.insuranceClaimsFirstContetentGrid && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.insuranceClaimsFirstContetentGrid.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div>`;
	})}</div>`}${pageData?.insuranceClaimsSecondGrids && renderTemplate`<div class="grid-2" style="margin-top:24px">${pageData.insuranceClaimsSecondGrids.map((grid, index) => {
		return renderTemplate`<div${addAttribute(index === 1 ? "card pale" : "card", "class")}>${grid?.insuranceClaimsSecondContents && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.insuranceClaimsSecondContents.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div>`;
	})}</div>`}</div></section><!-- Scope --><section class="section"><div class="container narrow">${pageData?.scopeOfWorkContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.scopeOfWorkContent)}` })}`}${pageData?.scopeOfWorkGrid && renderTemplate`<ul class="checks">${pageData.scopeOfWorkGrid.map((item) => renderTemplate`<li>${item?.scopeOfWorkGridListName}</li>`)}</ul>`}</div></section><!-- Cost -->${pageData?.straightPricingContent && renderTemplate`<section class="section alt"><div class="container"><div class="cost-band">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.straightPricingContent)}` })}</div></div></section>`}<!-- NH Storms / Local Expertise --><section class="section"><div class="container"><div class="narrow" style="margin-bottom:36px">${pageData?.localExpertiseContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.localExpertiseContent)}` })}`}</div>${pageData?.localExpertiseGrid && renderTemplate`<div class="grid-2">${pageData.localExpertiseGrid.map((grid) => renderTemplate`<div class="card">${grid?.localExpertiseGridContents && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.localExpertiseGridContents.replace(/<p>\s*<\/p>/g, ""))}` })}`}</div>`)}</div>`}</div></section><!-- FAQ --><section class="section"><div class="container narrow"><div style="text-align:center;margin-bottom:36px">${pageData?.faqContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.faqContent)}` })}`}</div>${pageData?.faqList && renderTemplate`<div class="faq-list">${pageData.faqList.map((faq) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${faq?.faqTitle}</span><span class="p"></span></button><div class="faq-a">${faq?.faqAnswer && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(faq.faqAnswer)}` })}`}</div></div>`)}</div>`}</div></section>${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<!-- Final CTA -->${pageData?.finalCtaContent && renderTemplate`<section class="cta-band"><div class="cta-inner"><div class="center-ctas">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.finalCtaContent)}` })}</div></div></section>`}</main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/storm-emergency.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/service/storm-emergency.astro";
var $$url = "/service/storm-emergency";
//#endregion
//#region \0virtual:astro:page:src/pages/service/storm-emergency@_@astro
var page = () => storm_emergency_exports;
//#endregion
export { page };

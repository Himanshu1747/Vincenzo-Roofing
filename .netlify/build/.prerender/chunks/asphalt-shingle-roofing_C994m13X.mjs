import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Relatedservice } from "./Relatedservice_C5NsRe0W.mjs";
//#region src/pages/service/asphalt-shingle-roofing.astro
var asphalt_shingle_roofing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$AsphaltShingleRoofing,
	file: () => $$file,
	url: () => $$url
});
var $$AsphaltShingleRoofing = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/asphalt-shingle-roofing", idType: URI) {
    title
    content
    asphaltShingleRoofing {
      introData
      shingleContents
      shingleGrids {
        shingleGridContents
      }
      windContent
      windGrids {
        windGridData
      }
      windlastastquote
      lifespanContent
      lifespanGrid {
        lifespangridData
      }
      scopeContent
      scopeList{
        listData
      }
      straightPriceContent
      consideringContent
      consideringGrid{
        consideringGridData
      }
      expertiesContent
      expertiseGrid{
        expertiseGridData
      }
      faqContent
      faqgrids{
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
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">Asphalt Shingle Roofing</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.content || "error")}` })}</div></section><section class="section"><div class="container narrow">${unescapeHTML(alldata?.asphaltShingleRoofing?.introData || "error")}</div></section><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:38px">${unescapeHTML(alldata?.asphaltShingleRoofing?.shingleContents || "error")}</div><div class="sys">${alldata?.asphaltShingleRoofing?.shingleGrids.map((itemssh) => renderTemplate`<div class="s">${unescapeHTML(itemssh?.shingleGridContents || "error")}</div>`)}</div></div></section><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.asphaltShingleRoofing?.windContent || "error")}</div><div class="wind">${alldata?.asphaltShingleRoofing?.windGrids.map((winditems) => renderTemplate`<div class="wr">${unescapeHTML(winditems?.windGridData || "error")}</div>`)}</div><div class="card" style="margin-top:24px">${unescapeHTML(alldata?.asphaltShingleRoofing?.windlastastquote || "error")}</div></div></section><section class="section alt"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.asphaltShingleRoofing?.lifespanContent || "error")}</div><div class="fac">${alldata?.asphaltShingleRoofing?.lifespanGrid?.map((lifitems, i) => renderTemplate`<div class="f"><span class="n">${String(i + 1).padStart(2, "0")}</span><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(lifitems?.lifespangridData || "error")}` })}</div></div>`)}</div></div></section><section class="section"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.asphaltShingleRoofing?.scopeContent || "error")}` })}<ul class="checks" style="margin-top: 20px;">${alldata?.asphaltShingleRoofing?.scopeList.map((scopelist) => renderTemplate`<li>${scopelist?.listData || "error"}</li>`)}</ul></div></section><section class="section alt"><div class="container"><div class="cost-band">${unescapeHTML(alldata?.asphaltShingleRoofing?.straightPriceContent || "error")}</div></div></section><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:32px">${unescapeHTML(alldata?.asphaltShingleRoofing?.consideringContent || "error")}</div><div class="grid-2">${alldata?.asphaltShingleRoofing?.consideringGrid.map((coitems) => renderTemplate`<div class="card">${unescapeHTML(coitems?.consideringGridData || "error")}</div>`)}</div></div></section><section class="section alt"><div class="container"><div class="narrow" style="margin-bottom:36px">${unescapeHTML(alldata?.asphaltShingleRoofing?.expertiesContent || "error")}</div><div class="grid-2">${alldata?.asphaltShingleRoofing?.expertiseGrid.map((itemsexpe) => renderTemplate`<div class="card">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(itemsexpe?.expertiseGridData || "error")}` })}` })}</div>`)}</div></div></section><section class="section"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(alldata?.asphaltShingleRoofing?.faqContent || "error")}</div><div class="faq-list">${alldata?.asphaltShingleRoofing?.faqgrids.map((faqitems) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqitems?.faqTitle || "error"}</span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqitems?.faqAnswer || "error")}</div>` })}</div>`)}</div></div></section>${renderComponent($$result, "Relatedservice", $$Relatedservice, {})}<section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.asphaltShingleRoofing?.ctaContent || "error")}</div></div></section>${renderComponent($$result, "Footer", $$Footer, {})}</main><script>
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
}, "/home/claude/roofing_check/roofing/src/pages/service/asphalt-shingle-roofing.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/asphalt-shingle-roofing.astro";
var $$url = "/service/asphalt-shingle-roofing";
//#endregion
//#region \0virtual:astro:page:src/pages/service/asphalt-shingle-roofing@_@astro
var page = () => asphalt_shingle_roofing_exports;
//#endregion
export { page };

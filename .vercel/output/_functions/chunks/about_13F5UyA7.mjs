import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
//#region src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$About = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query aboutpagedata {
  page(id: "/about", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    aboutPage {
      ourStoryContent
      ourStoryImage {
        node {
          mediaItemUrl
        }
      }
      ourStoryGrids {
        ourStoryGridContent
      }
      materialsWeWorkWithContent
      brandDatagrids {
        brandDatagridsContentHere
      }
      whatWeStandForContent
      whatWeStanfGrid {
        whatWeStanfGridIconImage {
          node {
            mediaItemUrl
          }
        }
        whatWeStanfGridContent
      }
      whereWeStandTodayContent
      timlineGrids {
        timlineContentGrids
      }
      finalCtaContent
    }
  }
}
`))?.page || {};
	const seodata = alldata?.seo || {};
	const aboutData = alldata?.aboutPage || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Page hero --><section class="page-hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">About</span></div>${alldata?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata.content)}` })}`}</div></section><!-- Story --><section class="section"><div class="container story-wrap"><div class="story-media"><div class="photo-frame ratio-4-3"><img${addAttribute(aboutData?.ourStoryImage?.node?.mediaItemUrl || "/about-image.webp", "src")} alt="Vincenzo's Roofing team reviewing a project plan on-site" loading="lazy"></div></div><div class="story-copy">${aboutData?.ourStoryContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(aboutData.ourStoryContent)}` })}`}</div></div></section><!-- Stats -->${aboutData?.ourStoryGrids && aboutData.ourStoryGrids.length > 0 && renderTemplate`<section class="section" style="padding-top:0;"><div class="container"><div class="stat-strip">${aboutData.ourStoryGrids.map((grid) => renderTemplate`<div class="stat-box reveal">${grid?.ourStoryGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(grid.ourStoryGridContent)}` })}`}</div>`)}</div></div></section>`}<!-- Materials Section --><section class="materials-section"><div class="container"><div class="materials-card"><!-- Section Header --><div class="materials-header">${aboutData?.materialsWeWorkWithContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(aboutData.materialsWeWorkWithContent)}` })}`}</div><!-- Divider --><hr class="materials-divider"><!-- Brands Grid Columns --><div class="brands-grid">${aboutData?.brandDatagrids?.map((brand) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(brand?.brandDatagridsContentHere)}` })}`)}</div></div></div></section><!-- Values --><section class="section"><div class="container"><div class="sec-header">${aboutData?.whatWeStandForContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(aboutData.whatWeStandForContent)}` })}`}</div><div class="values-grid">${aboutData?.whatWeStanfGrid?.map((item) => {
		const iconUrl = item?.whatWeStanfGridIconImage?.node?.mediaItemUrl;
		return renderTemplate`<div class="value-card reveal">${iconUrl && renderTemplate`<div class="why-icon"><img${addAttribute(iconUrl, "src")} alt="Value Icon" width="21" height="21" loading="lazy" decoding="async"></div>`}${item?.whatWeStanfGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whatWeStanfGridContent)}` })}`}</div>`;
	})}</div></div></section><!-- Timeline --><section class="section" style="background:var(--off);"><div class="container"><div class="sec-header">${aboutData?.whereWeStandTodayContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(aboutData.whereWeStandTodayContent)}` })}`}</div><div class="timeline">${aboutData?.timlineGrids?.map((item) => renderTemplate`<div class="timeline-item reveal">${item?.timlineContentGrids && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.timlineContentGrids)}` })}`}</div>`)}</div></div></section><!-- CTA band --><section class="cta-band"><div class="cta-inner">${aboutData?.finalCtaContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(aboutData.finalCtaContent)}` })}`}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/about.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/about.astro";
var $$url = "/about";
//#endregion
//#region \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
//#endregion
export { page };

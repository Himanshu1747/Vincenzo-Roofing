import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/location/index.astro
var location_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const [pagedata, postdata] = await Promise.all([queryWordPress(`
query locationpage {
  page(id: "/location", idType: URI) {
    title
    content
    locationPage{
      ctaLocation
    }
  }
}
`), queryWordPress(`
query locationall {
  locationpost (first: 24) {
    nodes {
      slug
      title
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            sizes {
              name
              sourceUrl
              width
              height
            }
          }
        }
      }
    }
  }
}
`)]);
	const responsedata = pagedata?.page || {};
	const postrespons = postdata?.locationpost?.nodes || [];
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">Location</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(responsedata?.content || "error")}` })}</div></section><section class="section"><div class="container"><div class="gallery-masonry">${postrespons?.map((postitems) => renderTemplate`<a${addAttribute(`/location/${postitems.slug}`, "href")} class="photo-frame" data-cat="residential"><img${addAttribute(postitems?.featuredImage?.node?.sourceUrl || "/placeholder.jpg", "src")}${addAttribute(postitems?.title, "alt")} width="434" height="289" loading="lazy" decoding="async"><div class="g-cap">${postitems?.title}</div></a>`)}</div></div></section><section class="cta-band"><div class="cta-inner">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(responsedata?.locationPage?.ctaLocation || "errror")}` })}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/location/index.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/location/index.astro";
var $$url = "/location";
//#endregion
//#region \0virtual:astro:page:src/pages/location/index@_@astro
var page = () => location_exports;
//#endregion
export { page };

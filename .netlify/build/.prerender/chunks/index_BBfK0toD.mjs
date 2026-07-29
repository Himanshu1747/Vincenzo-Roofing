import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/service/index.astro
var service_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const [pagedata, mainpag] = await Promise.all([queryWordPress(`
query AllServices {
  services {
    nodes {
      title
      slug

      # Featured Image query
      featuredImage {
        node {
          sourceUrl
        }
      }

      # Custom ACF/Field Group
      servicespost {
        iconImage {
          node {
            mediaItemUrl
          }
        }

        shortIntro
      }
    }
  }
}
`), queryWordPress(`
query servicedata {
  page(id: "/service", idType: URI) {
    title
    content
    servicePage {
      ctaContents
    }
  }
}
`)]);
	const rawServices = pagedata?.services?.nodes || [];
	const respopage = mainpag?.page;
	const desiredOrder = [
		"roof-replacement",
		"roof-repair",
		"storm-emergency-response",
		"roof-inspection",
		"asphalt-shingle-roofing",
		"metal-roofing",
		"commercial-flat-roofing",
		"siding-installation-replacement",
		"gutters-siding"
	];
	const responsedata = rawServices.sort((a, b) => {
		const indexA = desiredOrder.indexOf(a.slug);
		const indexB = desiredOrder.indexOf(b.slug);
		return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
	});
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span style="color:#fff;">Services</span></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(respopage?.content || "error")}` })}</div></section><!-- Detail rows --><section class="section"><div class="container">${responsedata.map((servotems, index) => renderTemplate`<div class="svc-detail-row"${addAttribute(servotems.slug, "id")}><div class="photo-frame ratio-4-3 reveal"><img${addAttribute(servotems?.featuredImage?.node?.sourceUrl || "https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/photo-1600585154340-be6161a56a0c.webp", "src")}${addAttribute(servotems.title, "alt")} width="644" height="483"${addAttribute(index === 0 ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(index === 0 ? "high" : "auto", "fetchpriority")}></div><div class="svc-detail-copy reveal">${servotems?.servicespost?.iconImage?.node?.mediaItemUrl && renderTemplate`<div class="svc-icon"><img${addAttribute(servotems.servicespost.iconImage.node.mediaItemUrl, "src")}${addAttribute(servotems.title, "alt")} width="23" height="23" loading="lazy" decoding="async"></div>`}<h3>${servotems.title}</h3>${servotems?.servicespost?.shortIntro && renderTemplate`<div>${unescapeHTML(servotems.servicespost.shortIntro)}</div>`}<a${addAttribute(`/service/${servotems.slug}`, "href")} class="btn btn-blue">View Details</a></div></div>`)}</div></section><!-- CTA band --><section class="cta-band"><div class="cta-inner">${unescapeHTML(respopage?.servicePage?.ctaContents || "error")}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/service/index.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/service/index.astro";
var $$url = "/service";
//#endregion
//#region \0virtual:astro:page:src/pages/service/index@_@astro
var page = () => service_exports;
//#endregion
export { page };

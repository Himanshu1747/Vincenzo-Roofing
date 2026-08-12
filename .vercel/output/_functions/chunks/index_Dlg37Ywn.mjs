import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { a as renderScript, i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import { t as $$Contactform } from "./Contactform_CxduvreT.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const page = (await queryWordPress(`
query homepagedata {
  page(id: "/", idType: URI) {
    featuredImage {
      node {
        mediaItemUrl
        altText
      }
    }
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    homePage {
      bannerQuote
      bannerWaranty
      slidingText
      bannerImage {
        node {
          mediaItemUrl
        }
      }
      whatWeDoContent
      whatWeDoGrids {
        whatWeDoIconImage {
          node {
            mediaItemUrl
          }
        }
        whatWeDoGridContent
      }
      localExpertiseContetnt
      localExpertiseGrids {
        localExpertiseGridIcon {
          node {
            mediaItemUrl
          }
        }
        localExpertiseGridContent
      }
      whyChooseUsContent
      whyChooseUsGrid {
        whyChooseUsGridIconImage {
          node {
            mediaItemUrl
          }
        }
        whyChooseUsGridContent
      }
      whyVincenzoSContent
      whyVincenzoSGrid {
        whyVincenzoSGridIconImage {
          node {
            mediaItemUrl
          }
        }
        whyVincenzoSGridContent
      }
      whyVincenzoSMainImage {
        node {
          mediaItemUrl
        }
      }
      whyVincenzoSMainImageContent
      howItWorksContent
      howItWorksGrids {
        howItWorksGridContent
      }
      emergencyResponseContent
      whereWeWorkContent
      whereWeWorkGrids {
        whereWeWorkLocationName
      }
      faqContent
      faqLists {
        faqTitle
        faqAnswer
      }
      readyForARoofContent
    }
  }
}
`))?.page || {};
	const seodata = page?.seo || {};
	const hp = page?.homePage || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Hero Section --><section class="hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container hero-inner"><div class="hero-copy">${page?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(page.content)}` })}`}</div><div class="hero-visual"><div class="hero-card"><img${addAttribute(hp?.bannerImage?.node?.mediaItemUrl || "/home-1.webp", "src")} alt="Vincenzo’s Roofing" width="615" height="460" fetchpriority="high" loading="eager" decoding="async"></div>${hp?.bannerWaranty && renderTemplate`<div class="hero-float warranty"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg></div><div class="warnaty-box">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.bannerWaranty)}` })}</div></div>`}${hp?.bannerQuote && renderTemplate`<div class="hero-float review">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.bannerQuote)}` })}</div>`}</div></div></section><!-- Marquee Trust Bar -->${hp?.slidingText && renderTemplate`<div class="marquee-wrap" aria-hidden="true"><div class="marquee" id="marquee"><p class="marquee-content">${hp.slidingText}</p></div></div>`}<!-- Services Section --><section class="section svc-section" id="services"><div class="container"><div class="sec-header">${hp?.whatWeDoContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.whatWeDoContent)}` })}`}</div><div class="svc-grid">${hp?.whatWeDoGrids?.map((item, index) => {
		const stepNum = String(index + 1).padStart(2, "0");
		const isFeature = index < 2 ? "feature " : "";
		const iconUrl = item?.whatWeDoIconImage?.node?.mediaItemUrl;
		return renderTemplate`<div${addAttribute(`svc-card ${isFeature}reveal`, "class")}><span class="svc-num">${stepNum}</span>${iconUrl && renderTemplate`<div class="svc-icon"><img${addAttribute(iconUrl, "src")} alt="Service Icon" width="23" height="23" loading="lazy" decoding="async"></div>`}${item?.whatWeDoGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whatWeDoGridContent)}` })}`}</div>`;
	})}</div></div></section><!-- Weather Section --><section class="section weather-section" id="nh-weather"><div class="container"><div class="sec-header">${hp?.localExpertiseContetnt && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.localExpertiseContetnt)}` })}`}</div><div class="weather-grid">${hp?.localExpertiseGrids?.map((item) => {
		const iconUrl = item?.localExpertiseGridIcon?.node?.mediaItemUrl;
		return renderTemplate`<div class="weather-card reveal">${iconUrl && renderTemplate`<div class="weather-icon"><img${addAttribute(iconUrl, "src")} alt="Weather Icon" width="23" height="23" loading="lazy" decoding="async"></div>`}${item?.localExpertiseGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.localExpertiseGridContent)}` })}`}</div>`;
	})}</div></div></section><!-- Why Choose Us Section --><section class="section" id="why-choose-us"><div class="container"><div class="sec-header">${hp?.whyChooseUsContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.whyChooseUsContent)}` })}`}</div><div class="wcu-grid">${hp?.whyChooseUsGrid?.map((item) => {
		const iconUrl = item?.whyChooseUsGridIconImage?.node?.mediaItemUrl;
		return renderTemplate`<div class="wcu-card reveal">${iconUrl && renderTemplate`<div class="wcu-icon"><img${addAttribute(iconUrl, "src")} alt="Choose Us Icon" width="24" height="24" loading="lazy" decoding="async"></div>`}${item?.whyChooseUsGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whyChooseUsGridContent)}` })}`}</div>`;
	})}</div></div></section><!-- Why Vincenzo's Section --><section class="section" id="why"><div class="container why-wrap"><div class="why-visual reveal"><div class="frame"><img${addAttribute(hp?.whyVincenzoSMainImage?.node?.mediaItemUrl || "/home-2.webp", "src")} alt="Why Vincenzo’s" loading="lazy" decoding="async" width="617" height="462"></div>${hp?.whyVincenzoSMainImageContent && renderTemplate`<div class="why-chip">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.whyVincenzoSMainImageContent)}` })}</div>`}</div><div>${hp?.whyVincenzoSContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.whyVincenzoSContent)}` })}`}<div class="why-list">${hp?.whyVincenzoSGrid?.map((item) => {
		const iconUrl = item?.whyVincenzoSGridIconImage?.node?.mediaItemUrl;
		return renderTemplate`<div class="why-item reveal">${iconUrl && renderTemplate`<div class="why-icon"><img${addAttribute(iconUrl, "src")} alt="Vincenzo's Icon" width="20" height="20" loading="lazy" decoding="async"></div>`}<div>${item?.whyVincenzoSGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whyVincenzoSGridContent)}` })}`}</div></div>`;
	})}</div></div></div></section><!-- Process Section --><section class="section process" id="process"><div class="container"><div class="sec-header">${hp?.howItWorksContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.howItWorksContent)}` })}`}</div><div class="process-grid">${hp?.howItWorksGrids?.map((item, index) => {
		return renderTemplate`<div class="p-step reveal"><span class="p-num">${`Step ${String(index + 1).padStart(2, "0")}`}</span>${item?.howItWorksGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.howItWorksGridContent)}` })}`}</div>`;
	})}</div></div></section><!-- Gallery Section --><section class="section" id="gallery"><div class="container"><div class="sec-header"><p><span class="eyebrow">Recent Projects</span></p><h2 class="sec-head">Real Roofs Across <span class="accent">New Hampshire</span></h2><p>Every project below was done by our own crew. Photos are ours, not stock — take a look at the work before you call.</p></div><div class="gallery-masonry"><a href="javascript:void(0)" class="photo-frame" data-cat="residential"><img src="/location-1.webp" alt="Keene, NH — Metal Roof Detail" width="434" height="289" loading="lazy" decoding="async"><div class="g-cap">Keene, NH — Metal Roof Detail</div></a><a href="javascript:void(0)" class="photo-frame" data-cat="residential"><img src="/location-2.webp" alt="Dover, NH — Multi-Unit Roofing" width="434" height="289" loading="lazy" decoding="async"><div class="g-cap">Dover, NH — Multi-Unit Roofing</div></a><a href="javascript:void(0)" class="photo-frame" data-cat="residential"><img src="/location-3.webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 434px" alt="Derry, NH — Emergency Tarping" width="434" height="289" loading="lazy" decoding="async"><div class="g-cap">Derry, NH — Emergency Tarping</div></a></div></div></section><!-- Emergency Response Banner --><section class="emergency"><div class="container"><div class="ctaholders">${hp?.emergencyResponseContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.emergencyResponseContent)}` })}`}</div></div></section><!-- Service Areas Section --><section class="section" id="areas" style="background: #F6F7F9;"><div class="container areas-wrap"><div><div class="contentonly">${hp?.whereWeWorkContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.whereWeWorkContent)}` })}`}</div><div class="area-chips">${hp?.whereWeWorkGrids?.map((item) => renderTemplate`<a class="area-chip"${addAttribute(item.whereWeWorkLocationName, "title")} href="#">${item.whereWeWorkLocationName}</a>`)}</div><a href="/about" class="btn btn-blue" style="margin-top: 25px;">Explore All</a></div><div class="map-frame reveal"><svg viewBox="0 0 520 430" xmlns="http://www.w3.org/2000/svg"><rect width="520" height="430" fill="#071F45"></rect><path d="M160 30 L355 62 L335 168 L378 232 L346 360 L188 392 L126 274 L94 126 Z" fill="#0E2B5B" stroke="#0D47A1" stroke-width="2.5"></path><g fill="#4A7FD4"><circle cx="210" cy="190" r="6"></circle><circle cx="252" cy="232" r="6"></circle><circle cx="190" cy="105" r="6"></circle><circle cx="272" cy="315" r="6"></circle><circle cx="318" cy="210" r="6"></circle></g><g fill="none" stroke="#4A7FD4" stroke-opacity="0.35" stroke-width="1.4"><circle cx="210" cy="190" r="14"></circle><circle cx="252" cy="232" r="14"></circle><circle cx="190" cy="105" r="14"></circle><circle cx="272" cy="315" r="14"></circle><circle cx="318" cy="210" r="14"></circle></g></svg></div></div></section><!-- FAQ Section --><section class="section" id="faq"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${hp?.faqContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.faqContent)}` })}`}</div><div class="faq-list">${hp?.faqLists?.map((item) => renderTemplate`<div class="faq-item"><button class="faq-q" type="button"><span>${item?.faqTitle}</span><span class="plus"></span></button><div class="faq-a">${item?.faqAnswer && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.faqAnswer)}` })}`}</div></div>`)}</div></div></section><!-- CTA Band --><section class="cta-band"><div class="cta-inner">${hp?.readyForARoofContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(hp.readyForARoofContent)}` })}`}</div></section><!-- Contact Form Section -->${renderComponent($$result, "Contactform", $$Contactform, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderScript($$result, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/index.astro?astro&type=script&index=0&lang.ts")}<script>
            document.addEventListener("DOMContentLoaded", () => {
                const faqButtons = document.querySelectorAll(".faq-q");

                faqButtons.forEach((button) => {
                    button.addEventListener("click", () => {
                        const currentItem = button.closest(".faq-item");

                        document
                            .querySelectorAll(".faq-item")
                            .forEach((item) => {
                                if (item !== currentItem) {
                                    item.classList.remove("open");
                                }
                            });

                        currentItem.classList.toggle("open");
                    });
                });
            });
        <\/script></body></html>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/index.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

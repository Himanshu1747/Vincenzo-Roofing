import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, g as maybeRenderHead, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { a as renderScript, i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
import { t as $$Contactform } from "./Contactform_2Oc9u69s.mjs";
//#region src/components/Faqcompo.astro
var $$Faqcompo = createComponent(async ($$result, $$props, $$slots) => {
	const finaldata = (await queryWordPress(`
query faqposts{
 faqs(first: 50){
    nodes {
      title
      content
    }
  }
}
`)).faqs.nodes;
	return renderTemplate`${maybeRenderHead($$result)}<div class="faq-list">${finaldata.map((faqitems) => renderTemplate`<div class="faq-item"><button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqitems?.title || "error"}</span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqitems?.content || "error")}</div></div>`)}</div><script>
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
<\/script>`;
}, "/home/claude/roofing_check/roofing/src/components/Faqcompo.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const [postdata, pagedata] = await Promise.all([queryWordPress(`
query locationall {
  locationpost(first: 3) {
    nodes {
      slug
      title
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
`), queryWordPress(`
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
    homepage {
      imageWaranty
      imageReview
      slidingText
      whatWeDoContent
      whyChooseContent
      whyChooseGrid {
        iconImage {
          node {
            mediaItemUrl
          }
        }
        gridData
      }
      whyVincenzoContent
      whyVincenzoList {
        vincenzoIcon {
          node {
            mediaItemUrl
          }
        }
        vincenzoDetails
      }
      whyVincenzoImage {
        node {
          mediaItemUrl
        }
      }
      localExpertisContents
      expertiseGrids{
        expertiseIcon{
          node{
            mediaItemUrl
          }
        }
        expertiseData
      }
      recentProjectsContent
      imageContent
      howWorkContent
      howWorkGrid {
        contentGridSteps
      }
      allTimeAvaialbelData
      faqHomeContents
      finalCtaData
      serviceAreaContent
      testimonialContents
      allAreas{
        areaPageLinks{
          url
        }
        areaName
      }
      exploreAllAreas{
        url
        title
      }
      whatWeDoGrids{
        whatIconImage{
          node{
            mediaItemUrl
          }
        }
        serviceName
        serviceIntro
        serviceLink{
          url
          title
        }
      }
    }
  }
}
`)]);
	const postrespons = postdata?.locationpost?.nodes || [];
	const responsedata = pagedata?.page || {};
	const rawServices = pagedata?.services?.nodes || [];
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
	rawServices.sort((a, b) => {
		const indexA = desiredOrder.indexOf(a.slug);
		const indexB = desiredOrder.indexOf(b.slug);
		return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
	});
	function buildSrcSet(sizes) {
		if (!sizes || !sizes.length) return void 0;
		return sizes.filter((s) => s?.sourceUrl && s?.width).map((s) => `${s.sourceUrl} ${s.width}w`).join(", ");
	}
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Hero --><section class="hero"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container hero-inner"><div class="hero-copy">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(responsedata?.content || "error")}` })}</div><div class="hero-visual"><div class="hero-card"><img${addAttribute(responsedata?.featuredImage?.node?.mediaItemUrl || "error", "src")} alt="Vincenzo’s Roofing" width="615" height="460" fetchpriority="high" loading="eager" decoding="async"></div><div class="hero-float warranty"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg></div><div class="warnaty-box">${unescapeHTML(responsedata?.homepage?.imageWaranty || "error")}</div></div><div class="hero-float review">${unescapeHTML(responsedata?.homepage?.imageReview || "error")}</div></div></div></section><!-- Marquee trust bar --><div class="marquee-wrap" aria-hidden="true"><div class="marquee" id="marquee"><p class="marquee-content">${responsedata?.homepage?.slidingText || "error"}</p></div></div><!-- Services --><section class="section svc-section" id="services"><div class="container"><div class="sec-header">${unescapeHTML(responsedata?.homepage?.whatWeDoContent || "error")}</div><div class="svc-grid">${responsedata?.homepage?.whatWeDoGrids?.map((svcItem, index) => renderTemplate`<div${addAttribute(`svc-card ${index < 2 ? "feature " : ""}reveal`, "class")}><span class="svc-num">${String(index + 1).padStart(2, "0")}</span><div class="svc-icon"><img${addAttribute(svcItem?.whatIconImage?.node?.mediaItemUrl || "error", "src")} width="23" height="23" loading="lazy" decoding="async"${addAttribute(svcItem?.serviceName || "Service", "alt")}></div><h3>${svcItem?.serviceName || "error"}</h3><div>${unescapeHTML(svcItem?.serviceIntro || "error")}</div><a class="svc-arrow"${addAttribute(svcItem?.serviceLink?.url || "#", "href")}>${svcItem?.serviceLink?.title || "Explore Now"}</a></div>`)}</div></div></section><section class="section weather-section" id="nh-weather"><div class="container"><div class="sec-header">${unescapeHTML(responsedata?.homepage?.localExpertisContents || "error")}</div><div class="weather-grid">${responsedata?.homepage?.expertiseGrids.map((items) => renderTemplate`<div class="weather-card reveal"><div class="weather-icon"><img${addAttribute(items?.expertiseIcon?.node?.mediaItemUrl || "error", "src")} alt="" height="23" width="23" loading="lazy"></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(items?.expertiseData || "error")}` })}</div>`)}</div></div></section><!-- Why Choose Us (Unique Layout) --><section class="section" id="why-choose-us"><div class="container"><div class="sec-header">${unescapeHTML(responsedata?.homepage?.whyChooseContent || "error")}</div><div class="wcu-grid">${responsedata?.homepage?.whyChooseGrid.map((chooseitems) => renderTemplate`<div class="wcu-card reveal"><div class="wcu-icon"><img${addAttribute(chooseitems?.iconImage?.node?.mediaItemUrl || "error", "src")} alt="icon-image" width="24" height="24" loading="lazy" decoding="async"></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(chooseitems?.gridData || "error")}` })}</div>`)}</div></div></section><section class="section" id="why"><div class="container why-wrap"><div class="why-visual reveal"><div class="frame"><img${addAttribute(responsedata?.homepage?.whyVincenzoImage?.node?.mediaItemUrl || "error", "src")} alt="Why Vincenzo’s" loading="lazy" decoding="async" width="617" height="462"></div><div class="why-chip">${unescapeHTML(responsedata?.homepage?.imageContent || "error")}</div></div><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(responsedata?.homepage?.whyVincenzoContent || "error")}` })}<div class="why-list">${responsedata?.homepage?.whyVincenzoList.map((vincenzoitems) => renderTemplate`<div class="why-item reveal"><div class="why-icon"><img${addAttribute(vincenzoitems?.vincenzoIcon?.node?.mediaItemUrl || "error", "src")} alt="icon" height="20" width="20" loading="lazy" decoding="async"></div><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(vincenzoitems?.vincenzoDetails || "error")}` })}</div></div>`)}</div></div></div></section><!-- Process --><section class="section process" id="process"><div class="container"><div class="sec-header">${unescapeHTML(responsedata?.homepage?.howWorkContent || "error")}</div><div class="process-grid">${responsedata?.homepage?.howWorkGrid?.map((whyitems, index) => renderTemplate`<div class="p-step reveal"><span class="p-num">Step${" "}${String(index + 1).padStart(2, "0")}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(whyitems?.contentGridSteps || "error")}` })}</div>`)}</div></div></section><!-- Gallery --><section class="section" id="gallery"><div class="container"><div class="sec-header">${unescapeHTML(responsedata?.homepage?.recentProjectsContent || "error")}</div><div class="gallery-masonry">${postrespons?.map((postitems) => {
		const sizes = postitems?.featuredImage?.node?.mediaDetails?.sizes;
		const srcset = buildSrcSet(sizes);
		return renderTemplate`<a href="javascript:void(0)" class="photo-frame" data-cat="residential"><img${addAttribute(postitems?.featuredImage?.node?.sourceUrl || "/placeholder.jpg", "src")}${addAttribute(srcset, "srcset")} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 434px"${addAttribute(postitems?.title, "alt")} width="434" height="289" loading="lazy" decoding="async"><div class="g-cap">${postitems?.title}</div></a>`;
	})}</div><!-- <p class="note">
                        Illustrative placeholders — swap in real project
                        photography before launch.
                    </p> --></div></section><!-- Testimonials --><!-- <section class="section testi">
                <div class="container">
                    <div
                        class="sec-header"
                        set:html={responsedata?.homepage?.testimonialContents ||
                            "error"}
                    />
                    <Testimonials />
                    <p class="note">
                        Placeholder testimonials for layout — replace with
                        verified Google reviews before launch.
                    </p>
                </div>
            </section> --><section class="emergency"><div class="container">${unescapeHTML(responsedata?.homepage?.allTimeAvaialbelData || "error")}</div></section><!-- Areas --><section class="section" id="areas" style="background: #F6F7F9;"><div class="container areas-wrap"><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(responsedata?.homepage?.serviceAreaContent || "error")}` })}<div class="area-chips">${responsedata?.homepage?.allAreas?.map((locationitems) => renderTemplate`<a class="area-chip"${addAttribute(locationitems?.areaName || "error", "title")}${addAttribute(locationitems?.areaPageLinks?.url || "error", "href")}>${locationitems?.areaName || "error"}</a>`)}</div><a${addAttribute(responsedata?.homepage?.exploreAllAreas?.url || "error", "href")} class="btn btn-blue" style="margin-top: 25px;">${responsedata?.homepage?.exploreAllAreas?.title || "error"}</a></div><div class="map-frame reveal"><svg viewBox="0 0 520 430" xmlns="http://www.w3.org/2000/svg"><rect width="520" height="430" fill="#071F45"></rect><path d="M160 30 L355 62 L335 168 L378 232 L346 360 L188 392 L126 274 L94 126 Z" fill="#0E2B5B" stroke="#0D47A1" stroke-width="2.5"></path><g fill="#4A7FD4"><circle cx="210" cy="190" r="6"></circle><circle cx="252" cy="232" r="6"></circle><circle cx="190" cy="105" r="6"></circle><circle cx="272" cy="315" r="6"></circle><circle cx="318" cy="210" r="6"></circle></g><g fill="none" stroke="#4A7FD4" stroke-opacity="0.35" stroke-width="1.4"><circle cx="210" cy="190" r="14"></circle><circle cx="252" cy="232" r="14"></circle><circle cx="190" cy="105" r="14"></circle><circle cx="272" cy="315" r="14"></circle><circle cx="318" cy="210" r="14"></circle></g><text x="260" y="416" fill="#7A8FB4" font-family="Montserrat,sans-serif" font-weight="600" font-size="11" text-anchor="middle" letter-spacing="2">SERVING ALL OF NEW HAMPSHIRE</text></svg></div></div></section><!-- FAQ --><section class="section" id="faq"><div class="container"><div class="sec-header" style="text-align:center; margin:0 auto 40px;">${unescapeHTML(responsedata?.homepage?.faqHomeContents || "error")}</div>${renderComponent($$result, "Faqcompo", $$Faqcompo, {})}</div></section><!-- CTA band --><section class="cta-band"><div class="cta-inner">${unescapeHTML(responsedata?.homepage?.finalCtaData || "error")}</div></section><!-- Contact -->${renderComponent($$result, "Contactform", $$Contactform, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderScript($$result, "/home/claude/roofing_check/roofing/src/pages/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/index.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

import { i as __exportAll, r as createComponent } from "./consts_ST8RfIaD.mjs";
import { O as createAstro, _ as renderHead, f as renderTemplate, i as renderComponent } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/location/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://example.com");
async function getStaticPaths() {
	return ((await queryWordPress(`
    query locationall {
      locationpost {
        nodes {
          slug
          title
          excerpt
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `))?.locationpost?.nodes || []).map((post) => ({
		params: { slug: post.slug },
		props: { post }
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { post } = Astro.props;
	return renderTemplate`<html lang="en" data-astro-cid-cbq6hqdo><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": post?.title,
		"description": post?.excerpt || "Location details",
		"data-astro-cid-cbq6hqdo": true
	})}<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">${renderHead($$result)}</head><body data-astro-cid-cbq6hqdo>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-cbq6hqdo": true })}<main id="top" data-astro-cid-cbq6hqdo><section class="page-hero" data-astro-cid-cbq6hqdo><div class="container" data-astro-cid-cbq6hqdo><div class="breadcrumb" data-astro-cid-cbq6hqdo><a href="/" data-astro-cid-cbq6hqdo>Home</a><span data-astro-cid-cbq6hqdo>/</span><a href="/location" style="color:#fff;" data-astro-cid-cbq6hqdo>Locations</a><span data-astro-cid-cbq6hqdo>/</span><span style="color:#9CC0FF;" data-astro-cid-cbq6hqdo>${post?.title}</span></div><h1 class="fade-up" data-astro-cid-cbq6hqdo>${post?.title}</h1></div></section><section class="contanrt-data section" data-astro-cid-cbq6hqdo><div class="container" data-astro-cid-cbq6hqdo><div class="all-mydata" data-astro-cid-cbq6hqdo><h2 data-astro-cid-cbq6hqdo>Gutters &amp; Siding</h2><p data-astro-cid-cbq6hqdo>Protect your home from water damage and improve its curb appeal with our professional gutter and siding services. We install seamless gutters, perform reliable gutter repairs, and provide quality siding solutions designed to keep your home’s exterior looking its best year-round.</p><p data-astro-cid-cbq6hqdo>Whether you’re replacing an aging roof or upgrading your home’s exterior, our team ensures every component works together for a clean, polished finish. Properly installed gutters help direct rainwater away from your foundation, while durable siding adds an extra layer of protection against the elements.</p><h3 data-astro-cid-cbq6hqdo>Our Gutters &amp; Siding Services Include:</h3><ul data-astro-cid-cbq6hqdo><li data-astro-cid-cbq6hqdo>Seamless gutter installation</li><li data-astro-cid-cbq6hqdo>Gutter repair and replacement</li><li data-astro-cid-cbq6hqdo>Downspout installation and repair</li><li data-astro-cid-cbq6hqdo>Vinyl and fiber cement siding installation</li><li data-astro-cid-cbq6hqdo>Siding repair and replacement</li><li data-astro-cid-cbq6hqdo>Exterior trim and finishing work</li><li data-astro-cid-cbq6hqdo>Complete exterior upgrades with roofing projects</li></ul><p data-astro-cid-cbq6hqdo>We use high-quality materials and proven installation techniques to deliver lasting performance and a seamless appearance. Whether you need a minor repair or a complete exterior renovation, our team is committed to providing reliable workmanship and exceptional service.</p></div></div></section><section class="gallery-sec section" data-astro-cid-cbq6hqdo><div class="container" data-astro-cid-cbq6hqdo><div class="center-data" data-astro-cid-cbq6hqdo><h3 data-astro-cid-cbq6hqdo>Cedar/Wood Fence Gallery</h3><p data-astro-cid-cbq6hqdo>Explore our collection of custom cedar and wood fence installations, showcasing quality craftsmanship, natural beauty, and durable designs that enhance the privacy and curb appeal of every property.</p></div><div class="gallery-grids" data-astro-cid-cbq6hqdo><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-768x576.webp 768w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="eager" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-768x576.webp 768w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241125133841_0008_D1-1536x1152.webp 1536w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="lazy" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-768x576.webp 768w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/DJI_20241127115818_0022_D-1536x1152.webp 1536w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="lazy" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-768x576.webp 768w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/metal-roofing-nh-1536x1152.webp 1536w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="lazy" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-768x576.webp 768w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-Expert-1536x1152.webp 1536w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="lazy" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div><div class="gallery-image" data-astro-cid-cbq6hqdo><a href="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor.webp" class="glightbox" data-gallery="fence-gallery" data-astro-cid-cbq6hqdo><img src="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-1024x768.webp" srcset="https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-300x225.webp 300w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-1024x768.webp 1024w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-150x150.webp 150w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-768x576.webp 768w, https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Trusted-Roofing-Siding-Contractor-1536x1152.webp 1536w" sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" alt="Gutters &amp; Siding" loading="lazy" decoding="async" width="388" height="305" data-astro-cid-cbq6hqdo></a></div></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-cbq6hqdo": true })}<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js" defer><\/script><script>
      function initGallery() {
        if (typeof GLightbox === "function") {
          const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: true,
          });
        } else {
          setTimeout(initGallery, 100);
        }
      }
      window.addEventListener("load", initGallery);
      document.addEventListener("astro:page-load", initGallery);
    <\/script></body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/location/[...slug].astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/location/[...slug].astro";
var $$url = "/location/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/location/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };

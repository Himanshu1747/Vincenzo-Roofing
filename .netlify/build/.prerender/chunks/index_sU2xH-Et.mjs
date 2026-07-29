import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { a as renderScript, i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const [pageResponse, data] = await Promise.all([queryWordPress(`
query blogpage {
  page(id: "/blog", idType: URI) {
    title
    content
  }
}
`), queryWordPress(`
  query MainBlog {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
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
	const pageData = pageResponse?.page;
	const posts = data?.posts?.nodes || [];
	const featuredPost = posts[0];
	const gridPosts = posts.slice(1);
	function formatDate(dateString) {
		if (!dateString) return "";
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric"
		});
	}
	function cleanExcerpt(excerpt) {
		if (!excerpt) return "";
		return excerpt.replace(/<[^>]*>?/gm, "").trim();
	}
	function getImageUrl(imgNode, fallback) {
		if (!imgNode) return fallback;
		return (imgNode.mediaDetails?.sizes || []).find((s) => s.name === "large")?.sourceUrl || imgNode.sourceUrl || fallback;
	}
	function getImageSrcSet(imgNode) {
		const sizes = imgNode?.mediaDetails?.sizes || [];
		if (!sizes.length) return void 0;
		return sizes.filter((s) => s.sourceUrl && s.width).map((s) => `${s.sourceUrl} ${s.width}w`).join(", ");
	}
	function getImageDimensions(imgNode, fallback) {
		const large = (imgNode?.mediaDetails?.sizes || []).find((s) => s.name === "large");
		if (large?.width && large?.height) return {
			width: large.width,
			height: large.height
		};
		if (imgNode?.mediaDetails?.width && imgNode?.mediaDetails?.height) return {
			width: imgNode.mediaDetails.width,
			height: imgNode.mediaDetails.height
		};
		return fallback;
	}
	const FEATURED_FALLBACK = {
		width: 1200,
		height: 800
	};
	const GRID_FALLBACK = {
		width: 800,
		height: 600
	};
	const GRID_IMG_FALLBACK_URL = "https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1.webp";
	const INITIAL_COUNT = 9;
	const visibleGridPosts = gridPosts.slice(0, INITIAL_COUNT);
	const deferredGridPosts = gridPosts.slice(INITIAL_COUNT);
	const deferredPayload = deferredGridPosts.map((post) => {
		const node = post.featuredImage?.node;
		const dims = getImageDimensions(node, GRID_FALLBACK);
		return {
			slug: post.slug,
			title: post.title,
			excerpt: cleanExcerpt(post.excerpt),
			date: formatDate(post.date),
			imgSrc: getImageUrl(node, GRID_IMG_FALLBACK_URL),
			imgSrcSet: getImageSrcSet(node) || "",
			imgWidth: dims.width,
			imgHeight: dims.height,
			imgAlt: node?.altText || post.title
		};
	});
	const deferredJson = JSON.stringify(deferredPayload).replace(/</g, "\\u003c");
	return renderTemplate`<html lang="en" data-astro-cid-x255k2k2><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION,
		"data-astro-cid-x255k2k2": true
	})}<link rel="preconnect" href="https://staging2.vincenzoroofing.com" crossorigin><link rel="dns-prefetch" href="https://staging2.vincenzoroofing.com">${renderHead($$result)}</head><body data-astro-cid-x255k2k2>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-x255k2k2": true })}<main id="top" data-astro-cid-x255k2k2><section class="page-hero" data-astro-cid-x255k2k2><div class="container" data-astro-cid-x255k2k2><div class="breadcrumb" data-astro-cid-x255k2k2><a href="/" data-astro-cid-x255k2k2>Home</a><span data-astro-cid-x255k2k2>/</span><span data-astro-cid-x255k2k2>Blog &amp; Resources</span></div>${pageData && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.content)}` })}`}</div></section><section class="section" style="background: var(--off);" data-astro-cid-x255k2k2><div class="container" data-astro-cid-x255k2k2>${featuredPost && (() => {
		const node = featuredPost.featuredImage?.node;
		const dims = getImageDimensions(node, FEATURED_FALLBACK);
		return renderTemplate`<article class="featured-article-card"${addAttribute(`window.location.href='/blog/${featuredPost.slug}'`, "onclick")} style="cursor: pointer;" data-astro-cid-x255k2k2><div class="featured-img" data-astro-cid-x255k2k2><img${addAttribute(getImageUrl(node, "https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/image-1-1.webp"), "src")}${addAttribute(getImageSrcSet(node), "srcset")} sizes="(max-width: 1024px) 100vw, 55vw"${addAttribute(dims.width, "width")}${addAttribute(dims.height, "height")}${addAttribute(node?.altText || featuredPost.title, "alt")} loading="eager" fetchpriority="high" decoding="async" data-astro-cid-x255k2k2></div><div class="featured-body" data-astro-cid-x255k2k2><div class="meta-tag" data-astro-cid-x255k2k2><span class="category" data-astro-cid-x255k2k2>Featured Guide</span><span class="read-time" data-astro-cid-x255k2k2>Latest Article</span></div><h2 data-astro-cid-x255k2k2><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} data-astro-cid-x255k2k2>${featuredPost.title}</a></h2><p data-astro-cid-x255k2k2>${cleanExcerpt(featuredPost.excerpt)}</p><div class="blog-footer" style="border: none; padding-bottom: 10px;" data-astro-cid-x255k2k2><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="read-more-link" data-astro-cid-x255k2k2>Read Article</a></div><div class="author-strip" data-astro-cid-x255k2k2><div class="author-info" data-astro-cid-x255k2k2><span data-astro-cid-x255k2k2>Published ${formatDate(featuredPost.date)}</span></div></div></div></article>`;
	})()}<div class="blog-grid" id="blog-grid" data-astro-cid-x255k2k2>${visibleGridPosts.map((post, index) => {
		const node = post.featuredImage?.node;
		const dims = getImageDimensions(node, GRID_FALLBACK);
		return renderTemplate`<article class="blog-card"${addAttribute(`window.location.href='/blog/${post.slug}'`, "onclick")} style="cursor: pointer;" data-astro-cid-x255k2k2><div class="blog-media" data-astro-cid-x255k2k2><span class="blog-cat-badge" data-astro-cid-x255k2k2>Article</span><img${addAttribute(getImageUrl(node, GRID_IMG_FALLBACK_URL), "src")}${addAttribute(getImageSrcSet(node), "srcset")} sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"${addAttribute(dims.width, "width")}${addAttribute(dims.height, "height")}${addAttribute(node?.altText || post.title, "alt")}${addAttribute(index < 3 ? "eager" : "lazy", "loading")}${addAttribute(index < 3 ? "high" : "auto", "fetchpriority")} decoding="async" data-astro-cid-x255k2k2></div><div class="blog-content" data-astro-cid-x255k2k2><span class="blog-date" data-astro-cid-x255k2k2>${formatDate(post.date)}</span><h3 data-astro-cid-x255k2k2><a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-x255k2k2>${post.title}</a></h3><p data-astro-cid-x255k2k2>${cleanExcerpt(post.excerpt)}</p><div class="blog-footer" data-astro-cid-x255k2k2><a${addAttribute(`/blog/${post.slug}`, "href")} class="read-more-link" data-astro-cid-x255k2k2>Read Article</a></div></div></article>`;
	})}</div>${deferredGridPosts.length > 0 && renderTemplate`<div class="pagination" id="load-more-wrap" data-astro-cid-x255k2k2><button type="button" id="load-more-btn" class="btn btn-blue" data-batch-size="9" data-astro-cid-x255k2k2>Load More Articles</button></div>`}<script type="application/json" id="more-posts-data">${unescapeHTML(deferredJson)}<\/script></div></section><section class="cta-band" data-astro-cid-x255k2k2><div class="cta-inner" data-astro-cid-x255k2k2><h2 data-astro-cid-x255k2k2>Ready for a roof that&rsquo;s <em data-astro-cid-x255k2k2>built for here?</em></h2><div class="btns" data-astro-cid-x255k2k2><a class="btn btn-blue" href="/contact" data-astro-cid-x255k2k2>Get Your Free Estimate</a><a class="btn btn-ghost-w" href="tel:+16035550199" data-astro-cid-x255k2k2>Call Now</a></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-x255k2k2": true })}${renderScript($$result, "/home/claude/roofing_check/roofing/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/blog/index.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };

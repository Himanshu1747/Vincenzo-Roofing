import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { a as renderScript, i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const [pageResponse, rawData] = await Promise.all([queryWordPress(`
query blogpage {
  page(id: "/blog", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
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
	const seodata = (pageResponse?.page)?.seo || {};
	const posts = rawData?.posts?.nodes || rawData?.data?.posts?.nodes || [];
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
		if (!imgNode) return fallback;
		const large = (imgNode.mediaDetails?.sizes || []).find((s) => s.name === "large");
		const w = parseInt(large?.width || imgNode.mediaDetails?.width, 10);
		const h = parseInt(large?.height || imgNode.mediaDetails?.height, 10);
		if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) return {
			width: w,
			height: h
		};
		return fallback;
	}
	const FEATURED_FALLBACK = {
		width: 1024,
		height: 768
	};
	const GRID_FALLBACK = {
		width: 800,
		height: 600
	};
	const FALLBACK_IMG = "https://staging.vincenzoroofing.com/wp-content/uploads/2026/08/metal-roofing-nh-1.png";
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
			imgSrc: getImageUrl(node, FALLBACK_IMG),
			imgSrcSet: getImageSrcSet(node) || "",
			imgWidth: dims.width,
			imgHeight: dims.height,
			imgAlt: node?.altText || post.title
		};
	});
	const deferredJson = JSON.stringify(deferredPayload).replace(/</g, "\\u003c");
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}<link rel="preconnect" href="https://staging.vincenzoroofing.com" crossorigin><link rel="dns-prefetch" href="https://staging.vincenzoroofing.com">${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span>Blog &amp; Resources</span></div><h1>Insights, Tips &amp; <span style="color: #9cc0ff;">Industry Updates</span></h1><p>Stay informed with our latest articles, expert insights, practical tips, and industry news. Explore valuable resources designed to help you make informed decisions and stay ahead with the latest trends.</p></div></section><section class="section" style="background: var(--off);"><div class="container">${featuredPost && (() => {
		const node = featuredPost.featuredImage?.node;
		const dims = getImageDimensions(node, FEATURED_FALLBACK);
		return renderTemplate`<article class="featured-article-card"${addAttribute(`window.location.href='/blog/${featuredPost.slug}'`, "onclick")} style="cursor: pointer;"><div class="featured-img"><img${addAttribute(getImageUrl(node, FALLBACK_IMG), "src")}${addAttribute(getImageSrcSet(node), "srcset")} sizes="(max-width: 1024px) 100vw, 55vw"${addAttribute(dims.width, "width")}${addAttribute(dims.height, "height")}${addAttribute(node?.altText || featuredPost.title, "alt")} loading="eager" fetchpriority="high" decoding="async"></div><div class="featured-body"><div class="meta-tag"><span class="category">Featured Guide</span><span class="read-time">Latest Article</span></div><h2><a${addAttribute(`/blog/${featuredPost.slug}`, "href")}>${featuredPost.title}</a></h2><p>${cleanExcerpt(featuredPost.excerpt)}</p><div class="blog-footer" style="border: none; padding-bottom: 10px;"><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="read-more-link">Read Article</a></div><div class="author-strip"><div class="author-info"><span>Published ${formatDate(featuredPost.date)}</span></div></div></div></article>`;
	})()}<div class="blog-grid" id="blog-grid">${visibleGridPosts.map((post, index) => {
		const node = post.featuredImage?.node;
		const dims = getImageDimensions(node, GRID_FALLBACK);
		return renderTemplate`<article class="blog-card"${addAttribute(`window.location.href='/blog/${post.slug}'`, "onclick")} style="cursor: pointer;"><div class="blog-media"><span class="blog-cat-badge">Article</span><img${addAttribute(getImageUrl(node, FALLBACK_IMG), "src")}${addAttribute(getImageSrcSet(node), "srcset")} sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"${addAttribute(dims.width, "width")}${addAttribute(dims.height, "height")}${addAttribute(node?.altText || post.title, "alt")}${addAttribute(index < 3 ? "eager" : "lazy", "loading")}${addAttribute(index < 3 ? "high" : "auto", "fetchpriority")} decoding="async"></div><div class="blog-content"><span class="blog-date">${formatDate(post.date)}</span><h3><a${addAttribute(`/blog/${post.slug}`, "href")}>${post.title}</a></h3><p>${cleanExcerpt(post.excerpt)}</p><div class="blog-footer"><a${addAttribute(`/blog/${post.slug}`, "href")} class="read-more-link">Read Article</a></div></div></article>`;
	})}</div>${deferredGridPosts.length > 0 && renderTemplate`<div class="pagination" id="load-more-wrap"><button type="button" id="load-more-btn" class="btn btn-blue" data-batch-size="9">Load More Articles</button></div>`}<script type="application/json" id="more-posts-data">${unescapeHTML(deferredJson)}<\/script></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}${renderScript($$result, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/blog/index.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };

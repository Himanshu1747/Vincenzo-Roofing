import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
import "./consts_kQkbns8j.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return ((await queryWordPress(`
        query GetAllSlugs {
            posts(first: 100) {
                nodes {
                    slug
                }
            }
        }
    `))?.posts?.nodes || []).map((post) => ({ params: { slug: post.slug } }));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { slug } = Astro.params;
	const data = await queryWordPress(`
  query SinglePostAndRecent($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      excerpt
      content
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl(size: LARGE)
          altText
        }
      }
    }
    posts(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl(size: MEDIUM_LARGE)
            altText
          }
        }
      }
    }
  }
`, { slug });
	const post = data?.post;
	if (!post) return Astro.redirect("/404");
	const relatedPosts = (data?.posts?.nodes || []).filter((p) => p.slug !== slug).slice(0, 3);
	function formatDate(dateString) {
		if (!dateString) return "";
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	}
	function cleanExcerpt(excerpt) {
		if (!excerpt) return "";
		return excerpt.replace(/<[^>]*>?/gm, "").trim();
	}
	function truncateWords(text, wordLimit = 5) {
		if (!text) return "";
		const words = text.trim().split(/\s+/);
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(" ") + "...";
	}
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": `${post.title} | Vincenzo's Roofing`,
		"description": cleanExcerpt(post.excerpt) || "Welcome to my website!"
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Page Hero Header --><section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog &amp; Resources</a><span>/</span><span${addAttribute(post.title, "title")}>${truncateWords(post.title, 5)}</span></div><h1>${post.title}</h1>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(post.excerpt)}` })}</div></section><!-- Main Content & Sidebar Layout --><div class="container article-layout"><!-- Single Article Content Column --><article>${post.featuredImage?.node?.sourceUrl && renderTemplate`<div class="featured-cover-img"><img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")}></div>`}<!-- Dynamic WordPress Article Content --><div class="article-body">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(post.content)}` })}</div><!-- Author Bio Box --></article><!-- Sidebar --><aside class="sidebar"><!-- Recent Articles Widget --><div class="sidebar-widget"><h3>Related Guides</h3>${relatedPosts.map((relPost) => renderTemplate`<div class="recent-post-item"${addAttribute(`window.location.href='/blog/${relPost.slug}'`, "onclick")} style="cursor: pointer;"><div class="recent-thumb"><img${addAttribute(relPost.featuredImage?.node?.sourceUrl || "https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1.webp", "src")}${addAttribute(relPost.featuredImage?.node?.altText || relPost.title, "alt")}></div><div><div class="recent-title"><a${addAttribute(`/blog/${relPost.slug}`, "href")}>${relPost.title}</a></div><span class="recent-date">${formatDate(relPost.date)}</span></div></div>`)}</div></aside></div></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/blog/[...slug].astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };

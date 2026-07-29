import { i as __exportAll, r as createComponent } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, O as createAstro, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://example.com");
async function getStaticPaths() {
	return ((await queryWordPress(`
    query AllSlugs {
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
	return renderTemplate`<html lang="en" data-astro-cid-jo55ryrt><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": `${post.title} | Vincenzo's Roofing`,
		"description": cleanExcerpt(post.excerpt) || "Welcome to my website!",
		"data-astro-cid-jo55ryrt": true
	})}${renderHead($$result)}</head><body data-astro-cid-jo55ryrt>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-jo55ryrt": true })}<main id="top" data-astro-cid-jo55ryrt><!-- Page Hero Header --><section class="page-hero" data-astro-cid-jo55ryrt><div class="container" data-astro-cid-jo55ryrt><div class="breadcrumb" data-astro-cid-jo55ryrt><a href="/" data-astro-cid-jo55ryrt>Home</a><span data-astro-cid-jo55ryrt>/</span><a href="/blog" data-astro-cid-jo55ryrt>Blog &amp; Resources</a><span data-astro-cid-jo55ryrt>/</span><span data-astro-cid-jo55ryrt>${post.title}</span></div><h1 data-astro-cid-jo55ryrt>${post.title}</h1>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(post.excerpt)}` })}</div></section><!-- Main Content & Sidebar Layout --><div class="container article-layout" data-astro-cid-jo55ryrt><!-- Single Article Content Column --><article data-astro-cid-jo55ryrt>${post.featuredImage?.node?.sourceUrl && renderTemplate`<div class="featured-cover-img" data-astro-cid-jo55ryrt><img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} data-astro-cid-jo55ryrt></div>`}<!-- Dynamic WordPress Article Content --><div class="article-body" data-astro-cid-jo55ryrt>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(post.content)}` })}</div><!-- Author Bio Box --></article><!-- Sidebar --><aside class="sidebar" data-astro-cid-jo55ryrt><!-- Recent Articles Widget --><div class="sidebar-widget" data-astro-cid-jo55ryrt><h3 data-astro-cid-jo55ryrt>Related Guides</h3>${relatedPosts.map((relPost) => renderTemplate`<div class="recent-post-item"${addAttribute(`window.location.href='/blog/${relPost.slug}'`, "onclick")} style="cursor: pointer;" data-astro-cid-jo55ryrt><div class="recent-thumb" data-astro-cid-jo55ryrt><img${addAttribute(relPost.featuredImage?.node?.sourceUrl || "https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1.webp", "src")}${addAttribute(relPost.featuredImage?.node?.altText || relPost.title, "alt")} data-astro-cid-jo55ryrt></div><div data-astro-cid-jo55ryrt><div class="recent-title" data-astro-cid-jo55ryrt><a${addAttribute(`/blog/${relPost.slug}`, "href")} data-astro-cid-jo55ryrt>${relPost.title}</a></div><span class="recent-date" data-astro-cid-jo55ryrt>${formatDate(relPost.date)}</span></div></div>`)}</div></aside></div><!-- Related Articles Grid Section --><!-- {
				relatedPosts.length > 0 && (
					<section class="related-section">
						<div class="container">
							<h2 style="font-size: 24px;">
								Recommended Articles
							</h2>
							<div class="related-grid">
								{relatedPosts.map((relPost: any) => (
									<div
										class="related-card"
										onclick={\`window.location.href='/blog/\${relPost.slug}'\`}
										style="cursor: pointer;"
									>
										<div class="related-media">
											<img
												src={
													relPost.featuredImage?.node
														?.sourceUrl ||
													"https://staging2.vincenzoroofing.com/wp-content/uploads/2026/07/Best-Roofing-in-North-Hampton-NH-1-1.webp"
												}
												alt={
													relPost.featuredImage?.node
														?.altText ||
													relPost.title
												}
											/>
										</div>
										<div class="related-body">
											<h4>
												<a
													href={\`/blog/\${relPost.slug}\`}
												>
													{relPost.title}
												</a>
											</h4>
											<p>
												{cleanExcerpt(relPost.excerpt)}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				)
			} --></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-jo55ryrt": true })}</body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/blog/[...slug].astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };

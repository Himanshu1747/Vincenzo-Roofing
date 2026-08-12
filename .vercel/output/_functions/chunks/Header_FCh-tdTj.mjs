import { S as unescapeHTML, _ as createRenderInstruction, a as Fragment, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import "./compiler_B-LgqSiN.mjs";
import "./consts_kQkbns8j.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/assets/blog-placeholder-1.jpg
var blog_placeholder_1_default = new Proxy({
	"src": "/_astro/blog-placeholder-1.Bx0Zcyzv.jpg",
	"width": 960,
	"height": 480,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/assets/blog-placeholder-1.jpg";
	return target[name];
} });
//#endregion
//#region src/components/BaseHead.astro
createAstro("https://astro.build");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const { title, description, image = blog_placeholder_1_default, useYoast = false, canonical, focuskw } = Astro.props;
	const customTitle = title || "Astro Blog";
	const customDesc = description || "Welcome to my website!";
	const socialImage = typeof image === "string" ? image : image?.src;
	return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" href="/fav.png" type="image/x-icon">${canonical ? renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>` : renderTemplate`<link rel="canonical"${addAttribute(Astro.url, "href")}>`}${focuskw && renderTemplate`<meta name="keywords"${addAttribute(focuskw, "content")}>`}${!useYoast && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<title>${customTitle}</title><meta name="description"${addAttribute(customDesc, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(customTitle, "content")}><meta property="og:description"${addAttribute(customDesc, "content")}>${socialImage && renderTemplate`<meta property="og:image"${addAttribute(new URL(socialImage, Astro.url), "content")}>`}` })}`}<script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZW3B877NL"><\/script>${renderScript($$result, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}<meta name="google-site-verification" content="t9SQ17zhPrm3qEISdtQbaVNTH9lLiiHmb-j3qHykOEs">`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/components/BaseHead.astro", void 0);
//#endregion
//#region src/lib/wordpress.js
var REQUEST_TIMEOUT_MS = 8e3;
var MAX_RETRIES = 2;
var RETRY_DELAY_MS = 300;
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchWithTimeout(endpoint, body) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	try {
		return await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"User-Agent": "Mozilla/5.0 (Astro-SSR-Bot)"
			},
			body,
			signal: controller.signal,
			cache: "no-store"
		});
	} finally {
		clearTimeout(timer);
	}
}
async function fetchWithRetry(endpoint, body) {
	for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) try {
		const response = await fetchWithTimeout(endpoint, body);
		if (!response.ok) {
			if (response.status >= 500 && attempt < MAX_RETRIES) {
				`${response.status}`;
				await sleep(RETRY_DELAY_MS * (attempt + 1));
				continue;
			}
			return null;
		}
		const json = await response.json();
		if (json.errors) return null;
		return json.data;
	} catch (error) {
		if (attempt < MAX_RETRIES) {
			await sleep(RETRY_DELAY_MS * (attempt + 1));
			continue;
		}
	}
	return null;
}
async function queryWordPress(query, variables = {}) {
	return fetchWithRetry("https://staging.vincenzoroofing.com/graphql", JSON.stringify({
		query,
		variables
	}));
}
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(async ($$result, $$props, $$slots) => {
	const pagedata = await queryWordPress(`
query GetFooterAndWidgets {
  # 1. Footer Menu Query with Submenu support
  menu(id: "footer-menu", idType: SLUG) {
    menuItems(first: 100) {
      nodes {
        id
        label
        cssClasses
        url
        uri
        parentId
        target
        order
        childItems(first: 100) {
          nodes {
            id
            label
            url
            uri
            target
          }
        }
      }
    }
  }

  # 2. Header and Footer Widgets Query
  logoData
  contactData
  mapData
  copyrightData
}
`);
	const topLevelMenuItems = (pagedata?.menu?.menuItems?.nodes || []).filter((item) => !item.parentId);
	const logoData = pagedata?.logoData || "";
	const contactData = pagedata?.contactData || "";
	const mapData = pagedata?.mapData || "";
	const copyrightData = pagedata?.copyrightData || "";
	return renderTemplate`${maybeRenderHead($$result)}<!-- Footer --><footer><div class="container footer-grid"><!-- Footer Brand Column --><div class="footer-brand">${logoData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(logoData)}` })}` : renderTemplate`<div class="logo footer"><a href="/"><img src="/logo.png" alt="Vincenzo's Roofing LLC Logo" width="190" height="109" loading="lazy"></a></div><div><p>Licensed, insured residential and commercial roofing across New Hampshire. Free estimates, written warranties.</p><!-- Social Media SVG Links --><div class="footer-socials" style="display: flex; gap: 12px; margin-top: 16px;"><!-- Facebook --><a href="https://www.facebook.com/VincenzosRoofing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="color: currentColor; display: inline-flex;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a><!-- Instagram --><a href="https://www.instagram.com/vincenzoroofing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="color: currentColor; display: inline-flex;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a><!-- YouTube --><a href="https://www.youtube.com/@VincenzosRoofing" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style="color: currentColor; display: inline-flex;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a><!-- TikTok --><a href="https://www.tiktok.com/@vincenzos.roofing" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style="color: currentColor; display: inline-flex;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></a></div></div>`}</div><!-- Company Menu Column (Fetched Dynamically from WordPress GraphQL) --><div class="footer-col"><h5>Company</h5><ul>${topLevelMenuItems.map((item) => renderTemplate`<li><a${addAttribute(item.uri || item.url, "href")}${addAttribute(item.target || "_self", "target")}${addAttribute(item.cssClasses?.join(" "), "class")}>${item.label}</a>${item.childItems?.nodes?.length > 0 && renderTemplate`<ul class="sub-menu">${item.childItems.nodes.map((child) => renderTemplate`<li><a${addAttribute(child.uri || child.url, "href")}${addAttribute(child.target || "_self", "target")}>${child.label}</a></li>`)}</ul>`}</li>`)}</ul></div><!-- Contact Info Column --><div class="footer-col">${contactData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(contactData)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h5>Contact</h5><ul style="list-style: none; padding: 0;"><!-- Phone --><li style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+16035027080">(603) 502-7080</a></li><!-- Email --><li style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Email"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><a href="mailto:info@vincenzosroofing.com">info@vincenzosroofing.com</a></li><!-- Location --><li style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Location"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>43 True Rd, Seabrook, NH 03874</span></li><!-- Hours --><li style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Hours"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>Mon – Sat 8 AM–4 PM · Free Roof Inspection</span></li></ul>` })}`}</div><!-- Map Column --><div class="footer-col">${mapData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(mapData)}` })}` : renderTemplate`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1784472204006!5m2!1sen!2sin" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`}</div></div><!-- Copyright Bar -->${copyrightData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(copyrightData)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>© 2026 Vincenzo's Roofing LLC. All rights reserved.</span><span>Licensed &amp; Insured in New Hampshire</span>` })}`}</footer>`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const data = await queryWordPress(`
query MainMenu {
  # 1. Fetch Top Header Widget HTML
  topHeader

  # 2. Fetch Site Logo Details
  siteLogo {
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }

  # 3. Fetch Navigation Menu Items
  menu(id: "main-menu", idType: SLUG) {
    menuItems(first: 100) {
      nodes {
        id
        label
        cssClasses
        url
        uri
        parentId
        target
        order
        childItems(first: 100) {
          nodes {
            id
            label
            url
            uri
            target
          }
        }
      }
    }
  }
}
`);
	const topHeaderHtml = data?.topHeader || null;
	const allMenuItems = data?.menu?.menuItems?.nodes || [];
	const topLevelItems = allMenuItems.filter((item) => !item.parentId).sort((a, b) => a.order - b.order);
	const getChildren = (item) => {
		if (item.childItems?.nodes && item.childItems.nodes.length > 0) return item.childItems.nodes;
		return allMenuItems.filter((child) => child.parentId === item.id);
	};
	const logoUrl = data?.siteLogo?.sourceUrl || "/logonew.png";
	const logoAlt = data?.siteLogo?.altText || "Vincenzo's Roofing LLC";
	const logoWidth = data?.siteLogo?.mediaDetails?.width || "130";
	const logoHeight = data?.siteLogo?.mediaDetails?.height || "47";
	const getRelativeUrl = (urlStr) => {
		if (!urlStr) return "#";
		try {
			return new URL(urlStr).pathname;
		} catch {
			return urlStr;
		}
	};
	const currentPath = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<!-- Header --><header id="siteHeader" data-astro-cid-nen7h5rs><!-- Top Utility Bar --><div class="top-strip" data-astro-cid-nen7h5rs>${topHeaderHtml ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(topHeaderHtml)}` })}` : renderTemplate`<div class="container" data-astro-cid-nen7h5rs><div class="left" data-astro-cid-nen7h5rs>Licensed &amp; Insured · Serving all of New Hampshire</div><div data-astro-cid-nen7h5rs><span class="pulse" data-astro-cid-nen7h5rs></span>24/7 Emergency Line:<a href="tel:+1 (603) 502-7080" data-astro-cid-nen7h5rs> (603) 502-7080</a></div></div>`}</div><div class="container" data-astro-cid-nen7h5rs><!-- Main Navigation --><div class="nav-wrap" data-astro-cid-nen7h5rs><div class="header-logo" data-astro-cid-nen7h5rs><a href="/" class="logo"${addAttribute(`${logoAlt || "Home"} home`, "aria-label")} data-astro-cid-nen7h5rs><img${addAttribute(logoUrl, "src")}${addAttribute(logoAlt, "alt")}${addAttribute(logoWidth, "width")}${addAttribute(logoHeight, "height")} fetchpriority="high" loading="eager" decoding="sync" data-astro-cid-nen7h5rs></a></div><nav class="primary" aria-label="Primary" data-astro-cid-nen7h5rs>${topLevelItems.map((item) => {
		const itemPath = getRelativeUrl(item.uri || item.url);
		const children = getChildren(item);
		const hasChildren = children && children.length > 0;
		const isActive = currentPath === itemPath || itemPath !== "/" && currentPath.startsWith(itemPath);
		if (hasChildren) return renderTemplate`<div class="nav-dropdown" data-astro-cid-nen7h5rs><a${addAttribute(itemPath, "href")}${addAttribute(isActive ? "active" : "", "class")} data-astro-cid-nen7h5rs>${item.label}<svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" data-astro-cid-nen7h5rs><path d="M6 9l6 6 6-6" data-astro-cid-nen7h5rs></path></svg></a><div class="nav-dropdown-menu" data-astro-cid-nen7h5rs>${children.map((child) => renderTemplate`<a${addAttribute(getRelativeUrl(child.uri || child.url), "href")} data-astro-cid-nen7h5rs>${child.label}</a>`)}</div></div>`;
		return renderTemplate`<a${addAttribute(itemPath, "href")}${addAttribute(isActive ? "active" : "", "class")} data-astro-cid-nen7h5rs>${item.label}</a>`;
	})}</nav><!-- Header Actions --><div class="header-ctas" data-astro-cid-nen7h5rs><a href="tel:+1 (603) 502-7080" class="header-phone" data-astro-cid-nen7h5rs><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" data-astro-cid-nen7h5rs><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.3z" data-astro-cid-nen7h5rs></path></svg><span data-astro-cid-nen7h5rs>(603) 502-7080</span></a><a href="/free-estimate" class="btn btn-blue" data-astro-cid-nen7h5rs>Free Estimate</a><button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span></button></div></div></div></header><div class="margin-top" data-astro-cid-nen7h5rs></div><!-- Mobile Navigation Drawer --><div class="mobile-panel" id="mobilePanel" data-astro-cid-nen7h5rs>${topLevelItems.map((item) => {
		const itemPath = getRelativeUrl(item.uri || item.url);
		const children = getChildren(item);
		if (children && children.length > 0) return renderTemplate`<div class="mp-link-group" data-astro-cid-nen7h5rs><div class="data-dropdowns" data-astro-cid-nen7h5rs><a${addAttribute(itemPath, "href")} class="mp-toggle" aria-expanded="false" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs>${item.label}</span></a><div class="dropdown-opens" data-astro-cid-nen7h5rs><svg class="mp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-astro-cid-nen7h5rs><path d="M6 9l6 6 6-6" data-astro-cid-nen7h5rs></path></svg></div></div><div class="mp-submenu" data-astro-cid-nen7h5rs>${children.map((child) => renderTemplate`<a${addAttribute(getRelativeUrl(child.uri || child.url), "href")} class="mp-sublink" data-astro-cid-nen7h5rs>${child.label}</a>`)}</div></div>`;
		return renderTemplate`<a${addAttribute(itemPath, "href")} class="mp-link" data-astro-cid-nen7h5rs>${item.label}</a>`;
	})}<div class="mp-ctas" data-astro-cid-nen7h5rs><a href="tel:+1 (603) 502-7080" class="btn btn-ghost-w" data-astro-cid-nen7h5rs>Call (603) 502-7080</a><a href="/free-estimate" class="btn btn-blue" data-astro-cid-nen7h5rs>Get a Free Estimate</a></div></div>${renderScript($$result, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/components/Header.astro", void 0);
//#endregion
export { renderScript as a, $$BaseHead as i, $$Footer as n, queryWordPress as r, $$Header as t };

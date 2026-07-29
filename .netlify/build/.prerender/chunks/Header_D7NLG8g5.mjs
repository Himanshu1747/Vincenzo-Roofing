import { n as SITE_TITLE, r as createComponent } from "./consts_ST8RfIaD.mjs";
import { b as ImageMissingAlt, p as FontFamilyNotFound, t as AstroError } from "./errors_CStDCjdR.mjs";
import { E as unescapeHTML, O as createAstro, f as renderTemplate, g as maybeRenderHead, i as renderComponent, l as renderSlot, t as spreadAttributes, v as addAttribute, y as createRenderInstruction } from "./server_CKpIG7MF.mjs";
import { a as inferRemoteSize$1, c as resolveSrc, n as getImage$1, o as isESMImportedImage, s as isRemoteImage, t as getConfiguredImageService } from "./assets_C-Cw2cMG.mjs";
import * as mime from "mrmime";
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
	if (name === "fsPath") return "/home/claude/roofing_check/roofing/src/assets/blog-placeholder-1.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/claude/roofing_check/roofing/src/assets/blog-placeholder-1.jpg");
	return target[name];
} });
//#endregion
//#region node_modules/astro/components/Image.astro
createAstro("https://example.com");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/home/claude/roofing_check/roofing/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://example.com");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
	else pictureAttributes.class = scopedStyleClass;
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		return renderTemplate`<source${addAttribute(props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "/home/claude/roofing_check/roofing/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([["--font-atkinson", {
	"preloads": [{
		"style": "normal",
		"type": "woff",
		"url": "/_astro/fonts/89758defcfa85239.woff",
		"weight": "400"
	}, {
		"style": "normal",
		"type": "woff",
		"url": "/_astro/fonts/14aa8dd5744dd4bc.woff",
		"weight": "700"
	}],
	"css": "@font-face{font-family:Atkinson-c7f4c4e8b285552f;src:url(\"/_astro/fonts/89758defcfa85239.woff\") format(\"woff\");font-display:swap;font-weight:400;font-style:normal;}@font-face{font-family:Atkinson-c7f4c4e8b285552f;src:url(\"/_astro/fonts/14aa8dd5744dd4bc.woff\") format(\"woff\");font-display:swap;font-weight:700;font-style:normal;}@font-face{font-family:\"Atkinson-c7f4c4e8b285552f fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:99.3717%;ascent-override:80.1033%;descent-override:25.2587%;line-gap-override:0%;}@font-face{font-family:\"Atkinson-c7f4c4e8b285552f fallback: Arial Bold\";src:local(\"Arial Bold\");font-display:swap;font-weight:700;font-style:normal;size-adjust:92.2954%;ascent-override:86.2448%;descent-override:27.1953%;line-gap-override:0%;}:root{--font-atkinson:Atkinson-c7f4c4e8b285552f,\"Atkinson-c7f4c4e8b285552f fallback: Arial\",\"Atkinson-c7f4c4e8b285552f fallback: Arial Bold\",sans-serif;}"
}]]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://example.com");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/home/claude/roofing_check/roofing/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set(["/_astro/fonts/89758defcfa85239.woff", "/_astro/fonts/14aa8dd5744dd4bc.woff"]),
	address: {
		"address": "0.0.0.0",
		"family": "IPv4",
		"port": 38765
	}
});
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "@astrojs/netlify/image-service.js",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
//#region src/components/BaseHead.astro
createAstro("https://example.com");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const { title, description, image = blog_placeholder_1_default } = Astro.props;
	return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro.site), "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}>${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-atkinson",
		"preload": true
	})}<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro.url), "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><!-- BOOTSTARAP  --><!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"> --><!-- BOOTSTARAP END --><!-- GOOGLE FONTS  --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><!-- GOOGLE FONTS END -->${renderScript($$result, "/home/claude/roofing_check/roofing/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/claude/roofing_check/roofing/src/components/BaseHead.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- Footer --><footer data-astro-cid-jo6i4kqk><div class="container footer-grid" data-astro-cid-jo6i4kqk><div class="footer-brand" data-astro-cid-jo6i4kqk><div class="logo footer" data-astro-cid-jo6i4kqk><a href="/" data-astro-cid-jo6i4kqk><img src="/logo.png" alt="" width="190" height="109" loading="lazy" data-astro-cid-jo6i4kqk></a></div><p data-astro-cid-jo6i4kqk>Licensed, insured residential and commercial roofing across New Hampshire. Free estimates, written warranties, 24/7 emergency response.</p></div><div class="footer-col" data-astro-cid-jo6i4kqk><h5 data-astro-cid-jo6i4kqk>Company</h5><ul data-astro-cid-jo6i4kqk><li data-astro-cid-jo6i4kqk><a href="/about-us/" data-astro-cid-jo6i4kqk>About Us</a></li><li data-astro-cid-jo6i4kqk><a href="/gallery/" data-astro-cid-jo6i4kqk>Gallery</a></li><li data-astro-cid-jo6i4kqk><a href="/reviews/" data-astro-cid-jo6i4kqk>Reviews</a></li><li data-astro-cid-jo6i4kqk><a href="/financing/" data-astro-cid-jo6i4kqk>Financing</a></li><li data-astro-cid-jo6i4kqk><a href="/service-areas/" data-astro-cid-jo6i4kqk>Service Areas</a></li><li data-astro-cid-jo6i4kqk><a href="/blog/" data-astro-cid-jo6i4kqk>Blog</a></li><li data-astro-cid-jo6i4kqk><a href="/faq/" data-astro-cid-jo6i4kqk>FAQ</a></li><li data-astro-cid-jo6i4kqk><a href="/free-estimate/" data-astro-cid-jo6i4kqk>Free Estimate</a></li></ul></div><div class="footer-col" data-astro-cid-jo6i4kqk><h5 data-astro-cid-jo6i4kqk>Contact</h5><ul data-astro-cid-jo6i4kqk><li data-astro-cid-jo6i4kqk><a href="tel:+16035550199" data-astro-cid-jo6i4kqk>(603) 555-0199</a></li><li data-astro-cid-jo6i4kqk><a href="mailto:info@vincenzosroofing.com" data-astro-cid-jo6i4kqk>info@vincenzosroofing.com</a></li><li data-astro-cid-jo6i4kqk>Serving all of New Hampshire</li><li data-astro-cid-jo6i4kqk>Mon–Fri 7am–6pm · 24/7 Emergency</li></ul></div><div class="footer-col" data-astro-cid-jo6i4kqk><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1784472204006!5m2!1sen!2sin" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" data-astro-cid-jo6i4kqk></iframe></div></div><div class="container footer-bottom" data-astro-cid-jo6i4kqk><span data-astro-cid-jo6i4kqk>© 2026 Vincenzo's Roofing LLC. All rights reserved.</span><span data-astro-cid-jo6i4kqk>Licensed &amp; Insured in New Hampshire</span></div></footer><!-- Mobile sticky --><!-- <div class="mobile-sticky">
  <div class="row">
    <a href="tel:+16035550199" class="call">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        ><path
          d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.3z"
        ></path></svg
      >
      Call Now
    </a>
    <a href="#contact" class="quote">Get Free Estimate</a>
  </div>
</div> -->`;
}, "/home/claude/roofing_check/roofing/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/HeaderLink.astro
createAstro("https://example.com");
var $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$HeaderLink;
	const { href, class: className, ...props } = Astro2.props;
	const pathname = Astro2.url.pathname.replace("/", "");
	const subpath = pathname.match(/[^\/]+/g);
	const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-evkijfd6>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/claude/roofing_check/roofing/src/components/HeaderLink.astro", void 0);
//#endregion
//#region src/lib/wordpress.js
var wpCache = /* @__PURE__ */ new Map();
var CACHE_TTL_MS = 300 * 1e3;
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
			signal: controller.signal
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
	const endpoint = "https://staging2.vincenzoroofing.com/graphql";
	const cacheKey = JSON.stringify({
		endpoint,
		query,
		variables
	});
	const now = Date.now();
	const cached = wpCache.get(cacheKey);
	if (cached) {
		if (cached.promise) return cached.promise;
		if (now - cached.timestamp < CACHE_TTL_MS) return cached.data;
	}
	const promise = fetchWithRetry(endpoint, JSON.stringify({
		query,
		variables
	})).then((data) => {
		if (data) wpCache.set(cacheKey, {
			data,
			timestamp: Date.now()
		});
		else wpCache.delete(cacheKey);
		return data;
	});
	wpCache.set(cacheKey, { promise });
	return promise;
}
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(async ($$result, $$props, $$slots) => {
	const data = await queryWordPress(`
query MainMenu {
  topHeaderWidgetArea
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
            label
            url
            uri
            target
          }
        }
      }
    }
  }
  siteLogo {
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
}
`);
	const topHeaderWidgetArea = data?.topHeaderWidgetArea || null;
	const topLevelItems = (data?.menu?.menuItems?.nodes || []).filter((item) => !item.parentId).sort((a, b) => a.order - b.order);
	const logoUrl = data?.siteLogo?.sourceUrl || "/logo.png";
	const logoAlt = data?.siteLogo?.altText || "Vincenzo's Roofing LLC";
	data?.siteLogo?.mediaDetails?.width;
	data?.siteLogo?.mediaDetails?.height;
	return renderTemplate`${maybeRenderHead($$result)}<!-- Header --><header id="siteHeader" data-astro-cid-nen7h5rs><div class="top-strip" data-astro-cid-nen7h5rs>${unescapeHTML(topHeaderWidgetArea)}</div><div class="nav-wrap" data-astro-cid-nen7h5rs><div class="header-logo" data-astro-cid-nen7h5rs><a href="/" class="logo"${addAttribute(`${logoAlt} home`, "aria-label")} data-astro-cid-nen7h5rs><!-- Render the dynamic logo here --><img${addAttribute(logoUrl, "src")}${addAttribute(logoAlt, "alt")} width="100" height="47" fetchpriority="high" loading="eager" decoding="sync" data-astro-cid-nen7h5rs></a></div><nav class="primary" aria-label="Primary" data-astro-cid-nen7h5rs>${topLevelItems.map((item) => {
		if (item.childItems && item.childItems.nodes && item.childItems.nodes.length > 0) return renderTemplate`<div class="nav-dropdown" data-astro-cid-nen7h5rs><a${addAttribute(item.uri, "href")} data-astro-cid-nen7h5rs>${item.label}<svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" data-astro-cid-nen7h5rs><path d="M6 9l6 6 6-6" data-astro-cid-nen7h5rs></path></svg></a><div class="nav-dropdown-menu" data-astro-cid-nen7h5rs>${item.childItems.nodes.sort((a, b) => a.order - b.order).map((child) => renderTemplate`<a${addAttribute(child.uri, "href")}${addAttribute(child.target || "_self", "target")} data-astro-cid-nen7h5rs>${child.label}</a>`)}</div></div>`;
		return renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, {
			"href": item.uri,
			"target": item.target || "_self",
			"data-astro-cid-nen7h5rs": true
		}, { "default": ($$result) => renderTemplate`${item.label}` })}`;
	})}</nav><div class="header-ctas" data-astro-cid-nen7h5rs><a href="tel:+1 (603) 502-7080" class="header-phone" data-astro-cid-nen7h5rs><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" data-astro-cid-nen7h5rs><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.3z" data-astro-cid-nen7h5rs></path></svg><span data-astro-cid-nen7h5rs>(603) 502-7080</span></a><a href="/free-estimate" class="btn btn-blue" data-astro-cid-nen7h5rs>Free Estimate</a><button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span></button></div></div></header><div class="margin-top" data-astro-cid-nen7h5rs></div><div class="mobile-panel" id="mobilePanel" data-astro-cid-nen7h5rs>${topLevelItems.map((item) => {
		if (item.childItems && item.childItems.nodes && item.childItems.nodes.length > 0) return renderTemplate`<div class="mp-link-group" data-astro-cid-nen7h5rs><div class="data-dropdowns" data-astro-cid-nen7h5rs><a${addAttribute(item.uri !== "#" ? item.uri : "", "href")} class="mp-toggle" aria-expanded="false" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs>${item.label}</span></a><div class="dropdown-opens" data-astro-cid-nen7h5rs><svg class="mp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-astro-cid-nen7h5rs><path d="M6 9l6 6 6-6" data-astro-cid-nen7h5rs></path></svg></div></div><div class="mp-submenu" data-astro-cid-nen7h5rs>${item.childItems.nodes.sort((a, b) => a.order - b.order).map((child) => renderTemplate`<a${addAttribute(child.uri, "href")} class="mp-sublink"${addAttribute(child.target || "_self", "target")} data-astro-cid-nen7h5rs>${child.label}</a>`)}</div></div>`;
		return renderTemplate`<a${addAttribute(item.uri, "href")} class="mp-link"${addAttribute(item.target || "_self", "target")} data-astro-cid-nen7h5rs>${item.label}</a>`;
	})}<div class="mp-ctas" data-astro-cid-nen7h5rs><a href="tel:+16035027080" class="btn btn-ghost-w" data-astro-cid-nen7h5rs>Call (603) 502-7080</a><a href="/contact" class="btn btn-blue" data-astro-cid-nen7h5rs>Get a Free Estimate</a></div></div>${renderScript($$result, "/home/claude/roofing_check/roofing/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/claude/roofing_check/roofing/src/components/Header.astro", void 0);
//#endregion
export { renderScript as a, $$BaseHead as i, queryWordPress as n, $$Footer as r, $$Header as t };

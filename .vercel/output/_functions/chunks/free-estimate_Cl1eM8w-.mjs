import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as Fragment, g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_VgpkRdB2.mjs";
import { t as createComponent } from "./astro-component_uTBJIj-3.mjs";
import { i as $$BaseHead, n as $$Footer, r as queryWordPress, t as $$Header } from "./Header_FCh-tdTj.mjs";
import "./compiler_B-LgqSiN.mjs";
//#region src/pages/free-estimate.astro
var free_estimate_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FreeEstimate,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$FreeEstimate = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FreeEstimate;
	Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=90, stale-while-revalidate=30");
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/free-estimate", idType: URI) {
    title
    content
    seo {
      canonical
      cornerstone
      fullHead
    }
    freeEstimateMainPage {
      waterComingInRightNowContent
      whatYouGetTitle
      sideListGrids {
        gridListNameHere
      }
      reachUsDirectlyTitle
      reachUsDirectlyLists {
        reachImageIconImage {
          node {
            mediaItemUrl
          }
        }
        reachListContent
      }
      whatHappensNextContent
      whatHappensNextGrids {
        whatHappensNextGridContent
      }
      transparencySecContent
      transparencyList {
        listName
      }
      howWeWorkContent
      howWeWorkGrids {
        howWeWorkGridContent
      }
      faqContent
      faqList {
        faqTitle
        faqAnswer
      }
      ctaContent
    }
  }
}
`))?.page || {};
	const seodata = alldata?.seo || {};
	const pageData = alldata?.freeEstimateMainPage || {};
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"useYoast": true,
		"canonical": seodata?.canonical || "",
		"focuskw": seodata?.focuskw || ""
	})}${seodata?.fullHead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(seodata.fullHead)}` })}`}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><!-- Top Section --><section class="top"><div class="hero-grid-tex" aria-hidden="true"></div><div class="container"><div class="top-copy">${alldata?.content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata.content)}` })}`}</div><div class="form-wrap"><!-- FORM --><div class="form-card"><h2>Request Your Estimate</h2><p class="sub">Most requests get a reply within one business hour, 7am to 6pm on weekdays.</p><form id="estimateForm" novalidate><div id="formStatus" class="form-status" style="display:none;"></div><div class="row"><div class="field"><label for="fname">First name</label><input id="fname" name="fname" type="text" autocomplete="given-name" required><span class="err" id="err-fname"></span></div><div class="field"><label for="lname">Last name</label><input id="lname" name="lname" type="text" autocomplete="family-name" required><span class="err" id="err-lname"></span></div></div><div class="row"><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required><span class="err" id="err-phone"></span></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required><span class="err" id="err-email"></span></div></div><div class="row"><div class="field full"><label for="address">Property address or town</label><input id="address" name="address" type="text" autocomplete="street-address" required><span class="err" id="err-address"></span></div></div><div class="row"><div class="field full"><label>Property type</label><div class="radio-set"><label><input type="radio" name="ptype" value="residential"><span>Residential</span></label><label><input type="radio" name="ptype" value="commercial"><span>Commercial</span></label></div></div></div><div class="row"><div class="field full"><label for="service">What do you need?</label><select id="service" name="service"><option>Not sure, please advise</option><option>Roof replacement</option><option>Roof repair</option><option>Free roof inspection</option><option>Storm or wind damage</option><option>Asphalt shingle roofing</option><option>Metal roofing</option><option>Commercial or flat roofing</option><option>Siding installation or replacement</option><option>Gutters</option><option>Decks</option></select></div></div><div class="row"><div class="field full"><label>How soon?</label><div class="radio-set"><label><input type="radio" name="timing" value="urgent"><span>As soon as possible</span></label><label><input type="radio" name="timing" value="soon"><span>Next few months</span></label><label><input type="radio" name="timing" value="planning"><span>Just planning ahead</span></label></div></div></div><div class="row"><div class="field full"><label for="details">Tell us about it <span class="opt">(optional)</span></label><textarea id="details" name="details" rows="4" placeholder="Roof age, any leaks or stains, what you have noticed, or anything else useful."></textarea></div></div><button type="submit" class="btn btn-blue btn-lg" style="width:100%" id="submitBtn">Request My Free Estimate</button><p class="form-note">We use your details only to respond to this request. We never sell or share them.</p></form></div><!-- SIDEBAR --><div class="side">${pageData?.waterComingInRightNowContent && renderTemplate`<div class="side-card urgent">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.waterComingInRightNowContent)}` })}</div>`}${pageData?.sideListGrids && pageData.sideListGrids.length > 0 && renderTemplate`<div class="side-card">${pageData?.whatYouGetTitle && renderTemplate`<h3>${pageData.whatYouGetTitle}</h3>`}<ul class="side-list">${pageData.sideListGrids.map((item) => renderTemplate`<li>${item?.gridListNameHere}</li>`)}</ul></div>`}${pageData?.reachUsDirectlyLists && pageData.reachUsDirectlyLists.length > 0 && renderTemplate`<div class="side-card">${pageData?.reachUsDirectlyTitle && renderTemplate`<h3>${pageData.reachUsDirectlyTitle}</h3>`}${pageData.reachUsDirectlyLists.map((item) => {
		const iconUrl = item?.reachImageIconImage?.node?.mediaItemUrl;
		return renderTemplate`<div class="side-row">${iconUrl && renderTemplate`<span class="ic"><img${addAttribute(iconUrl, "src")} alt="Reach Us Icon" width="18" height="18" loading="lazy" decoding="async"></span>`}<div>${item?.reachListContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.reachListContent)}` })}`}</div></div>`;
	})}</div>`}</div></div></div></section><!-- Process Steps -->${pageData?.whatHappensNextGrids && pageData.whatHappensNextGrids.length > 0 && renderTemplate`<section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${pageData?.whatHappensNextContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.whatHappensNextContent)}` })}`}</div><div class="steps">${pageData.whatHappensNextGrids.map((item, index) => {
		return renderTemplate`<div class="step"><span class="n">${`Step ${String(index + 1).padStart(2, "0")}`}</span>${item?.whatHappensNextGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.whatHappensNextGridContent)}` })}`}</div>`;
	})}</div></div></section>`}<!-- Estimate Scope / Transparency -->${pageData?.transparencyList && pageData.transparencyList.length > 0 && renderTemplate`<section class="section alt"><div class="container narrow">${pageData?.transparencySecContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.transparencySecContent)}` })}`}<ul class="checks">${pageData.transparencyList.map((item) => renderTemplate`<li>${item?.listName}</li>`)}</ul></div></section>`}<!-- How We Work -->${pageData?.howWeWorkGrids && pageData.howWeWorkGrids.length > 0 && renderTemplate`<section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:32px">${pageData?.howWeWorkContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.howWeWorkContent)}` })}`}</div><div class="grid-2">${pageData.howWeWorkGrids.map((item) => renderTemplate`<div class="card">${item?.howWeWorkGridContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.howWeWorkGridContent)}` })}`}</div>`)}</div></div></section>`}<!-- FAQ -->${pageData?.faqList && pageData.faqList.length > 0 && renderTemplate`<section class="section alt"><div class="container narrow"><div style="text-align:center;margin-bottom:36px">${pageData?.faqContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.faqContent)}` })}`}</div><div class="faq-list">${pageData.faqList.map((item) => renderTemplate`<div class="faq-item"><button class="faq-q"><span>${item?.faqTitle}</span><span class="plus"></span></button><div class="faq-a">${item?.faqAnswer && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.faqAnswer)}` })}`}</div></div>`)}</div></div></section>`}<!-- CTA Band -->${pageData?.ctaContent && renderTemplate`<section class="cta-band"><div class="cta-inner">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(pageData.ctaContent)}` })}</div></section>`}</main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
            const form = document.getElementById("estimateForm");
            const statusBox = document.getElementById("formStatus");
            const submitBtn = document.getElementById("submitBtn");

            function clearErrors() {
                document
                    .querySelectorAll(".err")
                    .forEach((el) => (el.textContent = ""));
                document
                    .querySelectorAll(".field input, .field textarea")
                    .forEach((el) => el.classList.remove("field-invalid"));
            }

            function showError(fieldId, message) {
                const errEl = document.getElementById(\`err-\${fieldId}\`);
                const inputEl = document.getElementById(fieldId);
                if (errEl) errEl.textContent = message;
                if (inputEl) inputEl.classList.add("field-invalid");
            }

            function validateForm(data) {
                let valid = true;

                if (!data.fname || data.fname.trim().length < 2) {
                    showError("fname", "Please enter your first name.");
                    valid = false;
                }
                if (!data.lname || data.lname.trim().length < 2) {
                    showError("lname", "Please enter your last name.");
                    valid = false;
                }

                const phoneDigits = (data.phone || "").replace(/\\D/g, "");
                if (!data.phone || phoneDigits.length < 10) {
                    showError("phone", "Please enter a valid phone number.");
                    valid = false;
                }

                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!data.email || !emailRegex.test(data.email)) {
                    showError("email", "Please enter a valid email address.");
                    valid = false;
                }

                if (!data.address || data.address.trim().length < 5) {
                    showError(
                        "address",
                        "Please enter the property address or town.",
                    );
                    valid = false;
                }

                return valid;
            }

            function setStatus(message, type) {
                statusBox.style.display = "block";
                statusBox.textContent = message;
                statusBox.className = \`form-status \${type}\`;
            }

            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                clearErrors();
                statusBox.style.display = "none";

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                if (!validateForm(data)) {
                    setStatus(
                        "Please fix the highlighted fields above.",
                        "error",
                    );
                    return;
                }

                submitBtn.disabled = true;
                submitBtn.textContent = "Sending...";

                try {
                    const res = await fetch("/api/send-estimate", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                    });

                    // Safe JSON Parsing logic
                    let result = {};
                    const contentType = res.headers.get("content-type");
                    if (contentType && contentType.includes("application/json")) {
                        result = await res.json();
                    }

                    if (res.ok && result.success) {
                        setStatus(
                            "Thanks! Your request has been sent. We'll be in touch within one business hour.",
                            "success",
                        );
                        form.reset();
                    } else if (result.errors) {
                        Object.entries(result.errors).forEach(([field, msg]) =>
                            showError(field, msg),
                        );
                        setStatus(
                            "Please fix the highlighted fields above.",
                            "error",
                        );
                    } else {
                        setStatus(
                            result.message ||
                                \`Server Error (\${res.status}). Please check Vercel logs or call us instead.\`,
                            "error",
                        );
                    }
                } catch (err) {
                    console.error("Estimate Form Submit Error:", err);
                    setStatus(
                        "Network error. Please try again or call us directly.",
                        "error",
                    );
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Request My Free Estimate";
                }
            });
        <\/script><script>
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
}, "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/free-estimate.astro", void 0);
var $$file = "D:/himanshu/finalroofing/alldone/Vincenzo-Roofing/src/pages/free-estimate.astro";
var $$url = "/free-estimate";
//#endregion
//#region \0virtual:astro:page:src/pages/free-estimate@_@astro
var page = () => free_estimate_exports;
//#endregion
export { page };

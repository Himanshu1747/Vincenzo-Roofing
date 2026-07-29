import { i as __exportAll, n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress, r as $$Footer, t as $$Header } from "./Header_D7NLG8g5.mjs";
//#region src/pages/free-estimate.astro
var free_estimate_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FreeEstimate,
	file: () => $$file,
	url: () => $$url
});
var $$FreeEstimate = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/free-estimate", idType: URI) {
    title
    content
    freeEstimate {
      waterComming
      whatYouGetText
      whatGetList {
        listaName
      }
      recachOut
      whatHappenContent
      whatHappenGrids{
        whatHappenData
      }
      transaparencyContent
      transaparencyLists{
        transaparencyListName
      }
      howWeWorkContent
      howWorkGrid{
        workingStyle
      }
      faqContent
      faqData{
        faqQuestion
        faqAnswer
      }
      ctaData
      
    }
  }
}
`))?.page;
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main id="top"><section class="top"><div class="top-grid" aria-hidden="true"></div><div class="container"><div class="top-copy">${unescapeHTML(alldata?.content || "error")}</div><div class="form-wrap"><!-- FORM --><div class="form-card"><h2>Request Your Estimate</h2><p class="sub">Most requests get a reply within one business hour, 7am to 6pm on weekdays.</p><!-- NOTE: connect this form to a handler such as Formspree, Web3Forms, or your CRM.
             A static site will not submit anything without one. Add a success state after submit. --><form id="estimateForm" novalidate><div id="formStatus" class="form-status" style="display:none;"></div><div class="row"><div class="field"><label for="fname">First name</label><input id="fname" name="fname" type="text" placeholder="Jane" autocomplete="given-name" required><span class="err" id="err-fname"></span></div><div class="field"><label for="lname">Last name</label><input id="lname" name="lname" type="text" placeholder="Doe" autocomplete="family-name" required><span class="err" id="err-lname"></span></div></div><div class="row"><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="(603) 555 0100" autocomplete="tel" required><span class="err" id="err-phone"></span></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="jane@example.com" autocomplete="email" required><span class="err" id="err-email"></span></div></div><div class="row"><div class="field full"><label for="address">Property address or town</label><input id="address" name="address" type="text" placeholder="12 Ocean Blvd, Seabrook NH" autocomplete="street-address" required><span class="err" id="err-address"></span></div></div><div class="row"><div class="field full"><label>Property type</label><div class="radio-set"><label><input type="radio" name="ptype" value="residential"><span>Residential</span></label><label><input type="radio" name="ptype" value="commercial"><span>Commercial</span></label></div></div></div><div class="row"><div class="field full"><label for="service">What do you need?</label><select id="service" name="service"><option>Not sure, please advise</option><option>Roof replacement</option><option>Roof repair</option><option>Free roof inspection</option><option>Storm or wind damage</option><option>Asphalt shingle roofing</option><option>Metal roofing</option><option>Commercial or flat roofing</option><option>Siding installation or replacement</option><option>Gutters</option><option>Decks</option></select></div></div><div class="row"><div class="field full"><label>How soon?</label><div class="radio-set"><label><input type="radio" name="timing" value="urgent"><span>As soon as possible</span></label><label><input type="radio" name="timing" value="soon"><span>Next few months</span></label><label><input type="radio" name="timing" value="planning"><span>Just planning ahead</span></label></div></div></div><div class="row"><div class="field full"><label for="details">Tell us about it <span class="opt">(optional)</span></label><textarea id="details" name="details" rows="4" placeholder="Roof age, any leaks or stains, what you have noticed, or anything else useful."></textarea></div></div><button type="submit" class="btn btn-blue btn-lg" style="width:100%" id="submitBtn">Request My Free Estimate</button><p class="form-note">We use your details only to respond to this request. We never sell or share them.</p></form></div><!-- SIDEBAR --><div class="side"><div class="side-card urgent">${unescapeHTML(alldata?.freeEstimate?.waterComming || "error")}</div><div class="side-card"><h3>${alldata?.freeEstimate?.whatYouGetText || "error"}</h3><ul class="side-list">${alldata?.freeEstimate?.whatGetList.map((freeitems) => renderTemplate`<li>${freeitems?.listaName || "error"}</li>`)}</ul></div><div class="side-card">${unescapeHTML(alldata?.freeEstimate?.recachOut || "error")}</div></div></div></div></section><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.freeEstimate?.whatHappenContent || "error")}</div><div class="steps">${alldata?.freeEstimate?.whatHappenGrids?.map((happenitem, index) => {
		const stepNumber = String(index + 1).padStart(2, "0");
		return renderTemplate`<div class="step"${addAttribute(index, "key")}><span class="n">Step ${stepNumber}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(happenitem?.whatHappenData || "error")}` })}</div>`;
	})}</div></div></section><section class="section alt"><div class="container narrow">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(alldata?.freeEstimate?.transaparencyContent || "error")}` })}<ul class="checks">${alldata?.freeEstimate?.transaparencyLists.map((tranitems) => renderTemplate`<li>${tranitems?.transaparencyListName || "error"}</li>`)}</ul></div></section><section class="section"><div class="container"><div class="narrow" style="text-align:center;margin-bottom:32px">${unescapeHTML(alldata?.freeEstimate?.howWeWorkContent || "error")}</div><div class="grid-2">${alldata?.freeEstimate?.howWorkGrid.map((workitems) => renderTemplate`<div class="card">${unescapeHTML(workitems?.workingStyle || "error")}</div>`)}</div></div></section><section class="section alt"><div class="container narrow"><div style="text-align:center;margin-bottom:36px">${unescapeHTML(alldata?.freeEstimate?.faqContent || "error")}</div><div class="faq-list">${alldata?.freeEstimate?.faqData.map((faqlists) => renderTemplate`<div class="faq-item">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="faq-q">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>${faqlists?.faqQuestion || "error"}</span><span class="plus"></span>` })}</button><div class="faq-a">${unescapeHTML(faqlists?.faqAnswer || "error")}</div>` })}</div>`)}</div></div></section><section class="cta-band"><div class="cta-inner"><div class="center-ctas">${unescapeHTML(alldata?.freeEstimate?.ctaData || "error")}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}<script>
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

                    const result = await res.json();

                    if (result.success) {
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
                                "Something went wrong. Please call us instead.",
                            "error",
                        );
                    }
                } catch (err) {
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
                // Select all FAQ question buttons
                const faqButtons = document.querySelectorAll(".faq-q");

                faqButtons.forEach((button) => {
                    button.addEventListener("click", () => {
                        // Find the parent item of the clicked button
                        const currentItem = button.closest(".faq-item");

                        // Optional: Close all other open FAQ items
                        document
                            .querySelectorAll(".faq-item")
                            .forEach((item) => {
                                if (item !== currentItem) {
                                    item.classList.remove("open");
                                }
                            });

                        // Toggle the 'open' class on the clicked item
                        currentItem.classList.toggle("open");
                    });
                });
            });
        <\/script></body></html>`;
}, "/home/claude/roofing_check/roofing/src/pages/free-estimate.astro", void 0);
var $$file = "/home/claude/roofing_check/roofing/src/pages/free-estimate.astro";
var $$url = "/free-estimate";
//#endregion
//#region \0virtual:astro:page:src/pages/free-estimate@_@astro
var page = () => free_estimate_exports;
//#endregion
export { page };

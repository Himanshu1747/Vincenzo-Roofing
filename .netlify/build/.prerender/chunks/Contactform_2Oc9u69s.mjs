import { n as SITE_TITLE, r as createComponent, t as SITE_DESCRIPTION } from "./consts_ST8RfIaD.mjs";
import { E as unescapeHTML, _ as renderHead, f as renderTemplate, i as renderComponent, v as addAttribute } from "./server_CKpIG7MF.mjs";
import { i as $$BaseHead, n as queryWordPress } from "./Header_D7NLG8g5.mjs";
//#region src/components/Contactform.astro
var $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
	const alldata = (await queryWordPress(`
query homepagedata {
  page(id: "/contact", idType: URI) {
    title
    content
    contactpage{
	vincenzosRoofingLlcTitle
      vincenzosRoofingLlcGrid{
        socialImage{
          node{
            mediaItemUrl
          }
        }
        socialContent
      }
      finalCtaContent
    }

  }
}
`))?.page;
	return renderTemplate`<html lang="en" data-astro-cid-rdnqlhoo><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION,
		"data-astro-cid-rdnqlhoo": true
	})}${renderHead($$result)}</head><body data-astro-cid-rdnqlhoo><main id="top" data-astro-cid-rdnqlhoo><!-- ============ CONTACT SECTION ============ --><section class="section" id="contact" data-astro-cid-rdnqlhoo><div class="container" data-astro-cid-rdnqlhoo><div class="sec-header" data-astro-cid-rdnqlhoo><span class="eyebrow" data-astro-cid-rdnqlhoo>Free Estimate</span><h2 class="sec-head" data-astro-cid-rdnqlhoo>Tell us about <span class="accent" data-astro-cid-rdnqlhoo>your roof.</span></h2></div><div class="contact-wrap" data-astro-cid-rdnqlhoo><div class="contact-form" data-astro-cid-rdnqlhoo><form id="contactForm" novalidate data-astro-cid-rdnqlhoo><div id="contactFormStatus" class="form-status" style="display:none;" data-astro-cid-rdnqlhoo></div><div class="form-row" data-astro-cid-rdnqlhoo><div class="form-field" data-astro-cid-rdnqlhoo><label for="c-fname" data-astro-cid-rdnqlhoo>First Name</label><input id="c-fname" name="fname" type="text" placeholder="Jane" autocomplete="given-name" required data-astro-cid-rdnqlhoo><span class="err" id="err-c-fname" data-astro-cid-rdnqlhoo></span></div><div class="form-field" data-astro-cid-rdnqlhoo><label for="c-lname" data-astro-cid-rdnqlhoo>Last Name</label><input id="c-lname" name="lname" type="text" placeholder="Doe" autocomplete="family-name" required data-astro-cid-rdnqlhoo><span class="err" id="err-c-lname" data-astro-cid-rdnqlhoo></span></div></div><div class="form-row" data-astro-cid-rdnqlhoo><div class="form-field" data-astro-cid-rdnqlhoo><label for="c-phone" data-astro-cid-rdnqlhoo>Phone</label><input id="c-phone" name="phone" type="tel" placeholder="(603) 555-0100" autocomplete="tel" required data-astro-cid-rdnqlhoo><span class="err" id="err-c-phone" data-astro-cid-rdnqlhoo></span></div><div class="form-field" data-astro-cid-rdnqlhoo><label for="c-email" data-astro-cid-rdnqlhoo>Email</label><input id="c-email" name="email" type="email" placeholder="jane@example.com" autocomplete="email" required data-astro-cid-rdnqlhoo><span class="err" id="err-c-email" data-astro-cid-rdnqlhoo></span></div></div><div class="form-row" data-astro-cid-rdnqlhoo><div class="form-field full" data-astro-cid-rdnqlhoo><label for="c-service" data-astro-cid-rdnqlhoo>Service Needed</label><select id="c-service" name="service" data-astro-cid-rdnqlhoo><option data-astro-cid-rdnqlhoo>Roof Replacement</option><option data-astro-cid-rdnqlhoo>Roof Repair</option><option data-astro-cid-rdnqlhoo>Roof Inspection</option><option data-astro-cid-rdnqlhoo>Storm Damage</option><option data-astro-cid-rdnqlhoo>Commercial Roofing</option><option data-astro-cid-rdnqlhoo>Gutters / Siding</option></select></div></div><div class="form-row" data-astro-cid-rdnqlhoo><div class="form-field full" data-astro-cid-rdnqlhoo><label for="c-msg" data-astro-cid-rdnqlhoo>Details</label><textarea id="c-msg" name="msg" rows="4" placeholder="Tell us about your roof, timeline, or concerns." data-astro-cid-rdnqlhoo></textarea></div></div><button type="submit" class="btn btn-blue" style="width:100%;" id="contactSubmitBtn" data-astro-cid-rdnqlhoo>Request Free Estimate</button><p style="font-size:12px;color:var(--grey-light);margin-top:14px;text-align:center;" data-astro-cid-rdnqlhoo>Typically replies within one business hour, 7am–6pm.</p></form></div><div class="contact-side" data-astro-cid-rdnqlhoo><div class="info-card" data-astro-cid-rdnqlhoo><h3 data-astro-cid-rdnqlhoo>${alldata?.contactpage?.vincenzosRoofingLlcTitle || "error"}</h3>${alldata?.contactpage?.vincenzosRoofingLlcGrid?.map((infoitem) => renderTemplate`<div class="info-row" data-astro-cid-rdnqlhoo><span class="ic" data-astro-cid-rdnqlhoo><img${addAttribute(infoitem?.socialImage?.node?.mediaItemUrl || "", "src")} alt="Icon" height="17" width="17" loading="lazy" data-astro-cid-rdnqlhoo></span><div data-astro-cid-rdnqlhoo>${unescapeHTML(infoitem?.socialContent || "error")}</div></div>`)}</div><div class="map-frame" data-astro-cid-rdnqlhoo><svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" data-astro-cid-rdnqlhoo><rect width="520" height="250" fill="#071F45" data-astro-cid-rdnqlhoo></rect><path d="M170 18 L350 40 L332 118 L370 158 L342 232 L196 244 L138 170 L108 78 Z" fill="#0E2B5B" stroke="#0D47A1" stroke-width="2.5" data-astro-cid-rdnqlhoo></path><circle cx="250" cy="130" r="7" fill="#4A7FD4" data-astro-cid-rdnqlhoo></circle><circle cx="250" cy="130" r="16" fill="none" stroke="#4A7FD4" stroke-opacity="0.35" stroke-width="1.5" data-astro-cid-rdnqlhoo></circle></svg></div></div></div></div></section></main><script>
            const cForm = document.getElementById("contactForm");
            const cStatusBox = document.getElementById("contactFormStatus");
            const cSubmitBtn = document.getElementById("contactSubmitBtn");

            function cClearErrors() {
                cForm.querySelectorAll(".err").forEach((el) => (el.textContent = ""));
                cForm.querySelectorAll("input, textarea, select").forEach((el) =>
                    el.classList.remove("field-invalid")
                );
            }

            function cShowError(fieldId, message) {
                const errEl = document.getElementById(\`err-\${fieldId}\`);
                const inputEl = document.getElementById(fieldId);
                if (errEl) errEl.textContent = message;
                if (inputEl) inputEl.classList.add("field-invalid");
            }

            function cValidateForm(data) {
                let valid = true;

                if (!data.fname || data.fname.trim().length < 2) {
                    cShowError("c-fname", "Please enter your first name.");
                    valid = false;
                }
                if (!data.lname || data.lname.trim().length < 2) {
                    cShowError("c-lname", "Please enter your last name.");
                    valid = false;
                }

                const phoneDigits = (data.phone || "").replace(/\\D/g, "");
                if (!data.phone || phoneDigits.length < 10) {
                    cShowError("c-phone", "Please enter a valid phone number.");
                    valid = false;
                }

                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!data.email || !emailRegex.test(data.email)) {
                    cShowError("c-email", "Please enter a valid email address.");
                    valid = false;
                }

                return valid;
            }

            function cSetStatus(message, type) {
                cStatusBox.style.display = "block";
                cStatusBox.textContent = message;
                cStatusBox.className = \`form-status \${type}\`;
            }

            cForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                cClearErrors();
                cStatusBox.style.display = "none";

                const formData = new FormData(cForm);
                const data = Object.fromEntries(formData.entries());

                if (!cValidateForm(data)) {
                    cSetStatus("Please fix the highlighted fields above.", "error");
                    return;
                }

                cSubmitBtn.disabled = true;
                cSubmitBtn.textContent = "Sending...";

                try {
                    const res = await fetch("/api/send-contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                    });

                    const result = await res.json();

                    if (result.success) {
                        cSetStatus("Thanks! Your request has been sent. We'll be in touch within one business hour.", "success");
                        cForm.reset();
                    } else if (result.errors) {
                        Object.entries(result.errors).forEach(([field, msg]) =>
                            cShowError(\`c-\${field}\`, msg)
                        );
                        cSetStatus("Please fix the highlighted fields above.", "error");
                    } else {
                        cSetStatus(result.message || "Something went wrong. Please call us instead.", "error");
                    }
                } catch (err) {
                    cSetStatus("Network error. Please try again or call us directly.", "error");
                } finally {
                    cSubmitBtn.disabled = false;
                    cSubmitBtn.textContent = "Request Free Estimate";
                }
            });
        <\/script></body></html>`;
}, "/home/claude/roofing_check/roofing/src/components/Contactform.astro", void 0);
//#endregion
export { $$Contactform as t };

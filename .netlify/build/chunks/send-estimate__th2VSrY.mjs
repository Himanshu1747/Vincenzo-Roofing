import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import nodemailer from "nodemailer";
//#region src/pages/src/pages/api/send-estimate.js
var send_estimate_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
async function POST({ request }) {
	try {
		const { fname, lname, phone, email, address, ptype, service, timing, details } = await request.json();
		const errors = {};
		if (!fname || fname.trim().length < 2) errors.fname = "First name is required.";
		if (!lname || lname.trim().length < 2) errors.lname = "Last name is required.";
		const phoneDigits = (phone || "").replace(/\D/g, "");
		if (!phone || phoneDigits.length < 10) errors.phone = "A valid phone number is required.";
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email is required.";
		if (!address || address.trim().length < 5) errors.address = "Property address is required.";
		if (Object.keys(errors).length > 0) return new Response(JSON.stringify({
			success: false,
			errors
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: "himanshusaxena1747@gmail.com",
				pass: "jhxx awns jvaw zeyc"
			}
		});
		const html = `
      <h2>New Free Estimate Request</h2>
      <p><b>Name:</b> ${fname} ${lname}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Address:</b> ${address}</p>
      <p><b>Property type:</b> ${ptype || "Not specified"}</p>
      <p><b>Service needed:</b> ${service || "Not specified"}</p>
      <p><b>Timing:</b> ${timing || "Not specified"}</p>
      <p><b>Details:</b> ${details ? details.replace(/\n/g, "<br/>") : "None provided"}</p>
    `;
		await transporter.sendMail({
			from: `"Estimate Request Form" <himanshusaxena1747@gmail.com>`,
			to: "himanshusaxena1747@gmail.com",
			replyTo: email,
			subject: `New Roofing Estimate Request — ${fname} ${lname}`,
			html
		});
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("Email send error:", err);
		return new Response(JSON.stringify({
			success: false,
			message: "Server error. Please try again."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/src/pages/api/send-estimate@_@js
var page = () => send_estimate_exports;
//#endregion
export { page };

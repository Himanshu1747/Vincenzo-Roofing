import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import nodemailer from "nodemailer";
//#region src/pages/api/send-contact.js
var send_contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
function getTransporter() {
	return nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: "vincenzo.nastasia.825@gmail.com",
			pass: "lfyo afss oclx fray"
		}
	});
}
async function POST({ request }) {
	try {
		const { fname, lname, phone, email, service, msg } = await request.json();
		const errors = {};
		if (!fname || fname.trim().length < 2) errors.fname = "First name is required.";
		if (!lname || lname.trim().length < 2) errors.lname = "Last name is required.";
		const phoneDigits = (phone || "").replace(/\D/g, "");
		if (!phone || phoneDigits.length < 10) errors.phone = "A valid phone number is required.";
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email is required.";
		if (Object.keys(errors).length > 0) return new Response(JSON.stringify({
			success: false,
			errors
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const transporter = getTransporter();
		const fromAddress = "vincenzo.nastasia.825@gmail.com";
		const toAddress = "vincenzo.nastasia.825@gmail.com";
		const html = `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${fname} ${lname}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Service needed:</b> ${service || "Not specified"}</p>
      <p><b>Message:</b> ${msg ? msg.replace(/\n/g, "<br/>") : "None provided"}</p>
    `;
		await transporter.sendMail({
			from: `"Contact Form" <${fromAddress}>`,
			to: toAddress,
			replyTo: email,
			subject: `New Contact Form Submission — ${fname} ${lname}`,
			html
		});
		const thankYouHtml = `
      <p>Hi ${fname},</p>
      <p>Thank you for reaching out. We've received your message and a member of our team will get back to you shortly, typically within one business hour (7am–6pm, Mon–Fri).</p>
      <p><b>Here's a quick summary of what you submitted:</b></p>
      <ul>
        <li><b>Service:</b> ${service || "Not specified"}</li>
        <li><b>Message:</b> ${msg ? msg.replace(/\n/g, "<br/>") : "None provided"}</li>
      </ul>
      <p>Thanks again,<br/>The Roofing Team</p>
    `;
		await transporter.sendMail({
			from: `"Roofing Team" <${fromAddress}>`,
			to: email,
			subject: "Thanks for contacting us!",
			html: thankYouHtml
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
//#region \0virtual:astro:page:src/pages/api/send-contact@_@js
var page = () => send_contact_exports;
//#endregion
export { page };

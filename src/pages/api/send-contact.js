import nodemailer from "nodemailer";

export const prerender = false;

function getTransporter() {
  const host = process.env.SMTP_HOST || import.meta.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || import.meta.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || import.meta.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || import.meta.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP credentials missing in Environment Variables");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { fname, lname, phone, email, service, msg } = data;

    // ---- Server-side validation ----
    const errors = {};

    if (!fname || fname.trim().length < 2) errors.fname = "First name is required.";
    if (!lname || lname.trim().length < 2) errors.lname = "Last name is required.";

    const phoneDigits = (phone || "").replace(/\D/g, "");
    if (!phone || phoneDigits.length < 10) errors.phone = "A valid phone number is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) errors.email = "A valid email is required.";

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_USER || import.meta.env.SMTP_USER;
    const toAddress = process.env.TO_EMAIL || import.meta.env.TO_EMAIL || fromAddress;

    // ---- Notification email to business owner ----
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
      html,
    });

    // ---- Auto-reply thank-you email ----
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
      html: thankYouHtml,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: err.message || "Server error. Please try again or call us." 
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
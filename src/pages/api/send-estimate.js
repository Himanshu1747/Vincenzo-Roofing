import nodemailer from "nodemailer";

export const prerender = false;

function getTransporter() {
  const host = process.env.SMTP_HOST || import.meta.env.SMTP_HOST || "smtp.gmail.com";
  const user = process.env.SMTP_USER || import.meta.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || import.meta.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true, // Live Vercel par Port 465 (SSL) 100% reliable rehta hai
    auth: { user, pass },
  });
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { fname, lname, phone, email, address, ptype, service, timing, details } = data;

    // ---- Validation ----
    const errors = {};
    if (!fname || fname.trim().length < 2) errors.fname = "First name is required.";
    if (!lname || lname.trim().length < 2) errors.lname = "Last name is required.";

    const phoneDigits = (phone || "").replace(/\D/g, "");
    if (!phone || phoneDigits.length < 10) errors.phone = "A valid phone number is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) errors.email = "A valid email is required.";

    if (!address || address.trim().length < 5) errors.address = "Property address is required.";

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_USER || import.meta.env.SMTP_USER;
    const toAddress = process.env.TO_EMAIL || import.meta.env.TO_EMAIL || fromAddress;

    // ---- Email To Owner ----
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
      from: `"Free Estimate Form" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Roofing Estimate Request — ${fname} ${lname}`,
      html,
    });

    // ---- Auto Reply Email ----
    const thankYouHtml = `
      <p>Hi ${fname},</p>
      <p>Thank you for requesting a free roofing estimate. We've received your details and a member of our team will be in touch shortly.</p>
      <p><b>Summary:</b></p>
      <ul>
        <li><b>Service:</b> ${service || "Not specified"}</li>
        <li><b>Address:</b> ${address}</li>
        <li><b>Timing:</b> ${timing || "Not specified"}</li>
      </ul>
      <p>Thanks again,<br/>The Roofing Team</p>
    `;

    await transporter.sendMail({
      from: `"Roofing Team" <${fromAddress}>`,
      to: email,
      subject: "Thanks for your free estimate request!",
      html: thankYouHtml,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
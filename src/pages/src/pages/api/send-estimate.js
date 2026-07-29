import nodemailer from "nodemailer";

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();

    const {
      fname,
      lname,
      phone,
      email,
      address,
      ptype,
      service,
      timing,
      details,
    } = data;

    // ---- Server-side validation (never trust the client) ----
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

    // ---- Build transporter ----
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT),
      secure: Number(import.meta.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // ---- Compose email ----
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
      from: `"Estimate Request Form" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.TO_EMAIL,
      replyTo: email,
      subject: `New Roofing Estimate Request — ${fname} ${lname}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
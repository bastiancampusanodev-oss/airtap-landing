import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, topic, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeTopic = String(topic || "").trim();
    const safeMessage = String(message).trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const subject = `AirTap contact — ${safeName}${safeTopic ? ` (${safeTopic})` : ""}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
        <h2>New contact message</h2>
        <p><b>Name:</b> ${escapeHtml(safeName)}</p>
        <p><b>Email:</b> ${escapeHtml(safeEmail)}</p>
        <p><b>Topic:</b> ${escapeHtml(safeTopic || "-")}</p>
        <hr/>
        <p style="white-space:pre-wrap">${escapeHtml(safeMessage)}</p>
        <hr/>
        <p style="color:#666">Sent from airtapapp.com</p>
      </div>
    `;

    // ✅ NOTE:
    // - "from" MUST be a valid sender on your verified domain in Resend (e.g. contact@airtapapp.com)
    // - "to" can be admin@... and you can also add more recipients if you want
    const result = await resend.emails.send({
      from: "AirTap <contact@airtapapp.com>",
      to: ["admin@airtapapp.com"],
      replyTo: safeEmail,
      subject,
      html,
    });

    // Resend returns { data, error }
    if (result.error) {
      return Response.json({ ok: false, error: result.error }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

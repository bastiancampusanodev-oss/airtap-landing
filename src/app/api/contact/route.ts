import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, topic } = await req.json();

    const n = String(name || "").trim();
    const e = String(email || "").trim();
    const m = String(message || "").trim();
    const t = String(topic || "General").trim();

    if (!n || !e || !m) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const subject = `AirTap contact — ${t} — ${n}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.45">
        <h2>New contact message</h2>
        <p><b>Topic:</b> ${escapeHtml(t)}</p>
        <p><b>Name:</b> ${escapeHtml(n)}</p>
        <p><b>Email:</b> ${escapeHtml(e)}</p>
        <p><b>Message:</b></p>
        <div style="white-space:pre-wrap;border:1px solid #eee;border-radius:12px;padding:12px">
          ${escapeHtml(m)}
        </div>
        <hr/>
        <p style="color:#666">Sent from airtapapp.com</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      // ✅ usa el dominio verificado (airtapapp.com)
      from: "AirTap <hello@airtapapp.com>",
      to: ["admin@airtapapp.com"],
      replyTo: e,
      subject,
      html,
    });

    if (error) {
      return Response.json({ ok: false, error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
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

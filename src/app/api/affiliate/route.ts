import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, handle, audience } = await req.json();

    // Basic validation
    if (!name || !email || !handle) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeHandle = String(handle).trim();
    const safeAudience = String(audience || "").trim();

    if (!safeName || !safeEmail || !safeHandle) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const subject = `New AirTap affiliate request — ${safeName}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.4">
        <h2>New affiliate request</h2>
        <p><b>Name:</b> ${escapeHtml(safeName)}</p>
        <p><b>Email:</b> ${escapeHtml(safeEmail)}</p>
        <p><b>Social handle/link:</b> ${escapeHtml(safeHandle)}</p>
        <p><b>Audience size:</b> ${escapeHtml(safeAudience || "-")}</p>
        <hr/>
        <p style="color:#666">Sent from airtapapp.com</p>
      </div>
    `;

    const result = await resend.emails.send({
      // ✅ Must be a sender on your verified domain in Resend
      from: "AirTap <affiliate@airtapapp.com>",
      to: ["admin@airtapapp.com"],
      replyTo: safeEmail,
      subject,
      html,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return Response.json({ ok: false, error: result.error }, { status: 500 });
    }

    // result.data typically contains id
    return Response.json({ ok: true, id: result.data?.id }, { status: 200 });
  } catch (e: any) {
    console.error("SERVER ERROR:", e);
    return Response.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
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

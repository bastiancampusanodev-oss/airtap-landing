import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, handle, audience } = await req.json();

    if (!name || !email || !handle) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const subject = `New AirTap affiliate request — ${name}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.4">
        <h2>New affiliate request</h2>
        <p><b>Name:</b> ${escapeHtml(String(name))}</p>
        <p><b>Email:</b> ${escapeHtml(String(email))}</p>
        <p><b>Social handle/link:</b> ${escapeHtml(String(handle))}</p>
        <p><b>Audience size:</b> ${escapeHtml(String(audience || "-"))}</p>
        <hr/>
        <p style="color:#666">Sent from airtapapp.com</p>
      </div>
    `;

  const { data, error } = await resend.emails.send({
  from: "AirTap <affiliate@send.airtapapp.com>",
  to: ["admin@airtapapp.com"],
  replyTo: String(email),
  subject,
  html,
});


    // 👇 clave: si Resend falla, aquí lo pillamos
    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json({ ok: false, error }, { status: 500 });
    }

    console.log("RESEND OK:", data);
    return Response.json({ ok: true, id: data?.id }, { status: 200 });
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

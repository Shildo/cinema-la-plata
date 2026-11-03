function buildPromoEmail(siteUrl: string) {
  const background = `${siteUrl}/backgrounds/promoEmailBackground.jpeg`;
  const confetti = `${siteUrl}/backgrounds/confetti.gif`;
  const logo = `${siteUrl}/logo.png`;
  const cartelera = `${siteUrl}/#peliculas`;

  return `<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Una sorpresa de Cinema La Plata</title><style>@font-face{font-family:Satoshi;src:url('${siteUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype');font-weight:400}@font-face{font-family:Satoshi;src:url('${siteUrl}/fonts/satoshi/Satoshi-Medium.otf') format('opentype');font-weight:500}@font-face{font-family:Satoshi;src:url('${siteUrl}/fonts/satoshi/Satoshi-Bold.otf') format('opentype');font-weight:700}@font-face{font-family:Satoshi;src:url('${siteUrl}/fonts/satoshi/Satoshi-Black.otf') format('opentype');font-weight:900}</style></head>
<body style="margin:0;padding:0;background:#111;font-family:Satoshi,Arial,sans-serif;color:#fff;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#111;"><tr><td align="center">
<div style="position:relative;width:100%;max-width:600px;margin:0 auto;overflow:hidden;text-align:center;line-height:1.1;">
<img src="${background}" alt="" width="600" style="display:block;width:100%;height:auto;border:0;">
<img src="${confetti}" alt="" width="600" style="position:absolute;inset:0;z-index:1;width:100%;height:100%;object-fit:cover;border:0;">
<img src="${logo}" alt="Cinema La Plata" width="150" style="position:absolute;z-index:2;top:2%;left:50%;width:26%;max-width:150px;height:auto;transform:translateX(-50%);">
<h1 style="position:absolute;z-index:2;top:13%;left:6%;width:88%;margin:0;color:#fff;font-size:64px;font-weight:900;">Que los cumplas feliz</h1>
<p style="position:absolute;z-index:2;top:25%;left:6%;width:88%;margin:0;color:#fff;font-size:32px;">Tu día merece una función especial</p>
<p style="position:absolute;z-index:2;top:36%;left:6%;width:88%;margin:0;color:#fff;font-size:24px;line-height:1.15;font-weight:500;">Vení a festejar con nosotros el día de tu cumpleaños y acercate al Candy Bar presentando tu DNI para obtener un</p>
<p style="position:absolute;z-index:2;top:53%;left:6%;width:88%;margin:0;color:#fff;font-size:64px;font-weight:900;">30% OFF</p>
<p style="position:absolute;z-index:2;top:67%;left:6%;width:88%;margin:0;color:#fff;font-size:24px;line-height:1.15;font-weight:500;">Elegí la peli que más te guste para disfrutar tu día y aprovechar la promo!</p>
<a href="${cartelera}" style="position:absolute;z-index:2;top:80%;left:50%;display:inline-block;padding:12px 24px;transform:translateX(-50%);border-radius:8px;background:#ff6c19;color:#fff;font-size:24px;font-weight:700;text-decoration:none;white-space:nowrap;">Ver cartelera</a>
<p style="position:absolute;z-index:2;right:6%;bottom:2%;left:6%;margin:0;color:#fff;font-size:12px;font-style:italic;line-height:1.3;">Recibiste este correo porque solicitaste esta promoción de cumpleaños en Cinema La Plata. Es un envío único.</p>
</div></td></tr></table></body></html>`;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Solicitud no válida." }, { status: 403 });
  }

  let body: { email?: unknown; consent?: unknown; website?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ error: "Ingresá un correo electrónico válido." }, { status: 400 });
  }
  if (body.consent !== true) {
    return Response.json({ error: "Confirmá que querés recibir esta promoción por correo." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!apiKey || !from || !siteUrl) {
    return Response.json(
      { error: "El envío todavía no está configurado. Contactá al administrador del sitio." },
      { status: 503 },
    );
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "¡Que los cumplas feliz! Tenés 30% OFF en el Candy Bar",
        html: buildPromoEmail(siteUrl),
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      return Response.json(
        { error: "Resend no pudo enviar el correo. Revisá el remitente y volvé a intentar." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "No pudimos enviar el correo. Intentá nuevamente." },
      { status: 502 },
    );
  }
}

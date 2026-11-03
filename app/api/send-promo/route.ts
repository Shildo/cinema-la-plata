function buildPromoEmail(siteUrl: string) {
  const background = `${siteUrl}/backgrounds/promoEmailBackground.jpeg`;
  const confetti = `${siteUrl}/backgrounds/confetti.gif`;
  const logo = `${siteUrl}/logo.png`;
  const cartelera = `${siteUrl}/#peliculas`;

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Una sorpresa de Cinema La Plata</title>
  <style>
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-style: normal; font-weight: 400; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Medium.otf') format('opentype'); font-style: normal; font-weight: 500; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Bold.otf') format('opentype'); font-style: normal; font-weight: 700; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Black.otf') format('opentype'); font-style: normal; font-weight: 900; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Italic.otf') format('opentype'); font-style: italic; font-weight: 400; }
  </style>
</head>
<body style="margin:0;padding:0;background:#111;font-family:Satoshi,Arial,sans-serif;color:#fff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#111;">
    <tr><td align="center">
      <div style="position:relative;isolation:isolate;width:100%;max-width:600px;margin:0 auto;overflow:hidden;text-align:center;line-height:1.05;">
        <img src="${background}" alt="" width="600" style="display:block;width:100%;height:auto;border:0;">
        <img src="${confetti}" alt="" width="600" style="position:absolute;inset:0;z-index:1;width:100%;height:100%;object-fit:cover;border:0;">
        <img src="${logo}" alt="Cinema La Plata" width="150" style="position:absolute;z-index:2;top:2%;left:50%;width:26%;max-width:150px;height:auto;transform:translateX(-50%);">

        <h1 style="position:absolute;z-index:2;top:10%;left:6%;width:88%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:48px;font-style:normal;font-weight:900;line-height:1.05;">QUE LOS<br>CUMPLAS FELIZ</h1>
        <p style="position:absolute;z-index:2;top:20%;left:6%;width:88%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:22px;font-style:normal;font-weight:400;line-height:1.05;">Tu día merece una función especial</p>
        <p style="position:absolute;z-index:2;top:64%;left:6%;width:88%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:clamp(18px,4vw,24px);font-style:normal;font-weight:500;line-height:1.15;">Vení a festejar con nosotros el día de tu<br>cumpleaños y acercate al Candy Bar<br>presentando tu DNI para obtener un</p>
        <p style="position:absolute;z-index:2;top:72%;left:6%;width:88%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:50px;font-style:normal;font-weight:900;line-height:1.05;">30% OFF</p>
        <p style="position:absolute;z-index:2;top:81%;left:6%;width:88%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:20px;font-style:normal;font-weight:500;line-height:1.15;">Elegí la peli que más te guste para<br>disfrutar tu día y aprovechar la promo!</p>
        <a href="${cartelera}" style="position:absolute;z-index:2;top:88%;left:50%;display:inline-block;padding:12px 24px;transform:translateX(-50%);border-radius:8px;background:linear-gradient(90deg,#ff9800,#f44336);color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:clamp(18px,4vw,24px);font-style:normal;font-weight:700;line-height:1.05;text-decoration:none;white-space:nowrap;">Ver cartelera</a>

        <p style="position:absolute;z-index:2;top:95%;right:6%;left:6%;margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:clamp(10px,2vw,12px);font-style:italic;font-weight:400;line-height:1.3;text-align:center;">Estás recibiendo este mensaje porque te suscribiste a<br>nuestra lista en <u><a href="${siteUrl}" style="color:#fff;">Cinema La Plata</a></u>. Cuando no quieras seguir<br>recibiéndola, podés <u><a href="${siteUrl}/unsubscribe" style="color:#fff;">desuscribirte utilizando este vínculo.</a></u></p>
      </div>
    </td></tr>
  </table>
</body>
</html>`;
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
      const resendError = (await emailResponse.json().catch(() => null)) as
        | { message?: unknown; name?: unknown }
        | null;
      const detail =
        typeof resendError?.message === "string"
          ? resendError.message
          : "Resend rechazó el envío sin proporcionar detalles.";

      // Log the provider's reason for diagnosis; never log the API key or full request.
      console.error("Resend email request failed", {
        status: emailResponse.status,
        name: typeof resendError?.name === "string" ? resendError.name : undefined,
        message: detail,
      });

      return Response.json(
        { error: `Resend rechazó el correo: ${detail}` },
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

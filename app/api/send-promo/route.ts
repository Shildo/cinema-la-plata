import nodemailer from "nodemailer";

export const runtime = "nodejs";

function buildPromoEmail(siteUrl: string) {
  // Compressed combined background and confetti animation for email clients.
  const sceneBackground = `${siteUrl}/backgrounds/emailBackground-optimized.gif`;
  const logo = `${siteUrl}/logo.png`;
  const cartelera = `${siteUrl}/#peliculas`;

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="only light">
  <meta name="supported-color-schemes" content="light">
  <title>Una sorpresa de Cinema La Plata</title>
  <style>
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-style: normal; font-weight: 400; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Medium.otf') format('opentype'); font-style: normal; font-weight: 500; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Bold.otf') format('opentype'); font-style: normal; font-weight: 700; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Black.otf') format('opentype'); font-style: normal; font-weight: 900; }
    @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Italic.otf') format('opentype'); font-style: italic; font-weight: 400; }
    .promo-copy, .promo-copy a { color:#fff !important; -webkit-text-fill-color:#fff !important; }
    @media (prefers-color-scheme: dark) {
      body, .promo-page { background-color:#111 !important; color:#fff !important; }
      .promo-copy, .promo-copy a { color:#fff !important; -webkit-text-fill-color:#fff !important; }
    }
    @media screen and (max-width:480px) {
      table.promo-canvas { width:100% !important; height:209.17vw !important; }
      td.promo-scene-cell { height:209.17vw !important; background-size:100% 100% !important; }
      table.promo-layout { height:209.17vw !important; }
      tr.promo-r-top, tr.promo-r-top td { height:4.17vw !important; }
      tr.promo-r-logo, tr.promo-r-logo td { height:8.17vw !important; }
      tr.promo-r-logo-title, tr.promo-r-logo-title td { height:8.5vw !important; }
      tr.promo-r-title, tr.promo-r-title td { height:16.83vw !important; }
      tr.promo-r-title-subtitle, tr.promo-r-title-subtitle td { height:4.17vw !important; }
      tr.promo-r-subtitle, tr.promo-r-subtitle td { height:6vw !important; }
      tr.promo-r-subtitle-invitation, tr.promo-r-subtitle-invitation td { height:60.83vw !important; }
      tr.promo-r-invitation, tr.promo-r-invitation td { height:23vw !important; }
      tr.promo-r-invitation-discount, tr.promo-r-invitation-discount td { height:3vw !important; }
      tr.promo-r-discount, tr.promo-r-discount td { height:11vw !important; }
      tr.promo-r-discount-movie, tr.promo-r-discount-movie td { height:9.83vw !important; }
      tr.promo-r-movie, tr.promo-r-movie td { height:12vw !important; }
      tr.promo-r-movie-button, tr.promo-r-movie-button td { height:7vw !important; }
      tr.promo-r-button, tr.promo-r-button td { height:13vw !important; }
      tr.promo-r-button-footer, tr.promo-r-button-footer td { height:6.5vw !important; }
      tr.promo-r-footer, tr.promo-r-footer td { height:12.5vw !important; }
      tr.promo-r-bottom, tr.promo-r-bottom td { height:2.67vw !important; }
      .promo-title { font-size:8vw !important; }
      .promo-subtitle { font-size:17px !important; }
      .promo-invitation { font-size:15px !important; }
      .promo-discount { font-size:10vw !important; }
      .promo-movie { font-size:15px !important; }
      .promo-button { padding:8px 16px !important; font-size:17px !important; }
      .promo-footer { font-size:10px !important; line-height:1.2 !important; }
      .promo-text-cell { padding-right:3% !important; padding-left:3% !important; }
    }
  </style>
</head>
<body class="promo-page" style="margin:0;padding:0;background:#111;font-family:Satoshi,Arial,sans-serif;color:#fff;color-scheme:only light;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#111;border-collapse:collapse;color:#fff;">
    <tr>
      <td align="center" style="padding:0;">
        <table class="promo-canvas" role="presentation" width="600" height="1255" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;height:1255px;table-layout:fixed;border-collapse:collapse;border-spacing:0;text-align:center;line-height:1.05;">
          <tr>
            <td class="promo-scene-cell"
              width="600"
              height="1255"
              valign="top"
              background="${sceneBackground}"
              style="width:100%;height:1255px;padding:0;background-color:#111;background-image:url('${sceneBackground}');background-position:center top;background-repeat:no-repeat;background-size:100% 100%;"
            >
              <table class="promo-layout" role="presentation" width="100%" height="1255" cellspacing="0" cellpadding="0" border="0" style="width:100%;height:1255px;table-layout:fixed;border-collapse:collapse;border-spacing:0;text-align:center;">
                <tr class="promo-r-top"><td height="25" style="height:25px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-logo">
                  <td height="49" align="center" valign="middle" style="height:49px;padding:0;">
                    <img src="${logo}" alt="Cinema La Plata" width="150" style="display:block;width:26%;max-width:150px;height:auto;margin:0 auto;border:0;">
                  </td>
                </tr>
                <tr class="promo-r-logo-title"><td height="51" style="height:51px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-title">
                  <td class="promo-text-cell" height="101" align="center" valign="middle" style="height:101px;padding:0 6%;">
                    <h1 class="promo-copy promo-title" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:48px;font-style:normal;font-weight:900;line-height:1.05;">QUE LOS<br>CUMPLAS FELIZ</h1>
                  </td>
                </tr>
                <tr class="promo-r-title-subtitle"><td height="25" style="height:25px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-subtitle">
                  <td class="promo-text-cell" height="23" align="center" valign="middle" style="height:23px;padding:0 6%;">
                    <p class="promo-copy promo-subtitle" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:22px;font-style:normal;font-weight:400;line-height:1.05;">Tu día merece una función especial</p>
                  </td>
                </tr>
                <tr class="promo-r-subtitle-invitation"><td height="529" style="height:529px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-invitation">
                  <td class="promo-text-cell" height="83" align="center" valign="middle" style="height:83px;padding:0 6%;">
                    <p class="promo-copy promo-invitation" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:24px;font-style:normal;font-weight:500;line-height:1.15;">Vení a festejar con nosotros el día de tu<br>cumpleaños y acercate al Candy Bar<br>presentando tu DNI para obtener un</p>
                  </td>
                </tr>
                <tr class="promo-r-invitation-discount"><td height="18" style="height:18px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-discount">
                  <td class="promo-text-cell" height="53" align="center" valign="middle" style="height:53px;padding:0 6%;">
                    <p class="promo-copy promo-discount" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:50px;font-style:normal;font-weight:900;line-height:1.05;">30% OFF</p>
                  </td>
                </tr>
                <tr class="promo-r-discount-movie"><td height="59" style="height:59px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-movie">
                  <td class="promo-text-cell" height="46" align="center" valign="middle" style="height:46px;padding:0 6%;">
                    <p class="promo-copy promo-movie" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:20px;font-style:normal;font-weight:500;line-height:1.15;">Elegí la peli que más te guste para<br>disfrutar tu día y aprovechar la promo!</p>
                  </td>
                </tr>
                <tr class="promo-r-movie-button"><td height="42" style="height:42px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-button">
                  <td height="49" align="center" valign="middle" style="height:49px;padding:0;">
                    <a class="promo-copy promo-button" href="${cartelera}" style="display:inline-block;padding:12px 24px;border-radius:8px;background-color:#ff9800;background-image:linear-gradient(90deg,#ff9800,#f44336);color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:24px;font-style:normal;font-weight:700;line-height:1.05;text-decoration:none;white-space:nowrap;">Ver cartelera</a>
                  </td>
                </tr>
                <tr class="promo-r-button-footer"><td height="39" style="height:39px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr class="promo-r-footer">
                  <td class="promo-text-cell" height="47" align="center" valign="middle" style="height:47px;padding:0 6%;">
                    <p class="promo-copy promo-footer" style="margin:0;color:#fff;font-family:Satoshi,Arial,sans-serif;font-size:12px;font-style:italic;font-weight:400;line-height:1.3;">Estás recibiendo este mensaje porque te suscribiste a<br>nuestra lista en <u><a href="${siteUrl}" style="color:#fff;">Cinema La Plata</a></u>. Cuando no quieras seguir<br>recibiéndola, podés <u><a href="${siteUrl}/unsubscribe" style="color:#fff;">desuscribirte utilizando este vínculo.</a></u></p>
                  </td>
                </tr>
                <tr class="promo-r-bottom"><td height="16" style="height:16px;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
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

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!gmailUser || !gmailAppPassword || !siteUrl) {
    return Response.json(
      { error: "El envío por Gmail todavía no está configurado." },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: { name: "Cinema La Plata", address: gmailUser },
      to: email,
      subject: "¡Que los cumplas feliz! Tenés 30% OFF en el Candy Bar",
      html: buildPromoEmail(siteUrl),
    });

    return Response.json({ ok: true });
  } catch (error) {
    const mailError = error as { code?: unknown; name?: unknown };
    console.error("Gmail SMTP send failed", {
      name: typeof mailError.name === "string" ? mailError.name : undefined,
      code: typeof mailError.code === "string" ? mailError.code : undefined,
    });
    return Response.json(
      { error: "Gmail no pudo enviar el correo. Revisá las credenciales de envío e intentá nuevamente." },
      { status: 502 },
    );
  }
}

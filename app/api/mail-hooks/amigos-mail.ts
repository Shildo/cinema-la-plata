const FONT = "Satoshi,Arial,sans-serif";

function escapeAttribute(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

/** Devuelve el HTML del mail con fondo estático y footer. */
export function buildFriendsEmail(siteUrl: string): string {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const background = escapeAttribute(`${baseUrl}/backgrounds/friendsBackgroundEmail.jpeg`);
  const logo = escapeAttribute(`${baseUrl}/logo.png`);
  const home = escapeAttribute(`${baseUrl}/`);
  const cartelera = escapeAttribute(`${baseUrl}/#cartelera`);
  const unsubscribe = escapeAttribute(`${baseUrl}/desuscribirse`);

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="only light">
  <meta name="supported-color-schemes" content="light">
  <title>Cinema La Plata</title>
  <style>
    @font-face { font-family:Satoshi; src:url('${baseUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-style:normal; font-weight:400; }
    @font-face { font-family:Satoshi; src:url('${baseUrl}/fonts/satoshi/Satoshi-Italic.otf') format('opentype'); font-style:italic; font-weight:400; }
    @media screen and (max-width:480px) {
      table.mail-canvas { width:100% !important; height:209.17vw !important; }
      td.mail-scene { height:209.17vw !important; background-size:100% 100% !important; }
      table.mail-layout { height:209.17vw !important; }
      tr.mail-top, tr.mail-top td { height:4.17vw !important; }
      tr.mail-logo, tr.mail-logo td { height:8.17vw !important; }
      tr.mail-after-logo, tr.mail-after-logo td { height:171.67vw !important; }
      tr.promo-r-button, tr.promo-r-button td { height:8.17vw !important; }
      tr.promo-r-button-footer, tr.promo-r-button-footer td { height:6.5vw !important; }
      .promo-button { padding:8px 16px !important; font-size:20px !important; }
      tr.mail-footer, tr.mail-footer td { height:7.83vw !important; }
      tr.mail-bottom, tr.mail-bottom td { height:2.67vw !important; }
      .mail-footer-copy { font-size:10px !important; line-height:1.2 !important; }
      .mail-footer-cell { padding-right:3% !important; padding-left:3% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#111;font-family:${FONT};color:#fff;color-scheme:only light;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;margin:0;background:#111;border-collapse:collapse;font-family:${FONT};">
    <tr>
      <td align="center" style="padding:0;">
        <table class="mail-canvas" role="presentation" width="600" height="1255" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;height:1255px;table-layout:fixed;border-collapse:collapse;border-spacing:0;text-align:center;">
          <tr>
            <td class="mail-scene" width="600" height="1255" valign="top" background="${background}" bgcolor="#111111" style="width:100%;height:1255px;padding:0;background-color:#111;background-image:url('${background}');background-position:center top;background-repeat:no-repeat;background-size:100% 100%;">
              <table class="mail-layout" role="presentation" width="100%" height="1255" cellspacing="0" cellpadding="0" border="0" style="width:100%;height:1255px;table-layout:fixed;border-collapse:collapse;border-spacing:0;text-align:center;">
                <tr class="mail-top">
                  <td height="25" style="height:25px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr class="mail-logo">
                  <td height="49" align="center" valign="middle" style="height:49px;padding:0;">
                    <a href="${home}" style="display:block;text-decoration:none;">
                      <img src="${logo}" alt="Cinema La Plata" width="150" style="display:block;width:26%;max-width:150px;height:auto;margin:0 auto;border:0;">
                    </a>
                  </td>
                </tr>
                <tr class="mail-after-logo">
                  <td height="1030" style="height:1030px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr class="promo-r-button">
                  <td height="49" align="center" valign="middle" style="height:49px;padding:0;">
                    <a class="promo-button" href="${cartelera}" style="display:inline-block;padding:12px 24px;border-radius:8px;background-color:#ff9800;background-image:linear-gradient(90deg,#ff9800,#f44336);color:#fff;font-family:${FONT};font-size:38px;font-style:normal;font-weight:700;line-height:1.05;text-decoration:none;white-space:nowrap;">Ver cartelera</a>
                  </td>
                </tr>
                <tr class="promo-r-button-footer">
                  <td height="39" style="height:39px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr class="mail-footer">
                  <td class="mail-footer-cell" height="47" align="center" valign="middle" style="height:47px;padding:0 6%;">
                    <p class="mail-footer-copy" style="margin:0;color:#fff;font-family:${FONT};font-size:12px;font-style:italic;font-weight:400;line-height:1.3;">
                      Estás recibiendo este mensaje porque te suscribiste a<br>
                      nuestra lista en <u><a href="${home}" style="color:#fff;">Cinema La Plata</a></u>. Cuando no quieras seguir<br>
                      recibiéndola, podés <u><a href="${unsubscribe}" style="color:#fff;">desuscribirte utilizando este vínculo.</a></u>
                    </p>
                  </td>
                </tr>
                <tr class="mail-bottom">
                  <td height="16" style="height:16px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
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

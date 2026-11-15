import type { Movie } from "../../data/movie";

const FONT = "Satoshi,Arial,sans-serif";
const COLORS = {
  page: "#111111",
  card: "#000000",
  text: "#ffffff",
  muted: "#8f98b4",
};

function escapeHtml(value: string): string {
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

function absoluteUrl(siteUrl: string, path: string): string {
  return new URL(path, `${siteUrl.replace(/\/$/, "")}/`).toString();
}

function posterPath(movie: Movie): string {
  const filename = movie.image.split("/").pop()?.replace(/\.[^.]+$/, ".jpg");
  if (!filename) throw new Error(`La película "${movie.title}" no tiene una imagen válida.`);
  return `/mail-posters/${filename}`;
}

function renderMovie(movie: Movie, siteUrl: string): string {
  const title = escapeHtml(movie.title);
  const href = escapeHtml(absoluteUrl(siteUrl, `/pelicula/${movie.slug}`));
  const image = escapeHtml(absoluteUrl(siteUrl, posterPath(movie)));

  return `<div class="poster" style="display:inline-block;width:25%;vertical-align:top;font-size:0;line-height:0;">
    <a href="${href}" style="display:block;padding:6px;text-decoration:none;">
      <img src="${image}" alt="${title}" width="131" style="display:block;width:100%;height:auto;border:0;border-radius:4px;">
    </a>
  </div>`;
}

function renderMovieRows(movies: Movie[], siteUrl: string): string {
  return movies.map((movie) => renderMovie(movie, siteUrl)).join("");
}

/** HTML para enviar por Nodemailer: html: buildCarteleraEmail(siteUrl, movies) */
export function buildCarteleraEmail(siteUrl: string, movies: Movie[]): string {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const cartelera = movies.slice(0, -4);
  const preventa = movies.slice(-4);
  const logo = escapeHtml(absoluteUrl(baseUrl, "/logo.png"));
  const home = escapeHtml(absoluteUrl(baseUrl, "/#cartelera"));
  const unsubscribe = escapeHtml(absoluteUrl(baseUrl, "/desuscribirse"));
  const homeUrl = escapeHtml(baseUrl);

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="only light">
  <meta name="supported-color-schemes" content="light">
  <title>Cartelera de Cinema La Plata</title>
  <style>
    @font-face { font-family:Satoshi; src:url('${baseUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-weight:400; }
    @font-face { font-family:Satoshi; src:url('${baseUrl}/fonts/satoshi/Satoshi-Medium.otf') format('opentype'); font-weight:500; }
    @font-face { font-family:Satoshi; src:url('${baseUrl}/fonts/satoshi/Satoshi-Bold.otf') format('opentype'); font-weight:700; }
    @media screen and (max-width:480px) {
      .mail-title { font-size:26px !important; }
      .mail-subtitle { font-size:14px !important; }
      .poster { width:50% !important; }
      .mail-grid { padding-left:6px !important; padding-right:6px !important; }
      .mail-card { width:100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${COLORS.page};font-family:${FONT};color:${COLORS.text};color-scheme:only light;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:${COLORS.page};border-collapse:collapse;">
    <tr><td align="center" style="padding:0;">
      <table class="mail-card" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:${COLORS.card};text-align:center;border-collapse:collapse;">
        <tr>
          <td align="center" style="padding:14px 0;background-color:#000;background-image:linear-gradient(90deg,#ff1319 0%,#ff1319 15%,#000 50%,#0c14e2 85%,#0c14e2 100%);">
            <a href="${home}" style="text-decoration:none;"><img src="${logo}" alt="Cinema La Plata" width="150" style="display:block;width:26%;max-width:150px;height:auto;margin:0 auto;border:0;"></a>
          </td>
        </tr>
        <tr><td align="center" style="padding:40px 20px 0;">
          <h1 class="mail-title" style="margin:0;color:${COLORS.text};font-family:${FONT};font-size:40px;font-weight:700;line-height:1.05;">DESCUBRÍ TU<br>PRÓXIMA HISTORIA</h1>
          <p class="mail-subtitle" style="margin:12px 0 0;color:${COLORS.text};font-family:${FONT};font-size:18px;letter-spacing:.08em;">Cartelera del 12/11/26 al 19/11/26</p>
        </td></tr>
        <tr><td class="mail-grid" align="center" style="padding:28px 14px 0;font-size:0;line-height:0;text-align:center;">
          ${renderMovieRows(cartelera, baseUrl)}
        </td></tr>
        <tr><td align="center" style="padding:48px 20px 0;">
          <h2 class="mail-title" style="margin:0;color:${COLORS.text};font-family:${FONT};font-size:40px;font-weight:700;line-height:1.05;">PREVENTA</h2>
        </td></tr>
        <tr><td class="mail-grid" align="center" style="padding:28px 14px 0;font-size:0;line-height:0;text-align:center;">
          ${renderMovieRows(preventa, baseUrl)}
        </td></tr>
        <tr><td align="center" style="padding:48px 20px 32px;">
          <p style="margin:0;color:${COLORS.muted};font-family:${FONT};font-size:12px;font-style:italic;line-height:1.4;">
            Estás recibiendo este mensaje porque te suscribiste a nuestra lista en
            <a href="${homeUrl}" style="color:${COLORS.muted};">Cinema La Plata</a>. Cuando no quieras seguir recibiéndola, podés
            <a href="${unsubscribe}" style="color:${COLORS.muted};">desuscribirte utilizando este vínculo</a>.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

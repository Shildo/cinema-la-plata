import type { CSSProperties } from "react";
import { movies, type Movie } from "../data/movie";

const FONT = "Satoshi,Arial,sans-serif";

const colors = {
  page: "#111111",
  card: "#000000",
  text: "#ffffff",
  accent: "#ffdd12",
  muted: "#8f98b4",
};

const content = {
	title: (
		<>
		DESCUBRÍ TU
		<br />
		PRÓXIMA HISTORIA
		</>
	),
	subtitle: "Cartelera del 12/11/26 al 19/11/26",
  	presaleTitle: "PREVENTA",
};

// Las últimas 4 películas de movie.ts son las de preventa
const cartelera = movies.slice(0, -4);
const preventa = movies.slice(-4);

// Mismo estilo para los dos títulos, así miden lo mismo
const titleStyle: CSSProperties = {
  margin: 0,
  color: colors.text,
  fontFamily: FONT,
  fontSize: 40,
  fontWeight: 700,
  lineHeight: 1.05,
};

const css = (siteUrl: string) => `
  @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-weight: 400; }
  @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Medium.otf') format('opentype'); font-weight: 500; }
  @font-face { font-family: Satoshi; src: url('${siteUrl}/fonts/satoshi/Satoshi-Bold.otf') format('opentype'); font-weight: 700; }
  @media screen and (max-width:480px) {
    .title { font-size: 26px !important; }
    .subtitle { font-size: 14px !important; }
    .poster { width: 50% !important; }
    .grid { padding-left: 6px !important; padding-right: 6px !important; }
  }
`;

const mailPoster = (movie: Movie) =>
  `/mail-posters/${movie.image.split("/").pop()!.replace(/\.[^.]+$/, ".jpg")}`;

function Poster({ movie, siteUrl }: { movie: Movie; siteUrl: string }) {
  return (
    <div
      className="poster"
      style={{ display: "inline-block", width: "25%", verticalAlign: "top", fontSize: 0, lineHeight: 0 }}
    >
      <a href={`${siteUrl}/pelicula/${movie.slug}`} style={{ display: "block", padding: 6 }}>
        <img
			src={`${siteUrl}${mailPoster(movie)}`}
			alt={movie.title}
			width={131}
			style={{ display: "block", width: "100%", height: "auto", border: 0, borderRadius: 4 }}
		/>
      </a>
    </div>
  );
}

export default function Mail({ siteUrl }: { siteUrl: string }) {
  return (
    <>
      <style>{css(siteUrl)}</style>

      <table
        role="presentation"
        width="100%"
        cellSpacing={0}
        cellPadding={0}
        border={0}
        style={{ background: colors.page, fontFamily: FONT }}
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                role="presentation"
                width={600}
                cellSpacing={0}
                cellPadding={0}
                border={0}
                style={{ width: "100%", maxWidth: 600, background: colors.card, textAlign: "center" }}
              >
                <tbody>
                  {/* Header con logo */}
                  <tr>
                    <td
                      align="center"
                      style={{
                        padding: "14px 0",
                        backgroundColor: "#000000",
                        backgroundImage:
                          "linear-gradient(90deg,#ff1319 0%,#ff1319 15%,#000000,#0c14e2 85%,#0c14e2 100%)",
                      }}
                    >
                    <a href="/#cartelera">
                      <img
                        src={`${siteUrl}/logo.png`}
                        alt="Cinema La Plata"
                        width={150}
                        style={{ display: "block", width: "26%", maxWidth: "150px",height: "auto", margin: "0 auto" }}
                      />
                    </a>
                      
                    </td>
                  </tr>

                  {/* Título y subtítulo */}
                  <tr>
                    <td align="center" style={{ padding: "40px 20px 0" }}>
                      <h1 className="title" style={titleStyle}>{content.title}</h1>
                      <p
                        className="subtitle"
                        style={{
                          margin: "12px 0 0",
                          color: colors.text,
                          fontFamily: FONT,
                          fontSize: 18,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {content.subtitle}
                      </p>
                    </td>
                  </tr>

                  {/* Cartelera */}
                  <tr>
                    <td className="grid" align="center" style={{ padding: "28px 14px 0", fontSize: 0, lineHeight: 0, textAlign: "center" }}>
                      {cartelera.map((movie) => (
                        <Poster key={movie.slug} movie={movie} siteUrl={siteUrl} />
                      ))}
                    </td>
                  </tr>

                  {/* Preventa */}
                  <tr>
                    <td align="center" style={{ padding: "48px 20px 0" }}>
                      <h2 className="title" style={titleStyle}>{content.presaleTitle}</h2>
                    </td>
                  </tr>
                  <tr>
                    <td className="grid" align="center" style={{ padding: "28px 14px 0", fontSize: 0, lineHeight: 0, textAlign: "center" }}>
                      {preventa.map((movie) => (
                        <Poster key={movie.slug} movie={movie} siteUrl={siteUrl} />
                      ))}
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td align="center" style={{ padding: "48px 20px 32px" }}>
                      <p
                        style={{
                          margin: 0,
                          color: colors.muted,
                          fontFamily: FONT,
                          fontSize: 12,
                          fontStyle: "italic",
                          lineHeight: 1.4,
                        }}
                      >
                        Estás recibiendo este mensaje porque te suscribiste a nuestra lista en{" "}
                        <a href={siteUrl} style={{ color: colors.muted }}>Cinema La Plata</a>. Cuando no quieras seguir
                        recibiéndola, podés{" "}
                        <a href={`${siteUrl}/desuscribirse`} style={{ color: colors.muted }}>
                          desuscribirte utilizando este vínculo
                        </a>
                        .
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
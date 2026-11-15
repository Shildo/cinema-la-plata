const FONT = "Satoshi,Arial,sans-serif";

const css = (siteUrl: string) => `
  @font-face { font-family:Satoshi; src:url('${siteUrl}/fonts/satoshi/Satoshi-Regular.otf') format('opentype'); font-style:normal; font-weight:400; }
  @font-face { font-family:Satoshi; src:url('${siteUrl}/fonts/satoshi/Satoshi-Italic.otf') format('opentype'); font-style:italic; font-weight:400; }
  @media screen and (max-width:480px) {
    .mail-canvas { width:100% !important; height:209.17vw !important; }
    .mail-scene { height:209.17vw !important; background-size:100% 100% !important; }
    .mail-layout { height:209.17vw !important; }
    .mail-spacer, .mail-spacer td { height:198.67vw !important; }
    .mail-footer, .mail-footer td { height:7.83vw !important; }
    .mail-bottom, .mail-bottom td { height:2.67vw !important; }
    .mail-footer-copy { font-size:10px !important; line-height:1.2 !important; }
    .mail-footer-cell { padding-right:3% !important; padding-left:3% !important; }
    .promo-button { padding: 8px 16px !important; font-size: 20px !important; }
    }
`;

export default function Mail({ siteUrl }: { siteUrl: string }) {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const background = `${baseUrl}/backgrounds/friendsBackgroundEmail.jpeg`;
  const home = `${baseUrl}/`;
  const cartelera = `${baseUrl}/#cartelera`;
  const unsubscribe = `${baseUrl}/desuscribirse`;

  return (
    <>
      <style>{css(baseUrl)}</style>
      <table
        role="presentation"
        width="100%"
        cellSpacing={0}
        cellPadding={0}
        border={0}
        style={{ width: "100%", margin: 0, background: "#111", fontFamily: FONT }}
      >
        <tbody>
          <tr>
            <td align="center" style={{ padding: 0 }}>
              <table
                className="mail-canvas"
                role="presentation"
                width={600}
                cellSpacing={0}
                cellPadding={0}
                border={0}
                style={{ width: "100%", maxWidth: 600, height: 1255, tableLayout: "fixed", borderCollapse: "collapse", borderSpacing: 0, textAlign: "center" }}
              >
                <tbody>
                  <tr>
                    <td
                      className="mail-scene"
                      width={600}
                      height={1255}
                      valign="top"
                      style={{ width: "100%", height: 1255, padding: 0, backgroundColor: "#111", backgroundImage: `url('${background}')`, backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
                    >
                      <table
                        className="mail-layout"
                        role="presentation"
                        width="100%"
                        cellSpacing={0}
                        cellPadding={0}
                        border={0}
                        style={{ width: "100%", height: 1255, tableLayout: "fixed", borderCollapse: "collapse", borderSpacing: 0, textAlign: "center" }}
                      >
                        <tbody>
                          {/* Espacio para diseñar el contenido encima de la imagen de fondo. */}
                          <tr className="mail-spacer">
                            <td height={1192} style={{ height: 1192, padding: 0, fontSize: 0, lineHeight: 0 }}>&nbsp;</td>
                          </tr>

                          <tr className="promo-r-button">
                            <td height="auto" align="center" valign="middle" style={{ height:"auto", padding:"0" }}>
                              <a className="promo-button" href={cartelera} style={{ display: "inline-block", padding: "12px 24px", borderRadius: "8px", backgroundColor: "#ff9800", backgroundImage: "linear-gradient(90deg,#ff9800,#f44336)", color: "#fff", fontFamily:FONT, fontSize:"38px", fontStyle: "normal", fontWeight: 700, lineHeight: 1.05, textDecoration: "none", whiteSpace: "nowrap" }}>Ver cartelera</a>
                            </td>
                          </tr>

                          <tr className="promo-r-button-footer"><td height="10vw" style={{ height:"10vw", padding: 0, fontSize: 0, lineHeight:0 }}>&nbsp;</td></tr>

                          <tr className="mail-footer">
                            <td className="mail-footer-cell" height={47} align="center" valign="middle" style={{ height: 47, padding: "0 6%" }}>
                              <p className="mail-footer-copy" style={{ margin: 0, color: "#fff", fontFamily: FONT, fontSize: 12, fontStyle: "italic", fontWeight: 400, lineHeight: 1.3 }}>
                                Estás recibiendo este mensaje porque te suscribiste a<br />
                                nuestra lista en <u><a href={home} style={{ color: "#fff" }}>Cinema La Plata</a></u>. Cuando no quieras seguir<br />
                                recibiéndola, podés <u><a href={unsubscribe} style={{ color: "#fff" }}>desuscribirte utilizando este vínculo.</a></u>
                              </p>
                            </td>
                          </tr>
                          <tr className="mail-bottom">
                            <td height={16} style={{ height: 16, padding: 0, fontSize: 0, lineHeight: 0 }}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
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

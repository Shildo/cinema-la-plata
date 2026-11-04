import "./page.css";

function Spacer({ className }: { className: string }) {
  return (
    <tr className={`promo-spacer ${className}`} aria-hidden="true">
      <td />
    </tr>
  );
}

export default function PromoEmail() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinemalaplata.vercel.app";

  return (
    <main className="promo-email">
      <section className="promo-scene" aria-label="Vista previa del correo promocional">
        <video
          className="promo-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/backgrounds/emailBackground-poster.jpg"
          aria-hidden="true"
        >
          <source src="/backgrounds/emailBackground.MP4" type="video/mp4" />
        </video>
        <table className="promo-content" role="presentation" cellPadding={0} cellSpacing={0}>
          <tbody>
            <Spacer className="promo-space-logo-top" />
            <tr className="promo-row-logo">
              <td>
                <img className="promo-logo" src="/logo.png" alt="Cinema La Plata" />
              </td>
            </tr>

            <Spacer className="promo-space-logo-title" />
            <tr className="promo-row-title">
              <td>
                <h1 className="promo-title">¡QUE LOS<br />CUMPLAS FELIZ!</h1>
              </td>
            </tr>

            <Spacer className="promo-space-title-subtitle" />
            <tr className="promo-row-subtitle">
              <td>
                <p className="promo-subtitle">Tu día merece una función especial</p>
              </td>
            </tr>

            <Spacer className="promo-space-subtitle-invitation" />
            <tr className="promo-row-invitation">
              <td>
                <p className="promo-invitation">
                  Vení a festejar con nosotros el día de tu<br />
                  cumpleaños y acercate al Candy Bar<br />
                  presentando tu DNI para obtener un
                </p>
              </td>
            </tr>

            <Spacer className="promo-space-invitation-discount" />
            <tr className="promo-row-discount">
              <td>
                <p className="promo-discount">30% OFF</p>
              </td>
            </tr>

            <Spacer className="promo-space-discount-movie" />
            <tr className="promo-row-movie">
              <td>
                <p className="promo-movie">
                  Elegí la peli que más te guste para<br />
                  disfrutar tu día y aprovechar la promo!
                </p>
              </td>
            </tr>

            <Spacer className="promo-space-movie-button" />
            <tr className="promo-row-button">
              <td>
                <a className="promo-button" href="/#peliculas">
                  Ver cartelera
                </a>
              </td>
            </tr>

            <Spacer className="promo-space-button-footer" />
            <tr className="promo-row-footer">
              <td>
                <p className="promo-footer">
                  Estás recibiendo este mensaje porque te suscribiste a<br />
                  nuestra lista en <u><a href={siteUrl}>Cinema La Plata</a></u>. Cuando no quieras seguir<br />
                  recibiéndola, podés <u><a href={`${siteUrl}/unsubscribe`}>desuscribirte utilizando este vínculo.</a></u>
                </p>
              </td>
            </tr>
            <Spacer className="promo-space-footer-bottom" />
          </tbody>
        </table>
      </section>
    </main>
  );
}

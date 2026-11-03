import "./page.css";

export default function PromoEmail() {
  return (
    <main className="promo-email">
      <section className="promo-scene">
        <img
          className="promo-background"
          src="/backgrounds/promoEmailBackground.jpeg"
          alt=""
        />

        <img
          className="promo-confetti"
          src="/backgrounds/confetti.gif"
          alt=""
        />

        <img
          className="promo-logo"
          src="/logo.png"
          alt="Cinema La Plata"
        />

        <h1 className="promo-title">QUE LOS <br /> CUMPLAS FELIZ</h1>
        <p className="promo-subtitle">Tu día merece una función especial</p>

        <p className="promo-invitation">
          Vení a festejar con nosotros el día de tu <br /> cumpleaños y acercate al
          Candy Bar <br /> presentando tu DNI para obtener un
        </p>

        <p className="promo-discount">30% OFF</p>

        <p className="promo-movie">
          Elegí la peli que más te guste para <br /> disfrutar tu día y aprovechar la
          promo!
        </p>

        <a className="promo-button" href="/#peliculas">
          Ver cartelera
        </a>

        <p className="promo-footer">
          Estás recibiendo este mensaje porque te suscribiste a <br /> nuestra lista en {" "}
          <u>
            <a href={process.env.NEXT_PUBLIC_SITE_URL}>Cinema La Plata</a>.
          </u>
          Cuando no quieras seguir <br /> recibiéndola, podés {" "}
          <u>
            <a href={process.env.NEXT_PUBLIC_SITE_URL + "/unsubscribe"}>desuscribirte utilizando este vínculo.</a>
          </u>
        </p>
      </section>
    </main>
  );
}

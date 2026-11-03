import "./PromoEmail.css";

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

        <h1 className="promo-title">Que los cumplas feliz</h1>
        <p className="promo-subtitle">Tu día merece una función especial</p>

        <p className="promo-invitation">
          Vení a festejar con nosotros el día de tu cumpleaños y acercate al
          Candy Bar presentando tu DNI para obtener un
        </p>

        <p className="promo-discount">30% OFF</p>

        <p className="promo-movie">
          Elegí la peli que más te guste para disfrutar tu día y aprovechar la
          promo!
        </p>

        <a className="promo-button" href="/#peliculas">
          Ver cartelera
        </a>

        <p className="promo-footer">
          Recibiste este correo porque solicitaste esta promoción de cumpleaños en{" "}
          <u>Cinema La Plata</u>. Es un envío único.
        </p>
      </section>
    </main>
  );
}

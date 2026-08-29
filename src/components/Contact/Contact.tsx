export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-intro">
        <p className="contact-eyebrow">
          <span />
          CONTACTO
        </p>

        <h2>
          Hablemos
          <br />
          de cine.
        </h2>

        <p>
          ¿Tenés una consulta, una propuesta o querés saber más sobre Cinema
          La Plata? Escribinos y nos ponemos en contacto.
        </p>

        <div className="contact-links">
          <a href="mailto:info@cinemalaplata.com">
            <span>✉</span>
            info@cinemalaplata.com
          </a>

          <a href="tel:+542214000000">
            <span>☎</span>
            +54 221 400-0000
          </a>

          <a href="#">
            <span>◎</span>
            La Plata, Buenos Aires
          </a>
        </div>
      </div>

      <form className="contact-form">
        <label>
          Recibí novedades de cartelera

          <input
            type="email"
            name="email"
            placeholder="Tu email"
          />

        </label>

        <button type="submit" className="button button--primary">
          Suscribirme
          <span>→</span>
        </button>

        <p>
          <span>✦</span>
          Te responderemos a la brevedad.
        </p>
      </form>
    </section>
  );
}
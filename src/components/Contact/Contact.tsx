import Phone from "../../../public/svg/Phone";
import Instagram from "../../../public/svg/Instagram";
import TikTok from "../../../public/svg/TikTok";
import YouTube from "../../../public/svg/Youtube";
import MyMail from "../../../public/svg/MyMail";

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-intro">
        <p className="contact-eyebrow">
          CONTACTO
        </p>

        <h2>
          Hablemos
          <br />
          de cine
        </h2>

        <p>
          ¿Tenés una consulta, una propuesta o querés saber más sobre Cinema
          La Plata? Escribinos y nos ponemos en contacto.
        </p>

        <div className="contact-links">
          <a href="mailto:la.plata.cines@gmail.com">
            <span>
              <MyMail />
            </span>
            la.plata.cines@gmail.com
          </a>

          <a href="tel:+542214235456">
            <span>
              <Phone />
            </span>
            221 423-5456
          </a>

          <a href="https://www.instagram.com/tesis_marzocchini_migliaro" target="_blank" rel="noopener noreferrer">
            <span>
              <Instagram />
            </span>
            tesis_marzocchini_migliaro
          </a>

          <a href="https://www.tiktok.com/@tesis_cinema" target="_blank" rel="noopener noreferrer">
            <span>
              <TikTok />
            </span>
            tesis_cinema
          </a>
          
          <a href="https://www.youtube.com/@CinemaLaPlataOficial" target="_blank" rel="noopener noreferrer">
            <span>
              <YouTube />
            </span>
            CinemaLaPlataOficial
          </a>
        </div>
      </div>

      <form className="contact-form">
        <h3 className="contact-form-title">Escribinos</h3>

        <label className="contact-field-label" htmlFor="contact-name">
          Nombre
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Tu nombre"
          autoComplete="name"
        />

        <label className="contact-field-label" htmlFor="contact-phone">
          Teléfono
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder="Tu teléfono"
          autoComplete="tel"
        />

        <label className="contact-field-label" htmlFor="contact-email">
          Mail
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Tu mail"
          autoComplete="email"
        />

        <label className="contact-field-label" htmlFor="contact-message">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          rows={4}
        />

        <button type="submit" className="button button--primary">
          Enviar mensaje
        </button>

        <p>
          <span>✦</span>
          Completá tus datos y dejanos tu consulta. Nos pondremos en contacto con vos.
        </p>
      </form>
    </section>
  );
}

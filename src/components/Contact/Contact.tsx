import { Phone } from "lucide-react";
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
          de cine.
        </h2>

        <p>
          ¿Tenés una consulta, una propuesta o querés saber más sobre Cinema
          La Plata? Escribinos y nos ponemos en contacto.
        </p>

        <div className="contact-links">
          <a href="mailto:boleteriacity@cinemalaplata.com">
            <span>
              <MyMail />
            </span>
            boleteriacity@cinemalaplata.com
          </a>

          <a href="tel:+542214235456">
            <span>
              <Phone />
            </span>
            221 423-5456
          </a>

          <a href="https://www.instagram.com/cinemalaplata" target="_blank" rel="noopener noreferrer">
            <span>
              <Instagram />
            </span>
            cinemalaplata
          </a>

          <a href="https://www.tiktok.com/@cinemalaplata" target="_blank" rel="noopener noreferrer">
            <span>
              <TikTok />
            </span>
            cinemalaplata
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
        <label>
          Formá parte de la comunidad

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
          />
          <input
            type="text"
            name="surname"
            placeholder="Tu apellido"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
          />
          <input
            type="date"
            name="birthdate"
            placeholder="Fecha de nacimiento"
          />

        </label>

        <button type="submit" className="button button--primary">
          Suscribirme
        </button>

        <p>
          <span>✦</span>
          Recibiras semanalmente un mail promocional para mantenerte informado sobre los estrenos, eventos especiales, combos, beneficios, descuentos y promociones.
        </p>
      </form>
    </section>
  );
}
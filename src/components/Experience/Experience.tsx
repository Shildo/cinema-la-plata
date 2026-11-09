import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Popcorn } from "lucide-react";
import { Tickets } from "lucide-react";

export default function Experience() {
  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-main">
        <p className="experience-eyebrow">
          EXPERIENCIA CINEMA
        </p>

        <h2>
          Elegí cómo queres
          <br />
          sentir la función
        </h2>

        <p>
          Viví la experiencia completa.
        </p>
        
      </div>

      <div className="experience-grid">
        <article className="experience-card experience-card--technologies">
          <div className="experience-icon">
            <Clapperboard />
          </div>

          <h3>Tecnologías</h3>

          <p>
            HD, 3D, ATMOS y 4D.
          </p>
        </article>

        <article className="experience-card experience-card--candybar">
          <div className="experience-icon">
            <Popcorn />
          </div>

          <h3>Candy Bar</h3>

          <p>
            Productos, combos y promociones.
          </p>
        </article>

        <Link
          className="experience-card-link experience-card--benefits"
          href="/beneficios"
          aria-label="Explorar descuentos y promociones"
        >
          <div className="experience-icon">
            <Tickets />
          </div>

          <h3>Beneficios</h3>

          <p>
            2x1, descuentos y promociones.
          </p>
          <span className="experience-card-cta">
            Ver beneficios <ArrowRight size={16} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}

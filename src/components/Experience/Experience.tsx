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
          sentir la función.
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

        <article className="experience-card experience-card--benefits">
          <div className="experience-icon">
            <Tickets />
          </div>

          <h3>Beneficios</h3>

          <p>
            2x1, descuentos y alianzas.
          </p>
        </article>
      </div>
    </section>
  );
}
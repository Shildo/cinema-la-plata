export default function Experience() {
  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-main">
        <p className="experience-eyebrow">
          LA EXPERIENCIA CINEMA
        </p>

        <h2>
          Elegí cómo
          <br />
          queres sentir la
          <br />
          función.
        </h2>

        <p>
          Formatos, propuestas gastronómicas y beneficios que completan la experiencia de ir al cine.
        </p>

        <a href="#cartelera" className="button button--primary">
          Conocé las tecnologias →
        </a>
      </div>

      <div className="experience-grid">
        <article>
          <span className="experience-number">01</span>

          <div className="experience-icon">◉</div>

          <h3>Tecnologías</h3>

          <p>
            HD, 3D, ATMOS y 4D.
          </p>
        </article>

        <article>
          <span className="experience-number">02</span>

          <div className="experience-icon">◆</div>

          <h3>Candy Bar</h3>

          <p>
            Productos, combos y promociones.
          </p>
        </article>

        <article>
          <span className="experience-number">03</span>

          <div className="experience-icon">✦</div>

          <h3>Beneficios</h3>

          <p>
            2x1, descuentos y alianzas.
          </p>
        </article>
      </div>
    </section>
  );
}
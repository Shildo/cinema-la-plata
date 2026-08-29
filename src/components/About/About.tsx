export default function About() {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-image">
        <div className="about-image-placeholder">
          <span>IMAGEN INSTITUCIONAL</span>
          <small>Foto de Cinema La Plata</small>
        </div>
      </div>

      <div className="about-copy">
        <p className="about-eyebrow">
          <span />
          NOSOTROS
        </p>

        <h2>
          Historias que se
          <br />
          encuentran en
          <br />
          La Plata.
        </h2>

        <p>
          Cinema La Plata es un espacio pensado para disfrutar del cine,
          compartir experiencias y encontrarnos alrededor de cada película.
        </p>

        <a className="button button--secondary" href="#contacto">
          Conocé nuestra historia
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
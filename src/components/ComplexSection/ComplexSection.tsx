const complexes = [
  {
    number: "01",
    name: "Cinema City",
  },
  {
    number: "02",
    name: "Cinema Paradiso",
  },
  {
    number: "03",
    name: "Cinema Ocho",
  },
  {
    number: "04",
    name: "Cinema Rocha",
  },
  {
    number: "05",
    name: "Cinema San Martin",
  },
];

export default function ComplexSection() {
  return (
    <section className="complex-section" id="complejos">
      <div className="complex-side">
        <p className="section-eyebrow">NUESTROS COMPLEJOS</p>

        <h2>
          Elegí dónde
          <br />
          querés ver
          <br />
          la película.
        </h2>

        <p className="section-copy">
          Conocé nuestros complejos, sus salas y todo lo que tienen para
          ofrecerte antes de que empiece la función.
        </p>

        <div className="complex-list">
          {complexes.map((complex, index) => (
            <button
              key={complex.number}
              className={index === 0 ? "active" : ""}
            >
              <span>{complex.number}</span>
              {complex.name}
              <span>→</span>
            </button>
          ))}
        </div>
      </div>

      <div className="complex-detail">
        <div className="complex-image-placeholder">
          <span>IMAGEN DEL COMPLEJO</span>
        </div>

        <div className="complex-card">
          <p className="complex-card__location">01 / LA PLATA</p>

          <h3>Una experiencia que empieza antes de la película.</h3>

          <p>
            Un espacio pensado para que cada visita al cine sea mucho más que
            sentarse frente a una pantalla.
          </p>

          <div className="complex-facts">
            <div>
              <span>01</span>
              <small>UBICACIÓN</small>
              <strong>La Plata</strong>
            </div>

            <div>
              <span>02</span>
              <small>SALAS</small>
              <strong>Consultar cartelera</strong>
            </div>
          </div>

          <a href="#" className="button button--primary">
            Conocer complejo →
          </a>
        </div>
      </div>
    </section>
  );
}
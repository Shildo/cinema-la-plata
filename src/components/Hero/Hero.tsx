export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background-placeholder" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span />
          LA CARTELERA DE LA PLATA
        </div>

        <h1>
          La pantalla
          <br />
          <span>grande</span> empieza
          <br />
          acá.
        </h1>

        <p className="hero__description">
          Una base editable para presentar estrenos, funciones,
          complejos y todo lo que pasa alrededor del cine.
        </p>

        <div className="hero__actions">
          <a href="#" className="button button--primary">
            <span>🎟</span>
            Ver horarios
          </a>

          <a href="#" className="button button--secondary">
            <span>▶</span>
            Ver tráiler
          </a>
        </div>

        <div className="hero__info">
          <span>HORARIOS ACTUALIZABLES</span>
          <b>•</b>
          <span>SELECCIONÁ TU SALA</span>
        </div>
      </div>

      <div className="spiderman">
        <img src="/spiderman.png" alt="Spider-Man" />
      </div>
    </section>
  );
}
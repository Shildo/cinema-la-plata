export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background-placeholder" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span />
          LA CARTELERA DE LA PLATA
        </div>

        <h1 className="big-title">
          La pantalla <span>grande</span>
          <br />
           empieza acá.
        </h1>

        <p className="hero__description">
          Una base editable para presentar estrenos, funciones,
          complejos y todo lo que pasa alrededor del cine.
        </p>

        <div className="hero__actions">
          {/* <a href="#" className="button button--primary">
            <span>🎟</span>
            Ver horarios
          </a> */}

          <a href="https://www.youtube.com/watch?v=d9MyW72ELq0" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            <span>▶</span>
            Ver tráiler
          </a>
        </div>
      </div>
    </section>
  );
}
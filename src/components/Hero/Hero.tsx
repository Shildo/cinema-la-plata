export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background-placeholder" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          LA CARTELERA DE LA PLATA
        </div>

        <h1>
          La pantalla <span>grande</span>
          <br />
           empieza acá.
        </h1>

        <div className="hero__actions">

          <a href="https://www.youtube.com/watch?v=d9MyW72ELq0" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            Ver tráiler
          </a>
        </div>
      </div>
    </section>
  );
}
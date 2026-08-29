const news = [
  {
    type: "ESTRENOS",
    title: "Todo lo que llega a la pantalla grande este mes.",
    featured: true,
  },
  {
    type: "NOVEDADES",
    title: "Las películas que no te podés perder.",
    featured: false,
  },
  {
    type: "EXPERIENCIAS",
    title: "Descubrí todo lo que pasa antes de la función.",
    featured: false,
  },
];

export default function News() {
  return (
    <section className="news-section" id="novedades">
      <div className="section-row">
        <div className="section-heading">
          <p className="news-eyebrow">NOVEDADES</p>

          <h2>
            Lo último
            <br />
            del cine.
          </h2>
        </div>

        <p className="section-copy">
          Estrenos, noticias y todo lo que tenés que saber para estar al día
          con Cinema La Plata.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item, index) => (
          <article
            key={item.title}
            className={`news-card ${
              item.featured ? "news-card--featured" : ""
            }`}
          >
            <div className="news-image-placeholder">
              <span>
                {item.featured
                  ? "IMAGEN PRINCIPAL"
                  : `IMAGEN ${String(index + 1).padStart(2, "0")}`}
              </span>
            </div>

            <p className="news-type">{item.type}</p>

            <h3>{item.title}</h3>

            <button type="button">
              LEER MÁS
              <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
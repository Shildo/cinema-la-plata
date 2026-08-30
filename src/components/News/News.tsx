const news = [
  {
    type: "EXCLUSIVO",
    title: "La cara detrás del cine.",
    featured: true,
    URL: "https://www.youtube.com/watch?v=50d_K7kV8u8",
    imageURL: "/backgrounds/marcelo-harari.jpeg",
  },
  {
    type: "NOVEDADES",
    title: "Conocé al señor de los cines.",
    featured: false,
    URL: "https://www.0221.com.ar/la-plata/el-senor-los-cines-n132166",
    imageURL: "/backgrounds/el-señor-de-los-cines.jpeg",
  },
  {
    type: "EXPERIENCIAS",
    title: "Una experiencia de otra galaxia.",
    featured: false,
    URL: "https://www.0221.com.ar/que-hago/llega-la-plata-otra-galaxia-el-evento-inspirado-star-wars-shows-y-experiencias-inmersivas-n127954",
    imageURL: "/backgrounds/experience.webp",
  },
];

export default function News() {
  return (
    <section className="news-section" id="novedades">
      <div className="section-row">
        <div className="section-heading">
          <p className="news-eyebrow eyebrow">NOVEDADES</p>

          <h2>
            Lo último del cine.
          </h2>
          
          <p className="section-copy">
            Estrenos, noticias y todo lo que tenés que saber para estar al día
            con Cinema La Plata.
          </p>
        </div>
      </div>

      <div className="news-grid">
        {news.map((item, index) => (
          <article
            key={index}
            className={`news-card ${
              item.featured ? "news-card--featured" : ""
            }`}
          >
            <div className="news-image-placeholder">
              <a href={item.URL} target="_blank" rel="noopener noreferrer">
                <img src={item.imageURL} alt={item.title} />
              </a>
            </div>

            <p className="news-type">{item.type}</p>

            <h3>{item.title}</h3>
            <a
              href={item.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-button"
            >
              LEER MÁS
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
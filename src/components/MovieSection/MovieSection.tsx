const movies = [
  {
    title: "Spider-Man",
    meta: "2D · ACCIÓN",
	img: "aficheSpiderman.jpeg"
  },
  {
    title: "Próximo estreno",
    meta: "2D · AVENTURA",
	img: "aficheSoloPorUnaNoche.jpeg"
  },
  {
    title: "En cartelera",
    meta: "2D · DRAMA",
	img: "aficheMinions.jpeg"
  },
  {
    title: "Próximamente",
    meta: "2D · COMEDIA",
	img: "aficheNarciso.jpeg"
},
  {
    title: "Estreno",
    meta: "2D · THRILLER",
	img: "aficheOdisea.jpeg"
  },
];

export default function MovieSection() {
  return (
    <section className="movie-section visual-cut-section" id="peliculas">
      <div className="section-row">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            EN CARTELERA
          </p>

          <h2>
            Películas que
            <br />
            merecen pantalla grande.
          </h2>

          <p className="section-copy">
            Descubrí los títulos que están pasando por nuestros complejos y
            encontrá tu próxima película favorita.
          </p>
        </div>

        <a href="#cartelera" className="arrow-link">
          Ver cartelera
          <span>→</span>
        </a>
      </div>

      <div className="poster-rail">
        {movies.map((movie, index) => (
          <article className="poster-card" key={movie.title}>
            <div className="image-slot poster-slot">
              <img src={movie.img} alt={movie.title} />
              <div className="slot-center">
                <strong>{movie.title}</strong>
                <small>{movie.meta}</small>
              </div>
            </div>

            <div className="poster-card-footer">
              <span>{movie.meta}</span>

              <button type="button" aria-label={`Ver ${movie.title}`}>
                →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
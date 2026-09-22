"use client";

const movies = [
  {
    key: 0,
    title: "Spider-Man",
    status: "Estreno",
    meta: "ACCIÓN / AVENTURA",
    img: "/peliculas/aficheSpiderman.jpeg",
    url: "/pelicula/spiderman",
  },
  {
    key: 1,
    title: "Minions",
    status: "En cartelera",
    meta: "COMEDIA / INFANTIL",
    img: "/peliculas/aficheMinions.jpeg",
    url: "/pelicula/minions",
  },
  {
    key: 2,
    title: "Solo por una noche",
    status: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheSoloPorUnaNoche.jpeg",
    url: "/pelicula/solo-por-una-noche",
  },
  {
    key: 3,
    title: "Narciso",
    status: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheNarciso.jpeg",
    url: "/pelicula/narciso",
  },
  {
    key: 4,
    title: "Odisea",
    status: "En cartelera",
    meta: "ACCIÓN / FANTASÍA",
    img: "/peliculas/aficheOdisea.jpeg",
    url: "/pelicula/odisea",
  },
  {
    key: 5,
    title: "Toy Story 5",
    status: "En cartelera",
    meta: "INFANTIL / AVENTURA",
    img: "/peliculas/aficheToystory5.jpeg",
    url: "/pelicula/toystory5",
  },
  {
    key: 6,
    title: "El diablo viste a la moda 2",
    status: "En cartelera",
    meta: "COMEDIA",
    img: "/peliculas/aficheDiabloVisteModa2.jpg",
    url: "/pelicula/diablo-viste-a-la-moda-2",
  },
  {
    key: 7,
    title: "Michael",
    status: "En cartelera",
    meta: "COMEDIA / BIOGRAFÍA",
    img: "/peliculas/aficheMichael.jpg",
    url: "/pelicula/michael",
  },
  {
    key: 8,
    title: "Scary Movie: Terrorificamente incorrecta",
    status: "En cartelera",
    meta: "COMEDIA / TERROR",
    img: "/peliculas/aficheScaryMovie.jpg",
    url: "/pelicula/scary-movie-terrorificamente-incorrecta",
  }
];

export default function MovieSection() {
  return (
    <section
      className="movie-section visual-cut-section"
      id="peliculas"
    >
      <div className="section-row">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            EN CARTELERA
          </p>

          <h2>
            Descubrí tu próxima historia.
          </h2>

          <p className="section-copy">
            Seleccioná una película y prepará tu próxima función.
          </p>
        </div>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <a
            href={movie.url}
            className="movie-card-link"
            key={movie.key}
          >
            <article className="movie-card">

              <div className="movie-card__image">
                <img
                  src={movie.img}
                  alt={`Afiche de ${movie.title}`}
                />
              </div>

              <div className="movie-card__info">
                <span className="movie-card__meta">
                  {movie.meta} -{" "}
                  <span className="movie-card__status">
                     {movie.status}
                  </span>
                </span>

                <h3>{movie.title}</h3>

                
              </div>

            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
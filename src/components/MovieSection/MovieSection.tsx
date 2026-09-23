"use client";

const movies = [
  {
    key: 0,
    title: "Spider-Man",
    status: "Estreno",
    meta: "ACCIÓN / AVENTURA",
    img: "/peliculas/aficheSpiderman.jpeg",
    url: "/pelicula/spiderman",
    restriction: "/restrictions/supervision-parental.PNG",
  },
  {
    key: 1,
    title: "Minions",
    status: "En cartelera",
    meta: "COMEDIA / INFANTIL",
    img: "/peliculas/aficheMinions.jpeg",
    url: "/pelicula/minions",
    restriction: "/restrictions/general.PNG",
  },
  {
    key: 2,
    title: "Sólo por una noche",
    status: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheSoloPorUnaNoche.jpeg",
    url: "/pelicula/solo-por-una-noche",
    restriction: "/restrictions/r-13.PNG",
  },
  {
    key: 3,
    title: "Yo, Narciso",
    status: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheNarciso.jpeg",
    url: "/pelicula/narciso",
    restriction: "/restrictions/general.PNG",
  },
  {
    key: 4,
    title: "La Odisea",
    status: "En cartelera",
    meta: "ACCIÓN / FANTASÍA",
    img: "/peliculas/aficheOdisea.jpeg",
    url: "/pelicula/odisea",
    restriction: "/restrictions/supervision-parental.PNG",
  },
  {
    key: 5,
    title: "Toy Story 5",
    status: "En cartelera",
    meta: "INFANTIL / AVENTURA",
    img: "/peliculas/aficheToystory5.jpeg",
    url: "/pelicula/toystory5",
    restriction: "/restrictions/general.PNG",
  },
  {
    key: 6,
    title: "El diablo viste a la moda 2",
    status: "En cartelera",
    meta: "COMEDIA",
    img: "/peliculas/aficheDiabloVisteModa2.jpg",
    url: "/pelicula/diablo-viste-a-la-moda-2",
    restriction: "/restrictions/r-13.PNG",
  },
  {
    key: 7,
    title: "Michael",
    status: "En cartelera",
    meta: "COMEDIA / BIOGRAFÍA",
    img: "/peliculas/aficheMichael.jpg",
    url: "/pelicula/michael",
    restriction: "/restrictions/r-13.PNG",
  },
  {
    key: 8,
    title: "Scary Movie: Terroríficamente incorrecta",
    status: "En cartelera",
    meta: "COMEDIA / TERROR",
    img: "/peliculas/aficheScaryMovie.jpg",
    url: "/pelicula/scary-movie-terrorificamente-incorrecta",
    restriction: "/restrictions/r-17.PNG",
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
                  className="movie-card__poster"
                  src={movie.img}
                  alt={`Afiche de ${movie.title}`}
                />

                <img
                  className="movie-card__restriction"
                  src={movie.restriction}
                  alt={`Clasificación de edad para ${movie.title}`}
                  loading="lazy"
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
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const movies = [
  {
    key: 0,
    title: "Estreno",
    meta: "ACCIÓN / AVENTURA",
    img: "/peliculas/aficheSpiderman.jpeg",
    url: "/pelicula/spiderman",
  },
  {
    key: 1,
    title: "En cartelera",
    meta: "COMEDIA / INFANTIL",
    img: "/peliculas/aficheMinions.jpeg",
    url: "/pelicula/minions",
  },
  {
    key: 2,
    title: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheSoloPorUnaNoche.jpeg",
    url: "/pelicula/solo-por-una-noche",
  },
  {
    key: 3,
    title: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "/peliculas/aficheNarciso.jpeg",
    url: "/pelicula/narciso",
  },
  {
    key: 4,
    title: "En cartelera",
    meta: "ACCIÓN / FANTASÍA",
    img: "/peliculas/aficheOdisea.jpeg",
    url: "/pelicula/odisea",
  },
  {
    key: 5,
    title: "En cartelera",
    meta: "INFANTIL / AVENTURA",
    img: "/peliculas/aficheToystory5.jpeg",
    url: "/pelicula/toystory5"
  },
];

export default function MovieSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

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
            <br />
          </h2>

          <p className="section-copy">
            Seleccioná un estreno y prepará tu próxima función.
          </p>
        </div>
      </div>

      <div className="poster-carousel">

        <button
          type="button"
          className="poster-carousel__arrow poster-carousel__arrow--left"
          onClick={scrollPrev}
          aria-label="Películas anteriores"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="poster-viewport"
          ref={emblaRef}
        >
          <div className="poster-rail">
            {movies.map((movie) => (
              <a
                href={movie.url}
                className="poster-card-link"
                key={movie.key}
              >
                <article className="poster-card">

                  <div className="image-slot poster-slot">
                    <img
                      src={movie.img}
                      alt={movie.title}
                    />

                    <div className="slot-center">
                      <strong>{movie.title}</strong>
                    </div>
                  </div>

                  <div className="poster-card-footer">
                    <span>{movie.meta}</span>
                  </div>

                </article>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="poster-carousel__arrow poster-carousel__arrow--right"
          onClick={scrollNext}
          aria-label="Siguientes películas"
        >
          <ChevronRight size={24} />
        </button>

      </div>
    </section>
  );
}
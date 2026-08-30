"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const movies = [
  {
    key: 0,
    title: "Estreno",
    meta: "ACCIÓN / AVENTURA",
    img: "aficheSpiderman.jpeg",
  },
  {
    key: 1,
    title: "En cartelera",
    meta: "COMEDIA / INFANTIL",
    img: "aficheMinions.jpeg",
  },
  {
    key: 2,
    title: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "aficheSoloPorUnaNoche.jpeg",
  },
  {
    key: 3,
    title: "Próximamente",
    meta: "COMEDIA / ROMANCE",
    img: "aficheNarciso.jpeg",
  },
  {
    key: 4,
    title: "En cartelera",
    meta: "ACCIÓN / FANTASÍA",
    img: "aficheOdisea.jpeg",
  },
];

export default function MovieSection() {
  const posterRailRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!posterRailRef.current) return;

    const amount = posterRailRef.current.clientWidth * 0.7;

    posterRailRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="movie-section visual-cut-section" id="peliculas">
      <div className="section-row">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            EN CARTELERA
          </p>

          <h2>
            Descubrí tu proxima historia
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
          onClick={() => scrollCarousel("left")}
          aria-label="Películas anteriores"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="poster-rail" ref={posterRailRef}>
          {movies.map((movie) => (
            <article className="poster-card" key={movie.key}>
              <div className="image-slot poster-slot">
                <img src={movie.img} alt={movie.title} />

                <div className="slot-center">
                  <strong>{movie.title}</strong>
                </div>
              </div>

              <div className="poster-card-footer">
                <span>{movie.meta}</span>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="poster-carousel__arrow poster-carousel__arrow--right"
          onClick={() => scrollCarousel("right")}
          aria-label="Siguientes películas"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
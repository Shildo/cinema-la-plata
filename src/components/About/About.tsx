"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos: {
  src: string;
  alt: string;
  zoom?: number;
  origin?: string;
}[] = [
  {
    src: "/backgrounds/family-ocho.PNG",
    alt: "multiplex ocho 123",
    zoom: 1.14,
    origin: "top left",
  },
  {
    src: "/backgrounds/3Dglasses.png",
    alt: "Familia disfrutando una experiencia en Cinema La Plata",
  },
]

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const target = (index + photos.length) % photos.length;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left: target * track.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section id="nosotros" className="about-section">
      <div className="about-image">
        <div
          className="about-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Fotos de Cinema La Plata"
        >
          <div
            className="about-carousel__track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {photos.map((photo, index) => (
              <div
                className="about-carousel__slide"
                key={photo.src}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`Foto ${index + 1} de ${photos.length}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                  style={{
                    transform: photo.zoom ? `scale(${photo.zoom})` : undefined,
                    transformOrigin: photo.origin ?? "center",
                  }}
                />
              </div>
            ))}
          </div>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="about-carousel__arrow about-carousel__arrow--prev"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Foto anterior"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                className="about-carousel__arrow about-carousel__arrow--next"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Foto siguiente"
              >
                <ChevronRight size={22} />
              </button>

              <div
                className="about-carousel__dots"
                role="group"
                aria-label="Seleccionar foto"
              >
                {photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    className={`about-carousel__dot ${
                      index === activeIndex ? "about-carousel__dot--active" : ""
                    }`}
                    onClick={() => goTo(index)}
                    aria-label={`Ver foto ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="about-copy">
        <p className="about-eyebrow">NOSOTROS</p>

        <h2>
          El cine que siempre
          <br />
          te acompaña
        </h2>

        <p>
          En Cinema La Plata llevamos décadas acompañando a la ciudad y siendo parte indispensable del ritual de ir al cine. Nacimos con la vocación de reunir a las personas frente a la pantalla grande y, a lo largo de los años, nos hemos transformado para ofrecer una experiencia cinematográfica moderna, diversa e inmersiva. Somos más que un espacio de proyección: somos un punto de encuentro donde convergen historias de todo el mundo, la emoción del entretenimiento de vanguardia y el sentido de comunidad que hace única a La Plata.
        </p>
      </div>
    </section>
  );
}
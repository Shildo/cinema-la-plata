"use client";

import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { sites } from "../../../app/data/site";
import styles from "./TechnologyCarousel.module.css";

export default function TechnologyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const site = sites[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + sites.length) % sites.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % sites.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined) return;
    const distance = endX - startX;
    if (Math.abs(distance) < 48) return;

    if (distance < 0) showNext();
    else showPrevious();
  };

  return (
    <section className={styles.carousel} aria-label="Tecnologías por complejo">
      <div
        className={styles.slide}
        key={site.number}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-live="polite"
      >
        <div className={styles.photoPanel}>
          <img src={site.interiorPhotoURL} alt={`Interior de ${site.name}`} />
          <span className={styles.slideCount}>
            {String(activeIndex + 1).padStart(2, "0")}
            <i> / {String(sites.length).padStart(2, "0")}</i>
          </span>
          <button
            className={`${styles.arrow} ${styles.arrowPrevious}`}
            type="button"
            onClick={showPrevious}
            aria-label="Ver complejo anterior"
          >
            <ChevronLeft size={23} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            type="button"
            onClick={showNext}
            aria-label="Ver complejo siguiente"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        <div className={styles.detailsPanel}>
          <p className={styles.eyebrow}>CINEMA LA PLATA · {String(activeIndex + 1).padStart(2, "0")}</p>
          <div className={styles.siteIdentity}>
            <img className={styles.siteLogo} src={site.logoURL} alt="" aria-hidden="true" />
            <h2 className={styles.visuallyHidden}>{site.name}</h2>
          </div>

          <p className={styles.location}>
            <MapPin size={16} aria-hidden="true" /> {site.location}
          </p>

          <div className={styles.roomBlock}>
            <span>SALAS</span>
            <strong>{site.rooms}</strong>
          </div>

          <p className={styles.technologyDescription}>{site.technologyDescription}</p>

          <div className={styles.highlightsBlock}>
            <span className={styles.highlightsLabel}>LO QUE LO DISTINGUE</span>
            <ul className={styles.highlights}>
              {site.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formats} aria-label="Formatos disponibles">
            {site.formats.map((format) => <span key={format}>{format}</span>)}
          </div>

        </div>
      </div>

      <div className={styles.carouselControls}>
        <div className={styles.dots} role="group" aria-label="Seleccionar complejo">
          {sites.map((item, index) => (
            <button
              key={item.number}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="hero">
      <div className="hero__background-placeholder">
        <video
          className="hero__video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster="/hero.png"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow">
          LA CARTELERA DE LA PLATA
        </div>

        <h1>
          La pantalla <span>grande</span>
          <br />
          empieza acá
        </h1>

        <div className="hero__actions">
          <a
            href="https://www.youtube.com/watch?v=d9MyW72ELq0"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--secondary"
          >
            Ver tráiler
          </a>
        </div>

        <button
          type="button"
          className="hero__sound-toggle"
          onClick={() => setIsMuted((muted) => !muted)}
          aria-label={isMuted ? "Activar sonido del video" : "Silenciar video"}
          aria-pressed={!isMuted}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playWhenVisible = () => {
      if (document.visibilityState !== "visible") return;

      const bounds = video.getBoundingClientRect();
      const isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      if (isVisible) {
        void video.play().catch(() => {
          // El navegador puede bloquear autoplay por sus políticas o ajustes de ahorro.
        });
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        playWhenVisible();
      } else {
        video.pause();
      }
    }, { threshold: 0.15 });

    observer.observe(video);
    video.addEventListener("canplay", playWhenVisible);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", playWhenVisible);
    };
  }, []);

  const handleSoundToggle = () => {
    const nextMutedState = !isMuted;
    setIsMuted(nextMutedState);

    const video = videoRef.current;
    if (!video) return;

    video.muted = nextMutedState;
    void video.play().catch(() => {
      // Si el navegador bloquea la reproducción, el control permite volver a intentarlo.
    });
  };

  return (
    <section className="hero">
      <div className="hero__background-placeholder">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          controls={false}
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
          onClick={handleSoundToggle}
          aria-label={isMuted ? "Activar sonido del video" : "Silenciar video"}
          aria-pressed={!isMuted}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </section>
  );
}

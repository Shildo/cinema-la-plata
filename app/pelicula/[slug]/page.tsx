import { notFound } from "next/navigation";
import { getMovie, movies } from "../../data/movie";
import { sites } from "../../data/site";
import styles from "./page.module.css";

import MovieBooking from "@/components/MovieBooking/MovieBooking";

function getYouTubeEmbedUrl(trailerUrl: string) {
  try {
    const url = new URL(trailerUrl);
    const host = url.hostname.toLowerCase();
    let videoId: string | null = null;

    if (host === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (host === "youtube.com" || host === "www.youtube.com") {
      videoId = url.searchParams.get("v");
      if (!videoId) {
        videoId = url.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/)?.[1] ?? null;
      }
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`
      : null;
  } catch {
    return null;
  }
}

type MoviePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return movies.map((movie) => ({
    slug: movie.slug,
  }));
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = await params;

  const movie = getMovie(slug);

  if (!movie) {
    notFound();
  }

  const trailerEmbedUrl = getYouTubeEmbedUrl(movie.trailer);

  return (
    <main className={styles["movie-page"]}>
      <section className={styles["movie-detail"]}>
        <div className={styles["movie-detail__poster"]}>
          <img src={movie.image} alt={movie.title} />

          {movie.badge && (
            <img
              src={movie.badge}
              alt="Cine brasileño"
              className={styles["movie-detail__badge"]}
            />
          )}

          <img
            src={movie.restriction}
            alt={`Clasificación de edad para ${movie.title}`}
            className={styles["movie-detail__restriction"]}
          />
        </div>

        <div className={styles["movie-detail__content"]}>
          <p className={styles["eyebrow"]}>
            {movie.meta}
          </p>

          <h1>{movie.title}</h1>

          <div className={styles["movie-detail__meta"]}>
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <div className={styles["movie-detail__languages"]} aria-label="Idiomas disponibles">
            <span>IDIOMAS</span>
            {movie.languages.map((language) => (
              <span className={styles["movie-detail__language"]} key={language}>
                {language === "castellano" ? "Castellano" : "Inglés subtitulado"}
              </span>
            ))}
          </div>

          <p className={styles["movie-detail__synopsis"]}>
            {movie.synopsis}
          </p>

          <div className={styles["movie-trailer"]}>
            <h2>Tráiler</h2>
            {trailerEmbedUrl ? (
              <div className={styles["movie-trailer__frame"]}>
                <iframe
                  src={trailerEmbedUrl}
                  title={`Tráiler de ${movie.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : (
              <a
                className={styles["movie-trailer__fallback"]}
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver tráiler en YouTube
              </a>
            )}
            {trailerEmbedUrl && (
              <a
                className={styles["movie-trailer__fallback"]}
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
              >
                ¿No carga el reproductor? Abrilo en YouTube.
              </a>
            )}
          </div>
        </div>
      </section>

      <section className={styles["movie-schedule"]}>
        <div className={styles["section-heading"]}>
          <p className={styles["eyebrow"]}>
            FUNCIONES
          </p>

          <h2>Elegí cómo querés verla.</h2>

          <p className={styles["section-copy"]}>
            Seleccioná tu sede, formato y función para continuar con la
            compra de tus entradas.
          </p>
        </div>

	  	<MovieBooking sites={sites} movie={movie}/>
      </section>

    </main>
  );
}

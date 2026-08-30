import { notFound } from "next/navigation";
import { getMovie, movies } from "../../data/movie";
import { sites } from "../../data/site";
import styles from "./page.module.css";

import MovieBooking from "@/components/MovieBooking/MovieBooking";

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

  return (
    <main className={styles["movie-page"]}>
      <section className={styles["movie-detail"]}>
        <div className={styles["movie-detail__poster"]}>
          <img src={movie.image} alt={movie.title} />
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

          <p className={styles["movie-detail__synopsis"]}>
            {movie.synopsis}
          </p>

          <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="button button--secondary">
            Ver tráiler
          </a>
        </div>
      </section>

      <section className={styles["movie-schedule"]}>
        <div className={styles["section-heading"]}>
          <p className={styles["eyebrow"]}>
            FUNCIONES
          </p>

          <h2>Elegí cuándo querés verla.</h2>

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
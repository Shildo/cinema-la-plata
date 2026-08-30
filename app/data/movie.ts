export type Movie = {
  slug: string;
  title: string;
  meta: string;
  synopsis: string;
  image: string;
  trailer: string;
  duration: string;
  genre: string;
  formats: string[];
};

export const movies: Movie[] = [
  {
    slug: "spiderman",
    title: "Spider-Man",
    meta: "ACCIÓN / AVENTURA",
    synopsis:
      "Peter Parker deberá enfrentarse a una nueva amenaza mientras intenta equilibrar su vida cotidiana con las responsabilidades de ser Spider-Man.",
    image: "/peliculas/aficheSpiderman.jpeg",
    trailer: "https://www.youtube.com/watch?v=62bIsvRcPv0",
    duration: "2h 25min",
    genre: "Acción",
    formats: ["HD", "3D"],
  },

  {
    slug: "minions",
    title: "Minions y Monstruos",
    meta: "COMEDIA / INFANTIL",
    synopsis:
      "Una nueva aventura llena de humor y emoción que llevará a nuestros protagonistas a vivir una historia inolvidable.",
    image: "/peliculas/aficheMinions.jpeg",
    trailer: "https://www.youtube.com/watch?v=KG9wqUZYrMo",
    duration: "1h 30min",
    genre: "Animación",
    formats: ["HD", "ATMOS"],
  },

  {
    slug: "solo-por-una-noche",
    title: "Solo por una noche",
    meta: "COMEDIA / ROMANCE",
    synopsis:
      "Una aventura inesperada que comienza durante una noche que ninguno de sus protagonistas olvidará.",
    image: "/peliculas/aficheSoloPorUnaNoche.jpeg",
    trailer: "https://www.youtube.com/watch?v=VA3g2RKt58w",
    duration: "1h 42min",
    genre: "Aventura",
    formats: ["HD", "3D", "4D"],
  },

  {
    slug: "narciso",
    title: "Yo Narciso",
    meta: "COMEDIA / ROMANCE",
    synopsis:
      "Una historia de humor, encuentros inesperados y situaciones que pondrán a prueba a sus protagonistas.",
    image: "/peliculas/aficheNarciso.jpeg",
    trailer: "https://www.youtube.com/watch?v=tv03AgZUBPY",
    duration: "1h 35min",
    genre: "Comedia",
    formats: ["HD", "3D"],
  },

  {
    slug: "odisea",
    title: "Odisea",
    meta: "ACCIÓN / FANTASÍA",
    synopsis:
      "Un thriller que llevará a sus protagonistas al límite mientras intentan descubrir qué se esconde detrás de una serie de acontecimientos inexplicables.",
    image: "/peliculas/aficheOdisea.jpeg",
    trailer: "https://www.youtube.com/watch?v=f_bKjZeJBBI",
    duration: "2h 53min",
    genre: "Thriller",
    formats: ["HD", "3D", "4D", "ATMOS"],
  },
  {
    slug: "toystory5",
    title: "Toy Story 5",
    meta: "INFANTIL / AVENTURA",
    synopsis:
      "Woody, Buzz y Jessie regresan para una nueva aventura cuando una inesperada amenaza pone a prueba su amistad y los obliga a enfrentarse a nuevos desafíos.",
    image: "/peliculas/aficheToystory5.jpeg",
    trailer: "https://www.youtube.com/watch?v=s_qpMMkvHYE",
    duration: "1h 42min",
    genre: "Animación",
    formats: ["HD", "3D", "ATMOS"],
  },
];

export function getMovie(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}
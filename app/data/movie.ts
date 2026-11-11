import { SITE_NUMBERS, type SiteNumber } from "./site";

export type MovieLanguage = "castellano" | "subtitulada";

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
  languages: MovieLanguage[];
  restriction: string;
  badge?: string;
  siteNumbers?: SiteNumber[];
};

export const presaleMovies: Movie[] = [
  {
    slug: "queres-ser-mi-hijo",
    title: "¿Queres ser mi hijo?",
    meta: "COMEDIA / DRAMA",
    synopsis: "Lucía tiene 40 años y su vida cambia tras descubrir una infidelidad. Para conseguir un empleo donde le piden que sea madre, le propone a su joven vecino Javier que finja ser su hijo a cambio de dejarlo hacer fiestas.",
    image: "/peliculas/aficheQueresSerMiHijo.jpg",
    trailer: "https://www.youtube.com/watch?v=AQdSYSSypFQ",
    duration: "1h 38min",
    genre: "Comedia Drama",
    formats: ["HD"],
    languages: ["castellano"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "dune-3",
    title: "Dune 3",
    meta: "ACCIÓN / AVENTURA",
    synopsis: "El emperador Pablo Atreides se enfrenta a las consecuencias de su ascenso al poder, ya que las tramas políticas y una guerra santa en toda la galaxia ponen en peligro el futuro que solo él puede ver.",
    image: "/peliculas/aficheDune3.jpg",
    trailer: "https://www.youtube.com/watch?v=9iuVf3Ppb7U",
    duration: "2h 30min",
    genre: "Acción Aventura",
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "avengers-doomsday",
    title: "Avengers: Doomsday",
    meta: "ACCIÓN / AVENTURA",
    synopsis: "Los héroes de tres mundos diferentes deben unirse cuando se unen para enfrentar un peligro catastrófico que podría destruir todo lo que saben.",
    image: "/peliculas/aficheAvengersDoomsday.jpg",
    trailer: "https://www.youtube.com/watch?v=jyoTi0gPgNY",
    duration: "2h 45min",
    genre: "Acción Aventura",
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  }
]


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
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/supervision-parental.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha],
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
    formats: ["HD", "4D"],
    languages: ["castellano"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "solo-por-una-noche",
    title: "Sólo por una noche",
    meta: "COMEDIA / ROMANCE",
    synopsis:
      "Una aventura inesperada que comienza durante una noche que ninguno de sus protagonistas olvidará.",
    image: "/peliculas/aficheSoloPorUnaNoche.jpeg",
    trailer: "https://www.youtube.com/watch?v=VA3g2RKt58w",
    duration: "1h 42min",
    genre: "Aventura",
    formats: ["HD", "3D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.rocha],
  },
  {
    slug: "narciso",
    title: "Yo, Narciso",
    meta: "COMEDIA / ROMANCE",
    synopsis:
      "Una historia de humor, encuentros inesperados y situaciones que pondrán a prueba a sus protagonistas.",
    image: "/peliculas/aficheNarciso.jpeg",
    trailer: "https://www.youtube.com/watch?v=tv03AgZUBPY",
    duration: "1h 35min",
    genre: "Comedia",
    formats: ["HD", "3D", "4D"],
    languages: ["castellano"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.ocho, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "odisea",
    title: "La Odisea",
    meta: "ACCIÓN / FANTASÍA",
    synopsis:
      "Un thriller que llevará a sus protagonistas al límite mientras intentan descubrir qué se esconde detrás de una serie de acontecimientos inexplicables.",
    image: "/peliculas/aficheOdisea.jpeg",
    trailer: "https://www.youtube.com/watch?v=f_bKjZeJBBI",
    duration: "2h 53min",
    genre: "Thriller",
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/supervision-parental.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.paradiso, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "toy-story-5",
    title: "Toy Story 5",
    meta: "INFANTIL / AVENTURA",
    synopsis:
      "Woody, Buzz y Jessie regresan para una nueva aventura cuando una inesperada amenaza pone a prueba su amistad y los obliga a enfrentarse a nuevos desafíos.",
    image: "/peliculas/aficheToystory5.jpeg",
    trailer: "https://www.youtube.com/watch?v=s_qpMMkvHYE",
    duration: "1h 42min",
    genre: "Animación",
    formats: ["HD", "3D"],
    languages: ["castellano"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "diablo-viste-a-la-moda-2",
    title: "El diablo viste a la moda 2",
    meta: "COMEDIA",
    synopsis:
      "Sigue la lucha de Miranda Priestly contra Emily Charlton, su ex asistente convertida en ejecutiva rival, mientras compiten por los ingresos por publicidad en medio de la decadencia de los medios impresos y Miranda se acerca a la jubilación.",
    image: "/peliculas/aficheDiabloVisteModa2.jpg",
    trailer: "https://www.youtube.com/watch?v=aXdjJbVrJeg",
    duration: "2h 0min",
    genre: "Comedia",
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "michael",
    title: "Michael",
    meta: "COMEDIA / BIOGRAFÍA",
    synopsis:
      "Muestra el viaje de Michael Jackson más allá de la música, desde el descubrimiento de su extraordinario talento como líder de los Jackson Five hasta convertirse en una visionaria estrella cuya ambición creativa despertó un incansable afán por consagrarse como el mayor icono de la industria del entretenimiento.",
    image: "/peliculas/aficheMichael.jpg",
    trailer: "https://www.youtube.com/watch?v=3zOLzsbOleM",
    duration: "2h 7min",
    genre: "Documental Biográfico",
    formats: ["HD", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha],
  },
  {
    slug: "scary-movie-terrorificamente-incorrecta",
    title: "Scary Movie: Terroríficamente incorrecta",
    meta: "COMEDIA / TERROR",
    synopsis:
      "Sexta entrega de la saga de Scary Movie. Veintiséis años después de conseguir escapar de un asesino enmascarado sospechosamente familiar (Ghostface), el Core Four están de vuelta en el punto de mira del asesino y ninguna película de terror está a salvo.",
    image: "/peliculas/aficheScaryMovie.jpg",
    trailer: "https://www.youtube.com/watch?v=g9LF_YLkpF0",
    duration: "1h 36min",
    genre: "Comedia Terror",
    formats: ["HD", "3D", "4D"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-17.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.paradiso, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "playa-de-lobos",
    title: "Playa de Lobos",
    meta: "COMEDIA / THRILLER",
    synopsis:
      "Manu trabaja en un chiringuito. Klaus no suelta la última hamaca. Lo que parece un encuentro entre opuestos se vuelve sospechoso cuando Manu duda de Klaus. La tensión aumenta.",
    image: "/peliculas/afichePlayaDeLobos.jpg",
    trailer: "https://www.youtube.com/watch?v=pS_bQp0KcN4",
    duration: "1h 40min",
    genre: "Comedia Thriller",
    formats: ["HD", "3D", "ATMOS"],
    languages: ["castellano"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha],
  },
  {
    slug: "scream-7",
    title: "Scream 7",
    meta: "TERROR / THRILLER",
    synopsis:
      "Cuando un nuevo asesino Ghostface aparece en el tranquilo pueblo donde Sidney Prescott (Neve Campbell) ha construido una nueva vida, sus peores miedos se hacen realidad cuando su hija (Isabel May) se convierte en el siguiente objetivo.",
    image: "/peliculas/aficheScream7.jpg",
    trailer: "https://www.youtube.com/watch?v=WZXCpje7ZNo",
    duration: "1h 54min",
    genre: "Terror Thriller",
    formats: ["HD", "3D", "4D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "el-agente-secreto",
    title: "El Agente Secreto",
    meta: "THRILLER / POLÍTICO",
    synopsis:
      "Bajo el espectro amenazador del Brasil de 1977, conocemos a Marcelo, un hombre de unos 40 años que se ha mudado recientemente a Recife, en la costa noreste de Brasil, para escapar de un pasado violento.",
    image: "/peliculas/aficheElAgenteSecreto.jpeg",
    trailer: "https://www.youtube.com/watch?v=YxvymcujX14",
    duration: "2h 41min",
    genre: "Thriller Político",
    formats: ["HD", "ATMOS"],
    languages: ["subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
    badge: "/resources/cineBrasileñoCartel.png",
  },
  {
    slug: "zootopia-2",
    title: "Zootopia 2",
    meta: "ANIMACIÓN / COMEDIA",
    synopsis:
      "En la segunda parte de Zootopia, Judy Hopps y Nick Wilde se enfrentan a nuevos desafíos en su ciudad de animales.",
    image: "/peliculas/aficheZootopia2.jpg",
    trailer: "https://www.youtube.com/watch?v=BjkIOU5PhyQ",
    duration: "1h 48min",
    genre: "Animación",
    formats: ["HD", "3D"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: [SITE_NUMBERS.paradiso, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "proyecto-fin-del-mundo",
    title: "Proyecto Fin del Mundo",
    meta: "CIENCIA FICCIÓN / AVENTURA",
    synopsis: "El profesor de ciencias de secundaria Ryland Grace (Ryan Gosling) se despierta en una nave espacial a años luz de casa sin recordar quién es o cómo llegó allí. A medida que vuelve su memoria, comienza a destapar su misión: resolver el enigma de la misteriosa sustancia que está causando la muerte del sol. Debe recurrir a sus conocimientos científicos e ideas poco ortodoxas para salvar todo en la Tierra de la extinción... pero una amistad inesperada significa que puede que no tenga que hacerlo solo.",
    image: "/peliculas/aficheProyectoFinDelMundo.jpg",
    trailer: "https://www.youtube.com/watch?v=Z5cj7o7DA_Q",
    duration: "2h 36min",
    genre: "Ciencia Ficción",
    formats: ["HD", "3D", "ATMOS"],
    languages: ["castellano", "subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "billie-eilish-hit-me-hard-and-soft",
    title: "Billie Eilish - Hit Me Hard And Soft: El Tour",
    meta: "DOCUMENTAL / MUSICAL",
    synopsis: "Concierto de Billie Eilish en 3D, dirigido por Billie Eilish y James Cameron. Capturado durante su gira mundial con todas las entradas agotadas, ofrece una innovadora experiencia de concierto en la gran pantalla de una de las artistas más celebradas y exitosas de su generación.",
    image: "/peliculas/aficheBillieEilish.jpg",
    trailer: "https://www.youtube.com/watch?v=3pcP1wwdxfo",
    duration: "1h 55min",
    genre: "Documental Musical",
    formats: ["3D"],
    languages: ["subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.ocho, SITE_NUMBERS.rocha, SITE_NUMBERS.sanMartin],
  },
  {
    slug: "queen-budapest",
    title: "QUEEN BUDAPEST",
    meta: "DOCUMENTAL / MUSICAL",
    synopsis: "El 27 de julio de 1986, Queen dio el concierto en estadio más grande de la historia en el Népstadion de Budapest, frente a 80,000 fans eufóricos. El concierto fue parte de la famosa gira Magic Tour, que fue la última vez que la banda salió de gira con el cantante principal, Freddie Mercury. Ahora, esta película original del concierto ha sido reescaneada y remasterizada de manera espectacular en 4K, junto con una nueva y dinámica mezcla de audio, que incluye muchas de las canciones favoritas de Queen.",
    image: "/peliculas/aficheQueenBudapest.jpg",
    trailer: "https://www.youtube.com/watch?v=BMhvaYdtyss",
    duration: "1h 37min",
    genre: "Documental Musical",
    formats: ["HD", "ATMOS"],
    languages: ["subtitulada"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: [SITE_NUMBERS.city, SITE_NUMBERS.rocha],
  },
];

export function getMovie(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}

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
  restriction: string;
  badge?: string;
  siteNumbers?: string[];
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
    restriction: "/restrictions/supervision-parental.PNG",
    siteNumbers: ["01", "03", "04"],
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
    restriction: "/restrictions/general.PNG",
    siteNumbers: ["01", "02", "03", "05"],
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
    formats: ["HD", "3D", "4D"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["02", "04"],
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
    formats: ["HD", "3D"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: ["01", "03", "05"],
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
    restriction: "/restrictions/supervision-parental.PNG",
    siteNumbers: ["01", "02", "04", "05"],
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
    formats: ["HD", "3D", "ATMOS"],
    restriction: "/restrictions/general.PNG",
    siteNumbers: ["02", "03", "05"],
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
    formats: ["HD", "3D"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["01", "04", "05"],
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
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["02", "03", "04"],
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
    formats: ["HD", "3D", "ATMOS"],
    restriction: "/restrictions/r-17.PNG",
    siteNumbers: ["01", "02", "05"],
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
    formats: ["HD", "3D"],
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["02", "03", "04"],
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
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["01", "03", "04", "05"],
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
    restriction: "/restrictions/r-13.PNG",
    siteNumbers: ["02", "04", "05"],
    badge: "/resources/cineBrasileñoCartel.png",
  }
];

export function getMovie(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}
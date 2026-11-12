export const SITE_NUMBERS = {
  city: "01",
  paradiso: "02",
  ocho: "03",
  rocha: "04",
  sanMartin: "05",
} as const;

export type SiteNumber = (typeof SITE_NUMBERS)[keyof typeof SITE_NUMBERS];

export type Site = {
  number: SiteNumber;
  name: string;
  location: string;
  imgURL: string;
  rooms: string;
  locationURL: string;
  cinemaID: "rocha" | "ocho";
  interiorPhotoURL: string;
  formats: string[];
  technologyDescription: string;
  highlights: string[];
  logoURL: string;
  characteristics: string;
};

export const sites: Site[] = [
  {
    number: SITE_NUMBERS.city,
    name: "Cinema City",
    location: "Calle 50 entre 9 y 10.",
    imgURL: "/sedes/city.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/JCh4EGS9Bo3hhXwg6",
    cinemaID: "ocho",
    interiorPhotoURL: "/sedes/cityInterior.jpg",
    formats: ["HD", "3D", "4D"],
    technologyDescription: "Tres salas en distintos niveles, con opciones para elegir una función tradicional o una experiencia 4D.",
    highlights: ["Sala 4D", "Ascensor entre niveles", "Bar y patio exterior"],
    logoURL: "/sedes/citylogo.png",
    characteristics: "Cuenta con tres salas digitales y tecnología 3D, HFR 3D (High Frame Rate 3D,  tecnología de proyección que combina la tridimensionalidad con una alta velocidad de fotogramas por segundo) y 4D. Su capacidad total es de 643 espectadores, con 317 espectadores en la sala HD, 96 en la sala 4D y 230 en la sala 3D. La distribución física de este complejo ha sido prevista en tres plantas, en medio-niveles ascendentes y descendentes. En cada una de ellas se encuentra una sala. La boletería está ubicada a un lado de la entrada, en el exterior del cine. Medio nivel abajo, se sitúa la sala 1, y medio nivel arriba, se encuentran la sala 2, el acceso a la sala 3 y el Candy Bar.",
  },
  {
    number: SITE_NUMBERS.paradiso,
    name: "Cinema Paradiso",
    location: "Calle 46 entre 10 y 11.",
    imgURL: "/sedes/paradiso.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/9pcaCXtL7LStEbJu9",
    cinemaID: "rocha",
    interiorPhotoURL: "/sedes/paradisoInterior.jpg",
    formats: ["HD", "3D"],
    technologyDescription: "Cuatro salas digitales en una sola planta, con espacios accesibles y un lobby para esperar antes de la función.",
    highlights: ["Circulación accesible", "Cafetería", "Proyección 3D"],
    logoURL: "/sedes/paradisologo.png",
    characteristics: "El complejo cuenta con cuatro salas digitales, con una capacidad total de 700 espectadores, distribuidos equitativamente en 175 butacas por sala. La distribución se desarrolla en un único nivel, sin diferencias de altura, lo que facilita la circulación y el acceso a todos los espacios públicos. Sobre el frente del edificio se encuentra el lobby o hall de acceso, que funciona como espacio de recepción y antesala a las salas. Este sector incorpora un café con doble acceso: desde el interior del complejo y desde la vía pública. En cuanto a tecnología, dispone de proyección digital 3D y HFR 3D (High Frame Rate), que permite obtener imágenes tridimensionales con mayor fluidez."
  },
  {
    number: SITE_NUMBERS.ocho,
    name: "Cinema Ocho",
    location: "Calle 8 entre 51 y 53.",
    imgURL: "/sedes/ocho.jpeg",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/YN8YFMhX47n3wSyD6",
    cinemaID: "ocho",
    interiorPhotoURL: "/sedes/ochoInterior.jpg",
    formats: ["HD", "3D"],
    technologyDescription: "Tres salas amplias con proyección digital, butacas ergonómicas y un espacio accesible en la sala 1.",
    highlights: ["Salas 1 y 2 en 3D", "Acceso para silla de ruedas", "Butacas ergonómicas"],
    logoURL: "/sedes/ochologo.png",
    characteristics: "El complejo cuenta con tres salas digitales, con una capacidad total de 1.185 espectadores: 670 en la sala 1, 400 en la sala 2 y 115 en la sala 3. La sala 1 se ubica en planta baja, mientras que las salas 2 y 3 se encuentran en el primer piso. El hall central concentra el acceso a la sala 1, la boletería y el Candy Bar. Desde allí, dos amplias escaleras conducen a la planta superior, que cuenta además con un balcón hacia el hall principal. Las salas 1 y 2 disponen de tecnología de proyección digital 3D mediante proyectores Christie DLP. El complejo también incorpora tecnología HFR 3D (High Frame Rate), que ofrece una mayor velocidad de fotogramas para lograr imágenes tridimensionales más fluidas."
  },
  {
    number: SITE_NUMBERS.rocha,
    name: "Cinema Rocha",
    location: "Calle 49 entre 7 y 8.",
    imgURL: "/sedes/rocha.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/AMKFx3ypYin7Cx517",
    cinemaID: "rocha",
    interiorPhotoURL: "/sedes/rochaInterior.jpg",
    formats: ["HD", "3D", "ATMOS"],
    technologyDescription: "Un cine histórico renovado, con tres salas y doble proyección digital en la sala principal.",
    highlights: ["Doble proyección", "Sistema 3D", "Candy Bar Popus"],
    logoURL: "/sedes/rochalogo.png",
    characteristics: "El complejo cuenta con tres salas de exhibición ubicadas en planta alta, con capacidades aproximadas de 540, 180 y 150 espectadores. La sala principal dispone de butacas con disposición FULL STADIUM, que garantiza una óptima visualización desde cualquier ubicación. El ingreso se realiza a través de la Galería Rocha, donde se encuentra la boletería digital. El complejo también cuenta con un amplio Candy Bar Popus, ubicado en el entrepiso, y espacios de circulación, espera y acceso a las salas. Las tres salas están equipadas con tecnología de proyección digital Christie y sonido envolvente DOLBY Digital. La sala principal incorpora un sistema Dual Projector, con doble proyección digital, pantalla plateada y tecnología 3D polarizada, que permite una experiencia de imagen de alta calidad."
  },
  {
    number: SITE_NUMBERS.sanMartin,
    name: "Cinema San Martín",
    location: "Avenida 7 entre 50 y 51.",
    imgURL: "/sedes/san-martin.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/LrjGXcBWd9sDJcMn8",
    cinemaID: "ocho",
    interiorPhotoURL: "/sedes/sanMartinInterior.jpg",
    formats: ["HD", "3D"],
    technologyDescription: "Cuatro salas con disposición tipo stadium, dentro de la galería comercial de avenida 7.",
    highlights: ["Dos salas 3D", "Disposición stadium", "Acceso desde la galería"],
    logoURL: "/sedes/san-martinlogo.png",
    characteristics: "El complejo cuenta con cuatro salas digitales, con una capacidad total de 1.120 espectadores. El acceso principal se encuentra dentro de la Galería Cinema, sobre la avenida 7 entre las calles 50 y 51. La boletería está ubicada en planta baja, mientras que las cuatro salas se distribuyen en el primer piso, al que se accede mediante dos ingresos que conducen al hall central. Desde allí, distintos pasillos permiten acceder a cada sala. También cuenta con un acceso secundario utilizado como salida ocasional o de emergencia. Dos de las cuatro salas disponen de tecnología de proyección digital 3D mediante proyectores Christie DLP, mientras que las restantes cuentan con equipos de proyección digital computarizados. Todas poseen sonido de alta tecnología, tratamiento acústico y disposición FULL STADIUM, que favorece la visualización desde distintos ángulos."
  },
];

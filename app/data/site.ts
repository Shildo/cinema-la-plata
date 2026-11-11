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
  },
];

export type Site = {
  number: string;
  name: string;
  location: string;
  imgURL: string;
  rooms: string;
  locationURL: string;
};

export const sites: Site[] = [
  {
    number: "01",
    name: "Cinema City",
    location: "Calle 50 entre 9 y 10.",
    imgURL: "/sedes/city.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/JCh4EGS9Bo3hhXwg6",
  },
  {
    number: "02",
    name: "Cinema Paradiso",
    location: "Calle 46 entre 10 y 11.",
    imgURL: "/sedes/paradiso.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/9pcaCXtL7LStEbJu9",
  },
  {
    number: "03",
    name: "Cinema Ocho",
    location: "Calle 8 entre 51 y 53.",
    imgURL: "/sedes/ocho.jpeg",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/YN8YFMhX47n3wSyD6",
  },
  {
    number: "04",
    name: "Cinema Rocha",
    location: "Calle 49 entre 7 y 8.",
    imgURL: "/sedes/rocha.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/AMKFx3ypYin7Cx517",
  },
  {
    number: "05",
    name: "Cinema San Martín",
    location: "Avenida 7 entre 50 y 51.",
    imgURL: "/sedes/san-martin.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/LrjGXcBWd9sDJcMn8",
  },
];
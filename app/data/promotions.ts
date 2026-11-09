export type Promotion = {
  id: string;
  badge: string;
  title: string;
  schedule?: string;
  description: string;
  terms?: string[];
  contactEmail?: string;
  contactSubject?: string;
};

export const PROMOTIONS: Promotion[] = [
  {
    id: "santander-2x1",
    badge: "2 × 1",
    title: "2 x 1 con Santander",
    schedule: "Jueves a domingo",
    description:
      "Durante la compra en el portal, seleccioná 2x1 Santander al elegir el tipo de entrada. Luego ingresá los datos de tu tarjeta Banco Santander al momento del pago.",
    terms: [
      "Beneficio aplicado sobre el valor de la entrada general.",
      "Válido una vez por tarjeta. Máximo 2 entradas por persona.",
      "Válido para funciones HD y 3D.",
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "cuspide-2x1",
    badge: "2 × 1",
    title: "2 x 1 con Cúspide",
    schedule: "Jueves a domingo",
    description:
      "Presentando en boletería el ticket de compra de Cúspide (calle 8 entre 47 y 48, La Plata) podés adquirir dos entradas por el precio de una entrada general.",
    terms: [
      "Beneficio aplicado sobre el valor de la entrada general.",
      "Válido para funciones HD y 3D.",
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "galicia-entradas",
    badge: "50% REINTEGRO",
    title: "50% de reintegro en entradas · Banco Galicia",
    description:
      "Las entradas adquiridas con tarjetas de Banco Galicia, tanto online como en boleterías, tienen un 50% de reintegro, con un tope de $15.000 mensuales por titular.",
    terms: [
      "Tarjetas habilitadas: Visa Débito, Visa Crédito y Mastercard Crédito.",
      "Válido para pagos con tarjeta física y pagos sin contacto.",
      "Consultar vigencia.",
    ],
  },
  {
    id: "galicia-candy-bar",
    badge: "25% REINTEGRO",
    title: "25% de reintegro en Candy Bar · Banco Galicia",
    description:
      "Las compras de productos en nuestro Candy Bar con tarjetas de Banco Galicia tienen un 25% de reintegro, con un tope de $10.000 mensuales por titular.",
    terms: [
      "Tarjetas habilitadas: Visa Débito, Visa Crédito y Mastercard Crédito.",
      "Válido para pagos con tarjeta física y pagos sin contacto.",
      "Consultar vigencia.",
    ],
  },
  {
    id: "mccombo-2x1",
    badge: "2 × 1",
    title: "2 x 1 con la compra de un McCombo",
    schedule: "Jueves a domingo",
    description:
      "Presentando en boletería el ticket correspondiente a la compra de un McCombo, podés obtener dos entradas al precio de una entrada general.",
    terms: [
      "Válido para funciones HD, 3D y ATMOS.",
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "diario-el-dia-hd",
    badge: "TARIFA ESPECIAL",
    title: "Diario El Día · HD",
    schedule: "Jueves a domingo",
    description:
      "En el diario El Día encontrarás cupones válidos para funciones HD, pagando $14.000 por entrada.",
    terms: [
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "diario-el-dia-3d-atmos",
    badge: "TARIFA ESPECIAL",
    title: "Diario El Día · 3D y ATMOS",
    schedule: "Jueves a domingo",
    description:
      "Adquiriendo el diario El Día encontrarás cupones con los que podrás comprar entradas para funciones 3D y ATMOS a $16.500.",
    terms: [
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "club-el-dia",
    badge: "2 × 1",
    title: "Tarjeta Club El Día",
    schedule: "Jueves",
    description:
      "Podés adquirir dos entradas HD, 3D y ATMOS al precio de una entrada general, presentando la tarjeta del Club El Día junto con tu DNI.",
    terms: [
      "Sujeto a autorización de cada distribuidora y a disponibilidad de ubicaciones.",
    ],
  },
  {
    id: "instituciones",
    badge: "FUNCIONES ESPECIALES",
    title: "Colegios e instituciones",
    description:
      "Realizamos funciones especiales para colegios, colonias, sindicatos e instituciones con precios especiales. Para mayor información, escribinos por email.",
    contactEmail: "telma_rh@hotmail.com",
    contactSubject: "Funciones Especiales",
  },
];

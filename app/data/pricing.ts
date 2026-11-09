export type PricingSelection = {
  format: string | null;
  date: { label: string } | null;
  time: string | null;
  seats: string[];
};

export type AvailableDiscount = {
  id: string;
  title: string;
  description: string;
  pricePerTicket?: number;
  isTwoForOne?: boolean;
};

export type DiscountCatalogItem = {
  id: string;
  name: string;
  schedule: string;
  description: string;
  formats: string[];
  days: string[];
  pricePerTicket?: number;
  startTime?: number;
  endTime?: number;
  minimumSeats?: number;
};

export const ONLINE_SERVICE_FEE = 1_000;

const ONLINE_TICKET_PRICES: Record<string, { regular: number; peak: number }> = {
  HD: { regular: 8_000, peak: 13_120 },
  "3D": { regular: 9_500, peak: 15_580 },
  ATMOS: { regular: 9_500, peak: 15_580 },
  "4D": { regular: 10_500, peak: 21_000 },
};

const PEAK_RATE_DAYS = ["JUE", "VIE", "SÁB", "SAB", "DOM"];

export const DISCOUNT_CATALOG: DiscountCatalogItem[] = [
  {
    id: "two-for-one",
    name: "2 x 1",
    schedule: "Jueves a domingo · 13 a 18 h",
    description:
      "Comprá dos entradas para funciones HD, 3D y ATMOS al precio de una entrada general. No válido para 4D.",
    formats: ["HD", "3D", "ATMOS"],
    days: PEAK_RATE_DAYS,
    startTime: 13 * 60,
    endTime: 18 * 60,
    minimumSeats: 2,
  },
  {
    id: "discount-hd",
    name: "Descuento en funciones HD",
    schedule: "Jueves a domingo",
    description: "Pagás $14.000 por entrada en funciones HD.",
    formats: ["HD"],
    days: PEAK_RATE_DAYS,
    pricePerTicket: 14_000,
  },
  {
    id: "discount-3d-atmos",
    name: "Descuento en funciones 3D y ATMOS",
    schedule: "Jueves a domingo",
    description: "Pagás $16.500 por entrada en funciones 3D y ATMOS.",
    formats: ["3D", "ATMOS"],
    days: PEAK_RATE_DAYS,
    pricePerTicket: 16_500,
  },
];

function getWeekday(selection: PricingSelection) {
  return selection.date?.label.split(" ")[0] ?? "";
}

function getTimeInMinutes(time: string | null) {
  const [hours = 0, minutes = 0] = (time ?? "").split(":").map(Number);
  return hours * 60 + minutes;
}

export function getOnlineTicketPrice(selection: PricingSelection) {
  const isPeakDay = PEAK_RATE_DAYS.includes(getWeekday(selection));
  const isPeakTime = getTimeInMinutes(selection.time) >= 13 * 60;
  const prices = ONLINE_TICKET_PRICES[selection.format ?? "HD"] ?? ONLINE_TICKET_PRICES.HD;

  return {
    ticketPrice: isPeakDay && isPeakTime ? prices.peak : prices.regular,
    serviceFee: ONLINE_SERVICE_FEE,
  };
}

export function getAvailableDiscounts(
  selection: PricingSelection
): AvailableDiscount[] {
  const weekday = getWeekday(selection);
  const timeInMinutes = getTimeInMinutes(selection.time);
  const discounts: AvailableDiscount[] = [];

  const { ticketPrice, serviceFee } = getOnlineTicketPrice(selection);
  const regularPricePerTicket = ticketPrice + serviceFee;

  for (const item of DISCOUNT_CATALOG) {
    const matchesSelection =
      item.days.includes(weekday) && item.formats.includes(selection.format ?? "");
    if (!matchesSelection) continue;

    const matchesSeatCount =
      item.minimumSeats === undefined || selection.seats.length >= item.minimumSeats;
    const matchesTime =
      (item.startTime === undefined || timeInMinutes >= item.startTime) &&
      (item.endTime === undefined || timeInMinutes <= item.endTime);
    const isCheaperThanCurrentPrice =
      item.pricePerTicket === undefined || item.pricePerTicket < regularPricePerTicket;

    if (matchesSeatCount && matchesTime && isCheaperThanCurrentPrice) {
      discounts.push({
        id: item.id,
        title: `${item.name} · ${item.schedule}`,
        description: item.description,
        pricePerTicket: item.pricePerTicket,
        isTwoForOne: item.minimumSeats !== undefined,
      });
    }
  }

  return discounts;
}

export function getDefaultDiscountId(discounts: AvailableDiscount[]) {
  return discounts[0]?.id ?? null;
}

export function getOrderTotal(
  selection: PricingSelection,
  discounts: AvailableDiscount[],
  selectedDiscountId: string | null
) {
  const discount = discounts.find(({ id }) => id === selectedDiscountId);

  if (discount?.isTwoForOne) {
    const paidTickets = Math.ceil(selection.seats.length / 2);
    const { ticketPrice, serviceFee } = getOnlineTicketPrice(selection);
    return paidTickets * (ticketPrice + serviceFee);
  }

  if (discount?.pricePerTicket !== undefined) {
    return selection.seats.length * discount.pricePerTicket;
  }

  const { ticketPrice, serviceFee } = getOnlineTicketPrice(selection);
  return selection.seats.length * (ticketPrice + serviceFee);
}

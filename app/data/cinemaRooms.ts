export type RoomLayout = {
  id: string;
  rowLabelsAfterSeats?: number[];
  rows: {
    label: string;
    seatCount: number;
	seatGroups?: [number, number, number];
    align?: "start" | "center";
  }[];
};

export type CinemaRoom = {
  id: string;
  cinema: "rocha" | "ocho";
  name: string;
  layoutId: string;
};

export const roomLayouts: RoomLayout[] = [
  {
    id: "rocha-sala-1",
	rowLabelsAfterSeats: [11, 26],
    rows: [
		{ label: "A", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "B", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "C", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "D", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "E", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "F", seatCount: 37, seatGroups: [11, 15, 11] },
		{ label: "G", seatCount: 37, seatGroups: [11, 15, 11] },
		{ label: "H", seatCount: 37, seatGroups: [11, 15, 11] },
		{ label: "I", seatCount: 37, seatGroups: [11, 15, 11] },
		{ label: "J", seatCount: 37, seatGroups: [11, 15, 11] },
		{ label: "K", seatCount: 15, seatGroups: [0, 15, 0] },
		{ label: "L", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "M", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "N", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "O", seatCount: 31, seatGroups: [8, 15, 8] },
		{ label: "P", seatCount: 33, seatGroups: [11, 15, 7] },
		{ label: "Q", seatCount: 34, seatGroups: [9, 15, 10] },
    ],
  },
  {
    id: "rocha-sala-2",
    rows: [
      { label: "A", seatCount: 7, align: "start" },
      { label: "B", seatCount: 14 },
      { label: "C", seatCount: 14 },
      { label: "D", seatCount: 14 },
      { label: "E", seatCount: 14 },
      { label: "F", seatCount: 14 },
      { label: "G", seatCount: 14 },
      { label: "H", seatCount: 14 },
      { label: "I", seatCount: 14 },
      { label: "J", seatCount: 14 },
      { label: "K", seatCount: 14 },
    ],
  },
  {
    id: "rocha-sala-3",
    rows: [
      { label: "A", seatCount: 10 },
      { label: "B", seatCount: 14 },
      { label: "C", seatCount: 16 },
      { label: "D", seatCount: 16 },
      { label: "E", seatCount: 16 },
      { label: "F", seatCount: 16 },
      { label: "G", seatCount: 16 },
      { label: "H", seatCount: 16 },
      { label: "I", seatCount: 16 },
      { label: "J", seatCount: 16 },
      { label: "K", seatCount: 16 },
    ],
  },
  {
	id: "ocho-sala-1",
	rows: [
      { label: "A", seatCount: 15 },
      { label: "B", seatCount: 15 },
      { label: "C", seatCount: 15 },
      { label: "D", seatCount: 15 },
      { label: "E", seatCount: 15 },
      { label: "F", seatCount: 15 },
      { label: "G", seatCount: 15 },
      { label: "H", seatCount: 15 },
      { label: "I", seatCount: 15 },
      { label: "J", seatCount: 15 },
      { label: "K", seatCount: 15 },
      { label: "L", seatCount: 15 },
      { label: "M", seatCount: 13 },
    ],
  },
  {
	id: "ocho-sala-2",
	rows: [
      { label: "A", seatCount: 14 },
      { label: "B", seatCount: 14 },
      { label: "C", seatCount: 14 },
      { label: "D", seatCount: 14 },
      { label: "E", seatCount: 14 },
      { label: "F", seatCount: 14 },
      { label: "G", seatCount: 14 },
      { label: "H", seatCount: 14 },
      { label: "I", seatCount: 14 },
      { label: "J", seatCount: 14 },
      { label: "K", seatCount: 14 },
      { label: "L", seatCount: 14 },
      { label: "M", seatCount: 18 },
      { label: "N", seatCount: 18 },
      { label: "O", seatCount: 20 },
      { label: "P", seatCount: 20 },
    ],
  },
];

export const cinemaRooms: CinemaRoom[] = [
  { id: "rocha-1", cinema: "rocha", name: "Sala 1", layoutId: "rocha-sala-1" },
  { id: "rocha-2", cinema: "rocha", name: "Sala 2", layoutId: "rocha-sala-2" },
  { id: "rocha-3", cinema: "rocha", name: "Sala 3", layoutId: "rocha-sala-3" },
  { id: "ocho-1", cinema: "ocho", name: "Sala 1", layoutId: "ocho-sala-1" },
  { id: "ocho-2", cinema: "ocho", name: "Sala 2", layoutId: "ocho-sala-2" },
];
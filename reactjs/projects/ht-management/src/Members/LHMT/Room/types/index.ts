export interface Room {
  id: number;
  title: string;
  time: string;
  modal: string;
  modalContent: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    title: "Room 1",
    time: "9:00 AM",
    modal: "3",
    modalContent: ["Ống nước hỏng", "Đèn hỏng", "Quạt hỏng"],
  },
  {
    id: 2,
    title: "Room 2",
    time: "10:00 AM",
    modal: "1",
    modalContent: ["Đèn hỏng"],
  },
  {
    id: 3,
    title: "Room 3",
    time: "11:00 AM",
    modal: "2",
    modalContent: ["Quạt hỏng", "Đèn hỏng"],
  },
];

export const d: Room[] = [
  {
    id: 1,
    title: "Room 1",
    time: "7:00 AM",
    modal: "",
    modalContent: [],
  },
  {
    id: 2,
    title: "Room 2",
    time: "11:00 AM",
    modal: "2",
    modalContent: ["Đèn hỏng", "Quạt hỏng"],
  },
  {
    id: 3,
    title: "Room 3",
    time: "4:00 AM",
    modal: "1",
    modalContent: ["Quạt hỏng"],
  },
];

export const k: Room[] = [
  {
    id: 1,
    title: "Room 1",
    time: "4:00 AM",
    modal: "2",
    modalContent: ["Ống nước hỏng", "Đèn hỏng"],
  },
  {
    id: 2,
    title: "Room 2",
    time: "8:00 AM",
    modal: "",
    modalContent: [],
  },
  {
    id: 3,
    title: "Room 3",
    time: "12:00 AM",
    modal: "2",
    modalContent: ["Quạt hỏng", "Đèn hỏng"],
  },
];

export interface Room {
  id?: any;
  title: string;
  bedAmount: number;
  checkinDate: string;
  checkoutDate: string;
  time: string;
  roomType: string;
  modal: number;
  modalContent?: string[];
  status?: string;
}
export const rooms: Room[] = [
  {
    id: "1",
    title: "Room 1",
    bedAmount: 3,
    checkinDate: "11/12",
    checkoutDate: "16/12",
    time: "11/12 - 16/12",
    roomType: "Standard",
    modal: 2,
    modalContent: ["Sửa ống nước", "Sửa quạt"],
  },
  {
    id: "2",
    title: "Room 2",
    bedAmount: 3,
    checkinDate: "18/12",
    checkoutDate: "20/12",
    time: "18/12 - 20/12",
    roomType: "Double",
    modal: 0,
  },
  {
    id: "3",
    title: "Room 3",
    bedAmount: 3,
    checkinDate: "18/12",
    checkoutDate: "20/12",
    time: "18/12 - 20/12",
    roomType: "King",
    modal: 0,
  },
  {
    id: "4",
    title: "Room 4",
    bedAmount: 3,
    checkinDate: "12/12",
    checkoutDate: "16/12",
    time: "18/12 - 20/12",
    roomType: "Standard",
    modal: 0,
  },
  {
    id: "5",
    title: "Room 5",
    bedAmount: 3,
    checkinDate: "12/12",
    checkoutDate: "16/12",
    time: "18/12 - 20/12",
    roomType: "King",
    modal: 3,
    modalContent: ["Sửa ống nước", "Sửa quạt", "Sửa công tắc đèn"],
  },
];
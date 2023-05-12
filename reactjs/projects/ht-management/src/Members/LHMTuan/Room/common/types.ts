export interface Room {
  id: string;
  roomType: string;
  title: string;
  time: string;
  member: string;
  modal: number;
  modalContent?: string[];
}

export const rooms: Room[] = [
  {
    id: "1",
    roomType: "Standard",
    title: "Room 1",
    time: "12/06 - 18/06",
    member: "3",
    modal: 2,
    modalContent: ["Ống nước hỏng", "Lấy thêm đồ ăn, đổi giường lớn hơn"],
  },
  {
    id: "2",
    roomType: "Double",
    title: "Room 2",
    time: "12/06 - 18/06",
    member: "3",
    modal: 1,
    modalContent: ["Không bật được đèn nhà tắm"],
  },
  {
    id: "3",
    roomType: "King",
    title: "Room 3",
    time: "12/06 - 18/06",
    member: "3",
    modal: 2,
    modalContent: ["Ống nước hỏng", "Lấy thêm đồ ăn, đổi giường lớn hơn"],
  },
  {
    id: "4",
    roomType: "Standard",
    title: "Room 4",
    time: "12/06 - 18/06",
    member: "3",
    modal: 2,
    modalContent: ["Ống nước hỏng", "Lấy thêm đồ ăn, đổi giường lớn hơn"],
  },
  {
    id: "5",
    roomType: "King",
    title: "Room 5",
    time: "12/06 - 18/06",
    member: "3",
    modal: 3,
    modalContent: [
      "Ống nước hỏng",
      "Lấy thêm đồ ăn, đổi giường lớn hơn",
      "Không bật được đèn nhà tắm",
    ],
  },
];

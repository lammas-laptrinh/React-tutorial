import { useParams } from "react-router-dom";

import { Room } from "../Room/common/types";
import RoomDetail from "../Room/RoomDetail";

export default function MainRoomDetail() {
  const { id } = useParams();
  const rooms: Room[] = [
    {
      id: "1",
      title: "Room 1",
      bedAmount: 3,
      checkinDate: "11/12",
      checkoutDate: "16/12",
      time: "12/06 - 18/06",
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
      time: "12/06 - 18/06",
      roomType: "Double",
      modal: 0,
    },
    {
      id: "3",
      title: "Room 3",
      bedAmount: 3,
      checkinDate: "18/12",
      checkoutDate: "20/12",
      time: "12/06 - 18/06",
      roomType: "King",
      modal: 0,
    },
    {
      id: "4",
      title: "Room 4",
      bedAmount: 3,
      checkinDate: "12/12",
      checkoutDate: "16/12",
      time: "12/06 - 18/06",
      roomType: "Standard",
      modal: 0,
    },
    {
      id: "5",
      title: "Room 5",
      bedAmount: 3,
      checkinDate: "12/12",
      checkoutDate: "16/12",
      time: "12/06 - 18/06",
      roomType: "King",
      modal: 3,
      modalContent: ["Sửa ống nước", "Sửa quạt", "Sửa công tắc đèn"],
    },
  ];

  const getRoom = rooms.find((room) => room.id === id);
  return (
    <div>
      <RoomDetail rooms={getRoom!} />
    </div>
  );
}

import React from 'react';

interface Room {
  id: string;
  type: string;
  capacity: number;
  date: Date;
}

interface RoomProps {
  room: Room;
}

const RoomElement: React.FC<RoomProps> = ({ room }) => {
  return (
    <div>
      <h2>{room.type}</h2>
      <p>Sức chứa: {room.capacity} người</p>
      <p>Mã phòng: {room.id}</p>
      <p>Ngày sử dụng: {room.date.toLocaleDateString()}</p>
    </div>
  );
};

export default RoomElement;

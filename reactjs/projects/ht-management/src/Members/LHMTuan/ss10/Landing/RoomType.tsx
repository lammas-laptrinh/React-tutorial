import { Row, Col, Image } from "antd";

import RoomType_1 from "../Img/land-room-type-1.svg";
//import RoomType_2 from "../Img/land-room-type-2.svg";
//import RoomType_3 from "../Img/land-room-type-3.svg";
//import RoomType_4 from "../Img/land-room-type-4.svg";
//import RoomType_5 from "../Img/land-room-type-5.svg";
//import RoomType_6 from "../Img/land-room-type-6.svg";
//import RoomType_7 from "../Img/land-room-type-7.svg";
//import RoomType_8 from "../Img/land-room-type-8.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { firestoreDB } from "../../../../firebase";

const RoomType = () => {
  const [room, setroom] = useState<any[]>([]);
  const [roomType, setroomType] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "rooms"));
        const dataRooms = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setroom(dataRooms);
        console.log("dataRooms", dataRooms);
      } catch (error) {
        console.error("Error retrieving rooms data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDB, "roomTypes")
        );
        const dataRoomTypes = querySnapshot.docs.map((doc) => doc.data());
        setroomType(dataRoomTypes);
        console.log("dataRoomTypes", dataRoomTypes);
        if (dataRoomTypes.length > 0) {
          const RoomTypeItem = dataRoomTypes[0];
          for (const key in RoomTypeItem) {
            console.log(`Field: ${key}, Type: ${typeof RoomTypeItem[key]}`);
          }
        }
      } catch (error) {
        console.error("Error retrieving roomTypes data:", error);
      }
    };
    fetchData();
  }, []);

  const handleRoomTypeClick = async (roomTypeId: string) => {
    try {
      const q = query(
        collection(firestoreDB, "rooms"),
        where("roomTypeId", "==", roomTypeId)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setroom(data);
      console.log("Filtered rooms data:", data);
    } catch (error) {
      console.error("Error filtering rooms data:", error);
    }
  };

  return (
    <>
      <h2 className="room">Room type</h2>
      <Row className="row">
        {roomType.map((type) => (
          <Col
            className="col"
            key={type.name}
            onClick={() => handleRoomTypeClick(type.id)}
          >
            <h2 className="header">{type.name} Room</h2>
          </Col>
        ))}
      </Row>

      <Row gutter={49}>
        {room.map((room) => (
          <Col span={6} className="room-col" key={room.name}>
            <Link to={`/Landing/${room.id}`}>
              <Image src={RoomType_1} preview={false} />
              <h2 className="title">{room.name}</h2>
              <p className="desc">{room.description}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RoomType;

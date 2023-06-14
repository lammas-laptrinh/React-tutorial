import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { firestoreDB } from "@src/firebase";
import TitleRoom from "../Room/TitleRoom";

interface RoomListProps {
  rooms: any[];
}

const PageContent = ({ rooms }: RoomListProps) => {
  const [view, setView] = useState<FlexDirection>("row");

  const handleSearch = (roomId: string) => {
    const foundRooms = rooms.filter(
      (room: { id?: string }) => room.id === roomId
    );
    setRoomList(foundRooms);
    if (roomId === "") {
      setRoomList(rooms);
    }
  };

  type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

  const styles: React.CSSProperties = {
    textAlign: "left",
    display: "flex",
    margin: "20px",
    fontSize: 20,
    flexDirection: view,
  };

  function handleLineClick() {
    setView("column");
  }

  function handleGridClick() {
    setView("row");
  }

  const [roomList, setRoomList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const roomsRef = collection(firestoreDB, "rooms");
      const roomSnapshot = await getDocs(roomsRef);
      const rooms = await Promise.all(
        roomSnapshot.docs.map(async (doc) => {
          const roomData = doc.data();
          const roomId = doc.id;
          const userCheckInRef = collection(roomsRef, roomId, "usersCheckIn");
          const userCheckInSnapshot = await getDocs(userCheckInRef);
          const userCheckInData = userCheckInSnapshot.docs.map((checkinDoc) =>
            checkinDoc.data()
          );
          return {
            ...roomData,
            id: roomId,
            userCheckIn: userCheckInData,
          };
        })
      );
      setRoomList(rooms);
      console.log(rooms);
    };
    fetchData();
  }, []);

  const [roomType, setRoomType] = useState<any[]>([]);
  const [roomLists, setRoomLists] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDB, "roomTypes")
        );
        const data = querySnapshot.docs.map((doc) => doc.data());
        setRoomType(data);
      } catch (error) {
        console.error("Error retrieving roomTypes data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("roomType", roomType);

  useEffect(() => {
    const updatedRoomList = roomList?.map((room: any) => {
      const matchedRoomType = roomType?.find(
        (type) => type.id === room?.roomTypeId
      );
      if (matchedRoomType) {
        return {
          ...room,
          roomTypeId: matchedRoomType.name,
        };
      }
      return room;
    });
    setRoomLists(updatedRoomList);
  }, [roomList]);
  console.log("roomLists", roomLists);

  return (
    <div className="PageContent">
      <Row className="FormRoom">
        <Col span={12}>
          <h2>Room</h2>
          <Search
            placeholder="tìm kiếm"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col span={12} className="View">
          <h3>
            View:
            <Space>
              <Button
                onClick={handleLineClick}
                icon={<UnorderedListOutlined />}
              >
                Line
              </Button>
            </Space>
            <Space>
              <Button onClick={handleGridClick} icon={<AppstoreOutlined />}>
                Grid
              </Button>
            </Space>
          </h3>
        </Col>
        <>
          {roomType.map((item: any) => (
            <React.Fragment key={item.id}>
              <h2>{item.name}</h2>
              <Col span={24} style={styles}>
                {roomLists
                  .filter((room: any) => room?.roomTypeId === item.name)
                  .map((room: any) => (
                    <TitleRoom
                      key={room.id}
                      room={room}
                      title={room?.id}
                      time={
                        room.userCheckIn?.checkIn +
                        " - " +
                        room.userCheckIn?.checkOut
                      }
                    />
                  ))}
              </Col>
            </React.Fragment>
          ))}
        </>
      </Row>
    </div>
  );
};

export default PageContent;

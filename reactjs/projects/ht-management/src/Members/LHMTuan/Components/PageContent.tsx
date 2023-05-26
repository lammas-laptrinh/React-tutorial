import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";

import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { Room } from "../Room/common/types";
import TitleRoom from "../Room/TitleRoom";

interface RoomListProps {
  rooms: Room[];
}

const PageContent = ({ rooms }: RoomListProps) => {
  const [roomList, setRoomList] = useState<Room[]>(rooms);
  const [view, setView] = useState<FlexDirection>("row");

  const handleSearch = (roomId: string) => {
    const foundRooms = rooms.filter(
      (rooms: { id?: string }) => rooms.id === roomId
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
    margin: " 20px",
    fontSize: 20,
    flexDirection: view,
  };
  function handleLineClick() {
    setView("column");
  }
  function handleGridClick() {
    setView("row");
  }

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
        {["Standard", "Double", "King"].map((roomType) => (
          <React.Fragment key={roomType}>
            <h2>{roomType}</h2>
            <Col span={24} style={styles}>
              {roomList
                .filter((room: Room) => room.roomType === roomType)
                .map((room: Room) => (
                  <TitleRoom
                    room={room}
                    title={room.title}
                    key={room.id}
                    time={room.time}
                  />
                ))}
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};

export default PageContent;

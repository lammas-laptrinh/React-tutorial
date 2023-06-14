import { Button, Space, Tooltip } from "antd";
//import { Room } from "../Room/common/types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { firestoreDB } from "@src/firebase";
import React from "react";
//import { SmileOutlined } from "@ant-design/icons";

function TitleRoom(props: { title: string; time: any; room: any }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = (room: any) => {
    navigate(`${room.id}`);
  };

  const [room, setRoom] = useState<any>([]);
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
      setRoom(rooms);
      console.log(rooms);
    };
    fetchData();
  }, [id]);
  console.log("rooms", room);

  const [roomType, setRoomType] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDB, "roomTypes")
        );
        const dataRoomTypes = querySnapshot.docs.map((doc) => doc.data());
        setRoomType(dataRoomTypes);
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

  const [roomLists, setRoomLists] = useState<any[]>([]);
  useEffect(() => {
    const updatedRoomList = room?.map((room: any) => {
      const matchedRoomType = roomType?.find(
        (type) => type.id === room?.roomType
      );
      if (matchedRoomType) {
        return {
          ...room,
          roomType: matchedRoomType.name,
        };
      }
      return room;
    });
    setRoomLists(updatedRoomList);
  }, [room]);
  console.log("roomLists", roomLists);

  const [service, setService] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDB, "services")
        );
        const dataService = querySnapshot.docs.map((doc) => doc.data());
        setService(dataService);
      } catch (error) {
        console.error("Error retrieving services data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("services", service);

  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "users"));
        const dataUsers = querySnapshot.docs.map((doc) => {
          const UsersItem = doc.data();
          return {
            ...UsersItem,
          };
        });
        setUsers(dataUsers);
        console.log(dataUsers);
      } catch (error) {
        console.error("Error retrieving bill data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("users", users);
  return (
    <Link to={`/room-management/${id}`}>
      <a onClick={() => handleClick(props.room)}>
        <>
          <Space className="Card">
            {service.length > 0 && (
              <Tooltip
                placement="rightTop"
                title={service.map((item) => {
                  return <div key={item.id}>{item.id}</div>;
                })}
              >
                <Button danger type="primary" className="modal">
                  {props.room.statusId}
                </Button>
              </Tooltip>
            )}

            {roomLists
              .filter((room: any) => room.roomType === room.roomTypeId)
              .map((type: any) => (
                <React.Fragment key={type.name}>
                  <Space className="title">{type.roomTypeId}</Space>
                  <Space>
                    {[...Array(users[0].avatar)].map((_, i) => (
                      <Space key={i} className="bed"></Space>
                    ))}
                  </Space>
                  <Space>
                    {type.userCheckIn?.checkIn +
                      " - " +
                      type.userCheckIn?.checkOut}
                  </Space>
                </React.Fragment>
              ))}
          </Space>
        </>
      </a>
    </Link>
  );
}

export default TitleRoom;

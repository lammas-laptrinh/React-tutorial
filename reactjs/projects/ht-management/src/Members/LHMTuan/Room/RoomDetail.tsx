import {
  Col,
  Row,
  Image,
  Typography,
  Avatar,
  Tooltip,
  Rate,
  DatePicker,
  Button,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  AntDesignOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import Room from "../assests/room.png";
import screen from "../assests/screen.png";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
} from "@firebase/firestore";
import { firestoreDB } from "@src/firebase";
import React from "react";
import moment from "moment";

const { Title } = Typography;

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const [showFullDescription, setFullDescription] = useState(false);
  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;

  const [room, setRoom] = useState<any>(null);
  const [book, setbook] = useState<any[]>([]);
  const [selectedRange, setSelectedRange] = useState<any>(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const roomRef = doc(collection(firestoreDB, "rooms"), id);
        const roomSnapshot = await getDoc(roomRef);
        if (roomSnapshot.exists()) {
          const roomData = {
            id: roomSnapshot.id,
            roomTypeId: roomSnapshot.data().roomTypeId,
            statusId: roomSnapshot.data().statusId,
            ...roomSnapshot.data(),
          };
          setRoom(roomData);
        } else {
          console.log("Room not found");
        }
      } catch (error) {
        console.error("Error retrieving room data:", error);
      }
    };

    fetchRoomData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "booking"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setbook(data);
        console.log("data", data);
        if (data.length > 0) {
          const RoomTypeItem = data[0];
          for (const key in RoomTypeItem) {
            console.log(`Field: ${key}, Type: ${typeof RoomTypeItem[key]}`);
          }
        }
      } catch (error) {
        console.error("Error retrieving booking data:", error);
      }
    };

    fetchData();
    console.log(book);
  }, []);

  const handleBookRoom = async () => {
    try {
      const checkInDate = selectedRange
        ? moment(selectedRange[0]).toDate()
        : null;
      const checkOutDate = selectedRange
        ? moment(selectedRange[1]).toDate()
        : null;
      const userId = sessionStorage.getItem("userId");
      // Retrieve userId from sessionStorage
      const bookingData = {
        checkIn: checkInDate,
        checkOut: checkOutDate,
        createdAt: serverTimestamp(),
        roomId: room.id,
        roomTypeId: room.roomTypeId,
        statusId: room.statusId,
        userId: userId, // Add userId to the booking data
      };
      const docRef = await addDoc(
        collection(firestoreDB, "booking"),
        bookingData
      );
      console.log("Booking added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  return (
    <Row>
      <Col span={12}>
        <Image width={700} height={800} src={Room} />
      </Col>
      <Col span={12}>
        <div>
          <React.Fragment>
            <Title level={2} className="!font-bold">
              {room?.name}
            </Title>
            <Rate className="rate" allowHalf defaultValue={5} />
            <div className="flex item-center justify-between">
              <Avatar.Group
                className="mt-[1.5rem] mb-[1.5rem]"
                maxCount={2}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
              >
                <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar.png" />
                <Avatar src="https://tse2.mm.bing.net/th?id=OIP.bzEmvp7jSfekbiqCu-wg3gHaHa&pid=Api&P=0" />
                <Tooltip title="Ant User" placement="top">
                  <Avatar className="cd" icon={<UserOutlined />} />
                </Tooltip>
                <Avatar icon={<AntDesignOutlined />} />
              </Avatar.Group>
              <Title level={5} className="review">
                39 reviews
              </Title>
            </div>
            <div>
              <Title level={5} className="des">
                {room?.description}
              </Title>
              <div onClick={showFullDescriptionHandler} className="FullDes">
                {showFullDescription ? "Thu gọn" : "Xem thêm"}
              </div>
            </div>

            <div className="image">
              <Image preview={false} src={screen} />
            </div>

            <div className="RoomInfoContainer">
              <Row>
                <Col span={12}>
                  <div className="RoomInfoItem">
                    <RangePicker
                      className="RangePicker"
                      value={selectedRange}
                      onChange={(dates) => setSelectedRange(dates)}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="RoomInfoItem">
                    <Button className="room-id" icon={<IdcardOutlined />}>
                      Room -{room?.roomTypeId}
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={12}>
                  <div className="RoomInfoItem">
                    <Button className="room-member" icon={<IdcardOutlined />}>
                      Adult-{room?.roomNumber}
                    </Button>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="RoomInfoItem">
                    <Button className="room-id" icon={<IdcardOutlined />}>
                      Room -{room?.roomTypeId}
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            {room?.statusId !== "pay" && (
              <div className="flex items-center justify-center">
                <Link to="/Landing/id/payment/">
                  <Button className="ChooseRoom" onClick={handleBookRoom}>
                    Chọn phòng
                  </Button>
                </Link>
              </div>
            )}
          </React.Fragment>
        </div>
      </Col>
    </Row>
  );
}

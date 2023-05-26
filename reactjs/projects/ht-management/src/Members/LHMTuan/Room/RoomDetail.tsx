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
import room from "../assests/room.png";
import screen from "../assests/screen.png";
import { rooms } from "../Room/common/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

const { Title } = Typography;

export default function RoomDetail() {
  const { id } = useParams();
  const [showFullDescription, setFullDescription] = useState(false);
  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";
  const checkInFormatted = dayjs(rooms[0]?.checkinDate).format(dateFormat);
  const checkOutFormatted = dayjs(rooms[0]?.checkoutDate).format(dateFormat);
  console.log(checkInFormatted);
  const selectedRoom = rooms.find((room) => room.id === id);
  return (
    <Row>
      <Col span={12}>
        <Image width={700} height={800} src={room} />
      </Col>
      <Col span={12}>
        <div>
          <Title level={2} className="!font-bold">
            {selectedRoom?.roomType} Room
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
              ipsum quae iste totam quam illum officia blanditiis. Ullam
              voluptas et magnam totam quia facere vitae illo culpa minus eum?
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
                    defaultValue={
                      selectedRoom?.status == "paid"
                        ? [
                            dayjs("", checkInFormatted),
                            dayjs("", checkOutFormatted),
                          ]
                        : null
                    }
                    format={dateFormat}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="RoomInfoItem">
                  <Button className="room-id" icon={<IdcardOutlined />}>
                    Room -{selectedRoom?.id}
                  </Button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <div className="RoomInfoItem">
                  <Button className="room-member" icon={<IdcardOutlined />}>
                    Adult-{selectedRoom?.bedAmount}
                  </Button>
                </div>
              </Col>
              <Col span={12}>
                <div className="RoomInfoItem">
                  <Button className="room-id" icon={<IdcardOutlined />}>
                    Room - {selectedRoom?.id}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="flex items-center justify-center">
            <Button className="ChooseRoom">Chọn phòng</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

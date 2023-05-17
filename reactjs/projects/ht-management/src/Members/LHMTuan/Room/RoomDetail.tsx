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
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import room from "../assests/room.png";
import screen from "../assests/screen.png";
import { Room } from "../Room/common/types";
import { useParams } from "react-router-dom";

const { Title } = Typography;
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};

export default function RoomDetail() {
  const { id } = useParams();
  const rooms: Room[] = [
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
  const getRoom = rooms.find((room) => room.id === id);
  return (
    <Row>
      <Col span={12}>
        <Image width={700} height={800} src={room} />
      </Col>
      <Col span={12}>
        <div>
          <Title level={2} className="!font-bold">
            {getRoom?.roomType} Room
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
          <Title level={5} className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
            ipsum quae iste totam quam illum officia blanditiis. Ullam voluptas
            et magnam totam quia facere vitae illo culpa minus eum?
          </Title>

          <div className="image">
            <Image preview={false} src={screen} />
          </div>

          <div className="calendar">
            <RangePicker disabledDate={disabledDate} />
          </div>
          <div className="flex items-center justify-center">
            <Button className="ChooseRoom">Chọn phòng</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

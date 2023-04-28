import React from "react";
import {
  Col,
  Row,
  Image,
  Typography,
  Avatar,
  Tooltip,
  DatePicker,
  Button,
} from "antd";
import { StarOutlined } from "@ant-design/icons";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import room from "../assests/room.png";
import screen from "../assests/screen.png";

const { Title } = Typography;
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};

const RoomDetail: React.FC = () => {
  return (
    <Row>
      <Col span={12}>
        <Image width={700} height={800} src={room} />
      </Col>
      <Col span={12}>
        <div>
          <Title level={2} className="!font-bold">
            Room Detail
          </Title>
          <div className="flex item-center mt-[1.5rem]">
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
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
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar className="MrT">T</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar className="cd" icon={<UserOutlined />} />
              </Tooltip>
              <Avatar icon={<AntDesignOutlined />} />
            </Avatar.Group>
            <Title level={5} className="!leading-[96px]">
              39 reviews
            </Title>
          </div>
          <Title level={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
            ipsum quae iste totam quam illum officia blanditiis. Ullam voluptas
            et magnam totam quia facere vitae illo culpa minus eum?
          </Title>

          <div className="flex item-center justify-center mt-[2.5rem] mb-[2.5rem]">
            <Image preview={false} src={screen} />
          </div>

          <div className="calendar bg-[#F7F6FB] p-8 rounded-3xl flex items-center justify-center mt-[4.5rem] mb-[4.5rem]">
            <RangePicker disabledDate={disabledDate} />
          </div>
          <div className="flex items-center justify-center">
            <Button className="ChooseRoom">Chọn phòng</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RoomDetail;

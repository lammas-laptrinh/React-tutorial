import {
  Col,
  Row,
  Image,
  Typography,
  Avatar,
  Tooltip,
  DatePicker,
  Button,
  Space,
} from "antd";
// Calendar
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Stars from "@src/components/icon/Stars";
import feature from "@src/components/icon/feature.svg";
import double_room from "@src/assets/double_room.jpg";
import { NavLink, useParams } from "react-router-dom";
import arrowLeft from "@src/components/icon/arrowLeft.svg";

const { Title } = Typography;

// Calendar
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const RoomDetail = () => {
  const { typeroom } = useParams();

  const handleBack = () => {
    window.history.back();
  };
  return (
    <Row>
      <Col className="flex-50 max-w-50 md:flex-60 md:max-w-40 sm:flex-100 sm:max-w-60">
        <Image
          width={700}
          height={800}
          src={double_room}
          className="md:!w-[350px] md:!h-full"
        />
      </Col>
      <Col className="flex-50 max-w-50 md:flex-60 md:max-w-40 sm:flex-100 sm:!max-w-[390px] sm:!mx-auto sm:!ml-16">
        <div style={{ padding: "3rem 1rem" }}>
          <Space className="flex item-center justify-between">
            <Title level={2} className="!font-bold">
              {typeroom === "l02"
                ? "Lanai Room"
                : typeroom === "l01"
                ? "Luxury Room"
                : "Single Room"}
            </Title>
            <NavLink to="#" onClick={handleBack}>
              <img
                className="w-12 h-8 outline-none border-none"
                src={arrowLeft}
              />
            </NavLink>
          </Space>
          <div className="flex item-center mt-[1.5rem]">
            <Stars />
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
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1890ff" }}
                icon={<AntDesignOutlined />}
              />
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
            <Image preview={false} src={feature} />
          </div>
          <div className="calendar bg-[#F7F6FB] p-8 rounded-3xl flex items-center justify-center mt-[4.5rem] mb-[4.5rem]">
            <RangePicker disabledDate={disabledDate} />
          </div>
          <div className="flex items-center justify-center">
            <NavLink to={"/sign-up"}>
              <Button
                style={{
                  background: "#F1E2D3",
                  border: "2px solid #C18346",
                  borderRadius: "20px",
                  width: "490px",
                  height: "60px",
                  color: "#000",
                  fontWeight: "700",
                }}
                className="md:!w-[250px] md:!h-[60px]"
              >
                Chọn phòng
              </Button>
            </NavLink>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RoomDetail;

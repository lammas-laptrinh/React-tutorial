import { Tag, Button, message, Popconfirm } from "antd";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import avatarImg from "../../assets/img/poster.jpg";

const confirm = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
  console.log(e);
  message.success("Delete Success");
};

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar: string) => (
      <img
        src={avatar || avatarImg}
        alt="Avatar"
        style={{ width: "50px", borderRadius: "50%" }}
      />
    ),
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Sđt",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Loại Phòng",
    dataIndex: "roomType",
    key: "roomTypeId",
  },
  {
    title: "Check In",
    dataIndex: "checkIn",
    key: "checkIn",
  },
  {
    title: "Check Out",
    dataIndex: "checkOut",
    key: "checkOut",
  },
  {
    title: "Trạng Thái",
    dataIndex: "status",
    key: "statusId",
    render: (
      statusId:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined
    ) => (
      <Tag
        style={{
          color: "#F1AC4D",
          background: "#FFFFFF",
          border: "2px solid #F1AC4D",
          borderRadius: "32px",
        }}
      >
        {statusId}
      </Tag>
    ),
  },
  {
    title: "Hành Động",
    dataIndex: "actions",
    key: "Action",
    render: () => (
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button
          style={{
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "32px",
            lineHeight: "10px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          ...
        </Button>
      </Popconfirm>
    ),
  },
];

export default columns;

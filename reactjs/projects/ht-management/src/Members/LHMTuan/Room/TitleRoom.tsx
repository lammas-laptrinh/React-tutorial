import { Button, Space, Tooltip } from "antd";
import { Room } from "../Room/common/types";
import { useNavigate } from "react-router-dom";
//import { SmileOutlined } from "@ant-design/icons";

function TitleRoom(props: { title: string; time: any; room: Room }) {
  const navigate = useNavigate();
  const handleClick = (room: any) => {
    navigate(`${room.id}`);
  };
  return (
    <a onClick={() => handleClick(props.room)}>
      <Space className="Card">
        {props.room.modal > 0 && (
          <Tooltip
            placement="rightTop"
            title={props.room.modalContent?.map((item) => {
              return <div key={item}>{item}</div>;
            })}
          >
            <Button danger type="primary" className="modal">
              {props.room.modal}
            </Button>
          </Tooltip>
        )}
        <Space className="title">{props.title}</Space>
        <Space>
          {[...Array(props.room.bedAmount)].map((_, i) => (
            <Space key={i} className="bed">
              {" "}
            </Space>
          ))}
        </Space>
        <Space>{props.time}</Space>
      </Space>
    </a>
  );
}

export default TitleRoom;

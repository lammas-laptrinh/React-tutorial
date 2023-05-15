import { Typography, Space, Badge, Drawer, List, Avatar } from "antd";
import { BellFilled, InfoCircleOutlined } from "@ant-design/icons";

const appHeaderStyle = {
  right: "50px",
};

const titleStyle = {
  fontSize: 16,
  color: "#1a75ff",
};

export default function AppHeader() {
  return (
    <div className="AppHeader" style={appHeaderStyle}>
      <Typography.Title style={titleStyle}>Version 1.0.0</Typography.Title>
      <Space>
        <Badge>
          <BellFilled style={{ fontSize: 16, textAlign: "center" }} />
        </Badge>
        <Badge>
          <InfoCircleOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge> Uncle Tuấn</Badge>
        <Avatar></Avatar>
      </Space>
      <Drawer title="Comments" maskClosable>
        <List />
      </Drawer>
      <Drawer title="Notifications" maskClosable>
        <List />
      </Drawer>
    </div>
  );
}

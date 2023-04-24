import React from "react";
import {
  BellFilled,
  InfoCircleOutlined,
  GithubFilled,
} from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";

export default function AppHeader() {
  return (
    <div className="AppHeader" style={{ right: "50px" }}>
      <Typography.Title style={{ fontSize: 16, color: "#1a75ff" }}>
        Version 1.0.0
      </Typography.Title>
      <Space>
        <Badge>
          <BellFilled style={{ fontSize: 24, textAlign: "left" }} />
        </Badge>
        <Badge>
          <InfoCircleOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge style={{ fontSize: "30px", fontWeight: "bold" }}>
          <GithubFilled style={{ fontSize: 30 }} />
          Uncle Tuấn
        </Badge>
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

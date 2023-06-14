import React, { useState } from "react";
import {
  FileTextOutlined,
  TeamOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("DashBoard", "1", <PieChartOutlined />),
  getItem("Room", "2", <TeamOutlined />),
  getItem("Service", "3", <FileTextOutlined />),
];

const AppSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="Position">
      <Button className="TextDTD" type="primary" onClick={toggleCollapsed}>
        DTD
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={({ key }) => {
          if (typeof key === "string") {
            if (key === "1") {
              window.location.href = "/dashboard";
            } else if (key === "2") {
              window.location.href = "/room-management";
            } else if (key === "3") {
              window.location.href = "/room-management/service";
            }
          }
        }}
      />
    </div>
  );
};

export default AppSidebar;

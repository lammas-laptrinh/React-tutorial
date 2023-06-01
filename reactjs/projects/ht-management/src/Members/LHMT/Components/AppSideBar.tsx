import React, { useState } from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
  getItem("", "1", <PieChartOutlined />),
  getItem("", "2", <DesktopOutlined />),
  getItem("", "3", <ContainerOutlined />),
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
        {collapsed ? (
          <MenuUnfoldOutlined style={{ display: "none" }} />
        ) : (
          <MenuFoldOutlined style={{ width: "70px", height: "auto" }} />
        )}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default AppSidebar;
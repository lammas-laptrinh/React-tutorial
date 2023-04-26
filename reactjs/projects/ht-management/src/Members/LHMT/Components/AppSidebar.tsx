import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
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

  getItem("", "sub1", <MailOutlined />, [
    getItem("", "5"),
    getItem("", "6"),
    getItem("", "7"),
    getItem("", "8"),
  ]),

  getItem("", "sub2", <AppstoreOutlined />, [
    getItem("", "9"),
    getItem("", "10"),

    getItem("", "sub3", null, [getItem("", "11"), getItem("", "12")]),
  ]),
];

const AppSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100px",
        top: "30px",
        padding: "10px",
        marginLeft: "40px",
        textAlign: "center",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: "16px",
          color: "orange",
          backgroundColor: "white",
          fontWeight: "bold",
        }}
      >
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

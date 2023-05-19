import React, { useEffect, useState } from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined, InfoCircleOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Input, Col, Typography, Row, Avatar, Button, List, Skeleton, Table } from 'antd';
import { Booking } from "./type"
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const items1: MenuProps['items'] = ['version 1.0.0'].map((key) => ({
    key,
    label: `${key}`,
}));
const items: MenuProps['items'] = [BellOutlined, InfoCircleOutlined, UserOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
        };
    },
);
const HeaderBar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Row>
            <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items1} style={{ background: colorBgContainer }} />
            <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} style={{ marginLeft: '770px', background: colorBgContainer }} />
        </Row>

    );
};

export default HeaderBar;
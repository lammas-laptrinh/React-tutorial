import React, { useEffect, useState } from 'react';
import './index.css';
import {PieChartOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined, InfoCircleOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Input, Col, Typography, Row, Avatar, Button, List, Skeleton, Table } from 'antd';
import { db } from '../../../firebase';
import { collection, getDocs, query } from "firebase/firestore";
import { Booking } from "./type"
import TableBooking from "./TableBooking"
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const items2: MenuProps['items'] = [PieChartOutlined,LaptopOutlined,UserOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
const SideBar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />

    );
};

export default SideBar;
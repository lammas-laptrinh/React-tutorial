import React from 'react';
import './index.css';
import {  UserOutlined,  InfoCircleOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, theme,  Row } from 'antd';

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
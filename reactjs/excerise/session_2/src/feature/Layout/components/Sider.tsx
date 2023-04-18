import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Sider: AntdSider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('User', '2', <UserOutlined />),
    getItem('File', '9', <FileOutlined />),
];

export default function CustomSider() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AntdSider>
                <div style={{
                    maxWidth: '70px',
                    minHeight: '30px',
                    margin: 16,
                    marginRight: 20,
                    marginLeft: 20,
                    background: 'white',
                    textAlign: 'center',
                    borderRadius: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'orange',
                    fontWeight: 'bold',
                }}>Taiki</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </AntdSider>
        </Layout>
    );
};

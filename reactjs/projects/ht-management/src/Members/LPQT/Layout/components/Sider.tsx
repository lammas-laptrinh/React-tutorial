import React from 'react';
import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    href: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        href,
        children,
        label: (
            <Link to={href}>
                {label}
            </Link>
        ),
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', '/trang-chu', <PieChartOutlined />),
    getItem('Room', '2', '/room', <UserOutlined />),
    getItem('Service', '9', '/service', <FileOutlined />),
];

export default function CustomSider() {

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor:'#001529' }}>
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
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ minHeight: '100vh' }} />
            
        </Layout>
    );
};

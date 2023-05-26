import React from 'react';
import {
    TeamOutlined, 
    PieChartOutlined,
    FileTextOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Layout } from 'antd';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import ServicePage from '../Service/ServicePage';
const { Content } = Layout;
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
    getItem('Static', '1', <PieChartOutlined />),
    getItem('User', '2', <TeamOutlined />),
    getItem('Info', 'sub1', <FileTextOutlined /> )
];


export default function Home() {
    return (
        <Layout className='layout' >
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Huy Hoàng' />
                <Content className='content'>
                    <ServicePage />              
                </Content>            
            </Layout>
        </Layout>
    );
};
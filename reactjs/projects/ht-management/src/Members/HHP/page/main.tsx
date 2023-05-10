import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Layout } from 'antd';
import SideBar from '../Components/Sidebars';
import Header from '../Components/Headerr';
import { Link, Route, Routes } from 'react-router-dom';
import Service from '../Components/Services';
import { Rooms } from '../Types';
const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    link?: string
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        link
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Service', '1', <PieChartOutlined />),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const rooms: Rooms[] = [
    {
        id: "1",
        roomName: 'Phòng 1',
        bedAmount: 3,
        checkinDate: '11/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 2,
        service: ['service 1', 'service 2']
    },
    {
        id: "2",
        roomName: 'Phòng 2',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "3",
        roomName: 'Phòng 3',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'King',
        serviceCount: 0,
    },
    {
        id: "4",
        roomName: 'Phòng 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "5",
        roomName: 'Phòng 5',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['service 1', 'service 2', 'service 3']
    },
    {
        id: "6",
        roomName: 'Phòng 6',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['service 1', 'service 2', 'service 3']
    },
]

export default function Main() {
    const [roomList, setRoomList] = useState<Rooms[]>(rooms);

    const handleSearch = (roomId: string) => {
        const foundRooms = rooms.filter((room: { id: string; }) => room.id === roomId);
        setRoomList(foundRooms);
        if (roomId === "") {
            setRoomList(rooms)
        }
    };
    return (
        <Layout className='layout' >
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Văn B' />
                <Content className='content'>
                    <Service />
                </Content>
            </Layout>
        </Layout>
    );
};
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
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from '../../../firebase';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import { Link, Route, Routes } from 'react-router-dom';
import Service from '../components/service';
import { Rooms } from '../types';
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
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const rooms: Rooms[] = [
    {
        id: "1",
        roomName: 'Room 1',
        bedAmount: 3,
        checkinDate: '11/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 2,
        service: ['service 1', 'service 2']
    },
    {
        id: "2",
        roomName: 'Room 2',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "3",
        roomName: 'Room 3',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'King',
        serviceCount: 0,
    },
    {
        id: "4",
        roomName: 'Room 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "5",
        roomName: 'Room 5',
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
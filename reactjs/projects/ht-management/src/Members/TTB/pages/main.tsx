import React, { useState } from 'react';
import {
    PieChartOutlined,
    UsergroupAddOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Layout } from 'antd';
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from '../../../firebase';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import { Rooms } from '../types';
import RoomList from '../components/RoomList';
import { Route, Routes } from 'react-router-dom';
import Detail from './roomDetail';
import Service from '../components/service';
import Landing from '../components/Landing';
import SignUp from '../components/SignUp';

const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    items?: MenuItem[],
    link?: string
): MenuItem {
    return {
        key,
        icon,
        items,
        label,
        link
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined className='menu-item-icon' />),
    getItem('Option 2', '2', <FileTextOutlined className='menu-item-icon' />),
    getItem('User', 'sub1', <UsergroupAddOutlined className='menu-item-icon' />),
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
                    <Routes>
                        <Route path="/" element={<RoomList roomList={roomList} onSearch={handleSearch} />} />
                        <Route path=":id" element={<Detail />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
import React, { useEffect, useState } from 'react';
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
import RoomList from '../components/RoomList/RoomList';
import { Route, Routes } from 'react-router-dom';
import Detail from './roomDetail';
import Service from '../components/Service/service';
import Landing from '../components/Landing';
import SignUp from '../components/SignUp';
import Payment from '../components/Payment/paymentForm';
import Leaflet from '@src/Members/PBT/pages/Leaflet';
import InvoiceForm from '../components/Invoice';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '@src/firebase';
import Dashboard from '../components/bookingList/pages/Main';
import Login from '../components/Login';

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


export default function Main() {
    const [roomList, setRoomList] = useState<any[]>([]);
    const handleSearch = (roomId: string) => {
        const foundRooms = roomList.filter((room: { id: string; }) => room.id === roomId);
        setRoomList(foundRooms);
        if (roomId === "") {
            setRoomList(roomList)
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const roomsRef = collection(firestoreDB, 'rooms');
            const roomSnapshot = await getDocs(roomsRef);

            const rooms = Promise.all(roomSnapshot.docs.map(async (doc) => {
                const roomData = doc.data();
                const roomId = doc.id;
                const userCheckInRef = collection(roomsRef, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    id: roomId,                
                    userCheckIn: userCheckInData[0],
                };
            }));
            setRoomList(await rooms);
        };

        fetchData();
    }, []);
    /* useEffect(() => {
        const fetchData = async () => {
            const roomsRef = collection(firestoreDB, 'services');
            const roomSnapshot = await getDocs(roomsRef);

            const rooms = Promise.all(roomSnapshot.docs.map(async (doc) => {
                const roomData = doc.data();
                const roomId = doc.id;
                const userCheckInRef = collection(roomsRef, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    id: roomId,                
                    userCheckIn: userCheckInData[0],
                };
            }));
            setRoomList(await rooms);
        };

        fetchData();
    }, []); */
/*     console.log("data", data); */

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
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/leaflet" element={<Leaflet />} />
                        <Route path="/invoice" element={<InvoiceForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
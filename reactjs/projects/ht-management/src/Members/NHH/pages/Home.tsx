import React from 'react';
// import {useState} from 'react';
import {
    TeamOutlined, 
    PieChartOutlined,
    FileTextOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Layout } from 'antd';
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from '../../../firebase';
import SideBar from '../components/sidebar';
import Header from '../components/header';
// import { Rooms } from '../types';
// import RoomList from '../components/RoomList';
// import { Route, Routes } from 'react-router-dom';
// import Detail from './roomDetail';
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


// const rooms: Rooms[] = [
//     {
//         id: "1",
//         roomName: 'Room 1',
//         bedAmount: 3,
//         checkinDate: '11/12',
//         checkoutDate: '16/12',
//         roomType: 'Standard',
//         serviceCount: 2,
//         service: ['Hư ống nước', 'Hư máy lạnh']
//     },
//     {
//         id: "2",
//         roomName: 'Room 3',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'Standard',
//         serviceCount: 0,
//     },
//     {
//         id: "3",
//         roomName: 'Room 4',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'Standard',
//         serviceCount: 0,
//     },
//     {
//         id: "4",
//         roomName: 'Room 5',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'Standard',
//         serviceCount: 0,
//     },
//     {
//         id: "5",
//         roomName: 'Room 4',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'Standard',
//         serviceCount: 0,
//     },



//     {
//         id: "6",
//         roomName: 'Room 1',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'Double',
//         serviceCount: 0,
//     },
//     {
//         id: "7",
//         roomName: 'Room 2',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'Double',
//         serviceCount: 0,
//     },
//     {
//         id: "8",
//         roomName: 'Room 3',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'Double',
//         serviceCount: 0,
//     },
//     {
//         id: "9",
//         roomName: 'Room 4',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'Double',
//         serviceCount: 0,
//     },
//     {
//         id: "10",
//         roomName: 'Room 5',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'Double',
//         serviceCount: 0,
//     },
//     {
//         id: "11",
//         roomName: 'Room 1',
//         bedAmount: 3,
//         checkinDate: '18/12',
//         checkoutDate: '20/12',
//         roomType: 'King',
//         serviceCount: 0,
//     },

//     {
//         id: "12",
//         roomName: 'Room 2',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'King',
//         serviceCount: 3,
//         service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
//     },
//     {
//         id: "13",
//         roomName: 'Room 3',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'King',
//         serviceCount: 3,
//         service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
//     },
//     {
//         id: "14",
//         roomName: 'Room 4',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'King',
//         serviceCount: 3,
//         service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
//     },
//     {
//         id: "15",
//         roomName: 'Room 5',
//         bedAmount: 3,
//         checkinDate: '12/12',
//         checkoutDate: '16/12',
//         roomType: 'King',
//         serviceCount: 3,
//         service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
//     },
   
// ]

export default function Home() {
    // const [roomList, setRoomList] = useState<Rooms[]>(rooms);

    // const handleSearch = (roomId: string) => {
    //     const foundRooms = rooms.filter((room: { id: string; }) => room.id === roomId);
    //     setRoomList(foundRooms);
    //     if (roomId === "") {
    //         setRoomList(rooms)
    //     }
    // };
    return (
        <Layout className='layout' >
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Huy Hoàng' />
                <Content className='content'>
                    {/* <Routes>
                        <Route path="/" element={<RoomList roomList={roomList} onSearch={handleSearch} />} />
                        <Route path=":id" element={<Detail />} />                       
                    </Routes> */}
                    <ServicePage />              
                </Content>            
            </Layout>
        </Layout>
    );
};
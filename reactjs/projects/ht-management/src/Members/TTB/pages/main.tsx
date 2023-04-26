import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Button, Col, MenuProps, Row, Space } from 'antd';
import { Layout } from 'antd';
import Search from 'antd/es/input/Search';
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from '../../../firebase';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import Room from '../components/room';
import { Rooms } from '../types';
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
    getItem('Option 1', '1', <PieChartOutlined />),
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
    const [view, setView] = useState<FlexDirection>('row');

    const handleSearch = (roomId: string) => {
        const foundRooms = rooms.filter((room: { id: string; }) => room.id === roomId);
        setRoomList(foundRooms);
        if (roomId === "") {
            setRoomList(rooms)
        }
    };
    type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

    const styles: React.CSSProperties = {
        textAlign: "left",
        display: "flex",
        fontSize: 20,
        flexDirection: view,
    };
    function handleLineClick() {
        setView("column")
    }
    function handleGridClick() {
        setView("row")
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Văn B' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20 }}>
                        <Col span={12} style={{ textAlign: 'left', display: 'flex', flexDirection: 'row', fontSize: 20 }}>
                            <h2>Rooms</h2>
                            <Search placeholder="tìm kiếm" onChange={(e) => handleSearch(e.target.value)} style={{ marginLeft: 20, width: 200, alignItems: 'center', display: 'flex' }} />
                        </Col>
                        <Col span={12} style={{ textAlign: 'left', display: 'flex', flexDirection: 'row-reverse', fontSize: 20 }}>
                            <Space>
                                <Button onClick={handleLineClick} icon={<UnorderedListOutlined />}>
                                    Line
                                </Button>
                            </Space>
                            <Space>
                                <Button onClick={handleGridClick} icon={<AppstoreOutlined />}>
                                    Grid
                                </Button>
                            </Space>
                            <h2 style={{ marginRight: 10 }}>View: </h2>
                        </Col>
                        <h2>Standard</h2>
                        <Col span={24} style={styles}>
                            {roomList
                                .filter((room: Rooms) => room.roomType === 'Standard')
                                .map((room: Rooms) => (
                                    <Room key={room.id} room={room} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                                ))
                            }
                        </Col>
                        <h2>Double</h2>
                        <Col span={24} style={styles}>
                            {roomList
                                .filter((room: Rooms) => room.roomType === 'Double')
                                .map((room: Rooms) => (
                                    <Room room={room} key={room.id} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                                ))
                            }
                        </Col>
                        <h2>King</h2>
                        <Col span={24} style={styles}>
                            {roomList
                                .filter((room: Rooms) => room.roomType === 'King')
                                .map((room: Rooms) => (
                                    <Room room={room} key={room.id} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                                ))
                            }
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};
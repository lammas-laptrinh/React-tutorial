
import { useState, useEffect } from 'react'
import { Col, MenuProps, Row } from 'antd';

import { Layout } from 'antd';
import { UnorderedListOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Content } = Layout;
import {

    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Header from '../Header/Header';
import Search from '../Search/Search';
import SiderLayout from '../Sider/SiderLayout';
import './RoomService.css'

import { db } from '../firebase';
import {
    CollectionReference,
    collection,
    onSnapshot,
    getDocs,
    where, query,
} from "firebase/firestore";
import Room from './Room';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem(<PieChartOutlined style={{ fontSize: 20 }} />),
    getItem(<DesktopOutlined style={{ fontSize: 20 }} />),
    getItem(<Link to="/service"><UserOutlined style={{ fontSize: 20 }} /></Link>, []),
];


type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
function RoomService() {
    const [room, setRoom] = useState<any[]>([]);
    const [roomtype, setRoomTypes] = useState<any[]>([]);
    const [Direction, setFlexDirection] = useState<FlexDirection>('row');
    const [checkInData, setCheckInData] = useState([]);
    // const { rooms } = props;
    console.log(roomtype);

    const handleListClick = () => {
        setFlexDirection('column');
    };
    const handleGridClick = () => {
        setFlexDirection('row');
    };
    useEffect(() => {
        const colRef = collection(db, 'rooms');
        const unsubscribe = onSnapshot(
            colRef,
            async (snapshot) => {
                const respon = snapshot.docs.map(async (doc) => {
                    const roomData = doc.data();

                    // Truy cập vào các collection con trong document "rooms"
                    const collection1Ref = collection(doc.ref, 'userRequest');
                    const collection2Ref = collection(doc.ref, 'usersCheckIn');

                    // Lấy dữ liệu của các collection con
                    const collection1Snapshot = await getDocs(collection1Ref);
                    const UserRequest = collection1Snapshot.docs.map((doc) => doc.data());



                    const collection2Snapshot = await getDocs(collection2Ref);
                    const UsersCheckIn = collection2Snapshot.docs.map((doc) => doc.data());
                    console.log(UsersCheckIn);
                    // Đếm số lượng item trong UserRequest
                    const userRequestCount = UserRequest.length;

                    // Lưu lại data của item trong UserRequest
                    const userRequestData = UserRequest.map((item) => {
                        const { content } = item;
                        return { content };
                    });


                    // Lấy tên roomTypeId từ collection roomTypes
                    const roomTypeId = roomData.roomTypeId;
                    const roomTypeQuery = query(collection(db, 'roomTypes'), where('id', '==', roomTypeId));
                    const roomTypeSnapshot = await getDocs(roomTypeQuery);
                    const roomTypeData = roomTypeSnapshot.docs[0]?.data();
                    const roomTypeName = roomTypeData?.name || '';

                    return {
                        ...roomData,
                        UserRequest,
                        UsersCheckIn,
                        roomTypeName, // Thêm field roomTypeName vào object roomData
                        userRequestCount, // Thêm field userRequestCount vào object roomData
                        userRequestData, // Thêm field userRequestData vào object roomData
                    };
                });

                Promise.all(respon).then((results) => {
                    setRoom(results);
                    const checkInDataArray: any = [];
                    results.forEach((room) => {
                        room.UsersCheckIn.forEach((checkInData) => {
                            const { checkIn, checkOut, userId } = checkInData;
                            checkInDataArray.push({ checkIn, checkOut, userId });
                        });
                    });

                    // Lưu dữ liệu vào state
                    setCheckInData(checkInDataArray);
                });
            },
            (error) => {
                console.log(error);
            }
        );

        return () => unsubscribe();
    }, []);

    function formatDate(timestamp: any) {
        const seconds = timestamp.seconds;
        const dateObj = new Date(seconds * 1000);

        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();

        return `${day}/${month}/${year}`;
    }
    console.log(checkInData);
    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'roomTypes');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return doc.data();
                });
                setRoomTypes(respon);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);

    console.log(room);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row  >
                <SiderLayout name='DTD' item={items} />
            </Row>
            <Layout className="site-layout">
                <Header version='Version 1.0.0' name='Phạm Bá Thái' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20, marginBottom: 20 }}>
                        <Col span={22} style={{ justifyContent: 'space-between', textAlign: 'left', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Row>
                                    <h2>Rooms</h2>
                                </Row>
                                <Row style={{ width: 200, height: 40, borderRadius: 100, marginLeft: 20 }}><Search  title='Tìm kiếm ....' /></Row>
                            </Row>
                            <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '20px' }}>View:</span>
                                <div className='gird-view' onClick={() => handleGridClick()}>
                                    <InsertRowBelowOutlined className='grid-list-icon' /> <span style={{ fontSize: '20px' }}> Grid</span>
                                </div>
                                <Row className='list-view' onClick={() => handleListClick()}>
                                    <UnorderedListOutlined className='grid-list-icon' /> <span style={{ fontSize: '20px' }}> Line</span>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                    <>
                        <h2>All Room</h2>
                        <Row style={{ display: 'flex', flexDirection: Direction }}>
                            {room.map((roomData, index) => (
                                <div key={index}>
                                    {roomData.UsersCheckIn.map((checkInData: any, dataIndex: any) => {
                                        const { checkIn, checkOut } = checkInData;
                                        const FormatCheckIn = formatDate(checkIn);
                                        const FormatCheckOut = formatDate(checkOut);
                                        const endDate = FormatCheckOut;
                                        const date = FormatCheckIn;
                                        return (
                                            <Room
                                                key={dataIndex}
                                                people="3"
                                                roomName={roomData.roomTypeName}
                                                date={date}
                                                endDate={endDate}
                                                room={roomData}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </Row>
                        <h2>Luxury</h2>
                        <Row style={{ display: 'flex', flexDirection: 'row' }}>
                            {room
                                .filter((roomData) => roomData.roomTypeId === 'l01')
                                .map((roomData, index) => (
                                    <div key={index}>
                                        {roomData.UsersCheckIn.map((checkInData: any, dataIndex: any) => {
                                            const { checkIn, checkOut } = checkInData;
                                            const FormatCheckIn = formatDate(checkIn);
                                            const FormatCheckOut = formatDate(checkOut);
                                            const endDate = FormatCheckOut;
                                            const date = FormatCheckIn;
                                            return (
                                                <Room
                                                    key={dataIndex}
                                                    people="3"
                                                    roomName={roomData.roomTypeName}
                                                    date={date}
                                                    endDate={endDate}
                                                    room={roomData}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                        </Row>

                        <h2>Lanai</h2>
                        <Row style={{ display: 'flex', flexDirection: 'row' }}>
                            {room
                                .filter((roomData) => roomData.roomTypeId === 'l02')
                                .map((roomData, index) => (
                                    <div key={index}>
                                        {roomData.UsersCheckIn.map((checkInData: any, dataIndex: any) => {
                                            const { checkIn, checkOut } = checkInData;
                                            const FormatCheckIn = formatDate(checkIn);
                                            const FormatCheckOut = formatDate(checkOut);
                                            const endDate = FormatCheckOut;
                                            const date = FormatCheckIn;
                                            return (
                                                <Room
                                                    key={dataIndex}
                                                    people="3"
                                                    roomName={roomData.roomTypeName}
                                                    date={date}
                                                    endDate={endDate}
                                                    room={roomData}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                        </Row>
                        <h2>Single</h2>
                        <Row style={{ display: 'flex', flexDirection: 'row' }}>
                            {room
                                .filter((roomData) => roomData.roomTypeId === 's01')
                                .map((roomData, index) => (
                                    <div key={index}>
                                        {roomData.UsersCheckIn.map((checkInData: any, dataIndex: any) => {
                                            const { checkIn, checkOut } = checkInData;
                                            const FormatCheckIn = formatDate(checkIn);
                                            const FormatCheckOut = formatDate(checkOut);
                                            const endDate = FormatCheckOut;
                                            const date = FormatCheckIn;
                                            return (
                                                <Room
                                                    key={dataIndex}
                                                    people="3"
                                                    roomName={roomData.roomTypeName}
                                                    date={date}
                                                    endDate={endDate}
                                                    room={roomData}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                        </Row>
                    </>

                </Content>
            </Layout>
        </Layout>

    )
}

export default RoomService
import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Space, Tooltip, Button } from 'antd';
import View from './View';
import SearchInput from './SearchInput';
import SmileIcons from './SmileIcons';
import './FormRoom.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}

const FormRoom: React.FC<Props> = ({ isGridView, onToggleView, searchValue, onSearch }) => {
    const [roomList, setRoomList] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const roomsRef = collection(db, 'rooms');
            const roomSnapshot = await getDocs(roomsRef);

            const rooms = Promise.all(roomSnapshot.docs.map(async (doc) => {
                const roomData = doc.data();
                const roomId = doc.id;

                const userCheckInRef = collection(roomsRef, roomId, 'userCheckIn');
                const userServiceRef = collection(roomsRef, roomId, 'userService');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userServiceSnapshot = await getDocs(userServiceRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                const userServiceData = userServiceSnapshot.docs.map(serviceDoc => serviceDoc.data().service);
                return {
                    ...roomData,
                    id: roomId,
                    userCheckIn: userCheckInData[0],
                    userService: userServiceData[0],
                };
            }));
            setRoomList(await rooms);
        };

        fetchData();
    }, []);

    console.log('roomList:', roomList);
    const roomId = localStorage.getItem('roomId');


    function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
        const date = new Date(timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}/${month}`;
    }
    const { Meta } = Card;
    const filteredRooms = roomList.filter((roomList) =>
        roomList?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    const type1Rooms = filteredRooms.filter((roomList) => roomList.roomTypeId === 'l01');
    const type2Rooms = filteredRooms.filter((roomList) => roomList.roomTypeId === 'l02');
    const type3Rooms = filteredRooms.filter((roomList) => roomList.roomTypeId === 'q01');
    return (
        <>
            <div className='form-room'>
                <Row>
                    <Col span={12} style={{ display: 'flex', alignItems: 'center' }}><h1 className='room-name'>Rooms</h1>
                        <SearchInput onSearch={onSearch} /></Col>
                    <Col span={12} style={{ textAlign: 'end', marginTop: 40 }}>
                        <span className='view'>Views :</span> <View isGridView={isGridView} onToggleView={onToggleView} /></Col>
                </Row>
                <p className='title'>Standard</p>
                <Row gutter={32} >
                    {type1Rooms.map((room) => (
                        <Col span={isGridView ? 4 : 23} key={room?.name} className='room-list'>
                            <Link to={`/room/${room.id}`}>
                                <Card title={room?.name}
                                    extra={
                                        room.userService.length ? (
                                            <Tooltip color='#FC7D72' title={room.userService.map((service: any, index: any) => (
                                                <p key={index}>{service}</p>
                                            ))}>
                                                <Button type="link" className="btn">
                                                    {room.userService.length}
                                                </Button>
                                            </Tooltip>
                                        ) : null
                                    }
                                    className='card'>
                                    <SmileIcons />
                                    <Meta
                                        title={
                                            <Space>
                                                <p className='time'>{room.userCheckIn ? formatDate(room.userCheckIn?.checkIn) + " - " + formatDate(room.userCheckIn?.checkOut) : ""}</p>
                                            </Space>
                                        }
                                    />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row >
            </div >
        </>
    );
};

export default FormRoom;
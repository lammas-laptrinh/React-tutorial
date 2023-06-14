import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Row, Col, Image } from 'antd';
import RoomDetail_1 from "../../Img/detail.svg";
import { UserAvatarGroup } from '../Booking/Avatar';
import { RoomStart } from '../Booking/Start';
import './Detail.css'
import imgbooking from '../../Img/img-booking.svg';
const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [room, setRoom] = useState<any>(null);
    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const roomRef = doc(collection(db, 'rooms'), id);
                const roomSnapshot = await getDoc(roomRef);
                if (roomSnapshot.exists()) {
                    const roomData = {
                        id: roomSnapshot.id,
                        roomTypeId: roomSnapshot.data().roomTypeId,
                        statusId: roomSnapshot.data().statusId,
                        ...roomSnapshot.data()
                    };
                    setRoom(roomData);
                } else {
                    console.log('Room not found');
                }
            } catch (error) {
                console.error('Error retrieving room data:', error);
            }
        };

        fetchRoomData()
    }, [id]);
    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Image src={RoomDetail_1} preview={false} />
                </Col>
                <Col span={10} className='col-form-detail'>

                    <h2 className='king-detail'>{room.name}</h2>
                    <RoomStart />
                    <Row className='book-avatar-detail'>
                        <UserAvatarGroup />
                        <p>39 review</p>
                    </Row>
                    <Row className='book-title-detail'>
                        <p className='lorem-detail'>{room.name}</p>
                        <h2 className='more-title-detail'>{room.description}</h2>

                    </Row>
                    <Row>
                        <Image src={imgbooking} preview={false} className='img-book' />
                    </Row>
                    <Link to="/service">
                        <ArrowRightOutlined style={{ fontSize: 35, color: '#000', marginLeft: 20 }} />
                    </Link>
                </Col>
            </Row>
        </>
    );
};

export default Detail;
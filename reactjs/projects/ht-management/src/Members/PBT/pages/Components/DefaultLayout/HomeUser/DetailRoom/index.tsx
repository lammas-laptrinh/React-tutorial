import { Col, Row, Rate, Layout, Avatar, Tooltip, DatePicker, Space, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AntDesignOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './DetailRoom.css'
import { Link } from 'react-router-dom';
import {
    CollectionReference,
    collection,
    onSnapshot,
} from "firebase/firestore";
import { db } from '../../firebase';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;



function DetailRoom() {
    const [roomTypes, setRoomTypes] = useState<any[]>([]);

    const { typeroom } = useParams();
    const [roomName, setRoomName] = useState<string>('');

    console.log(roomTypes);


    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'roomTypes');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return doc.data();
                });
                setRoomTypes(respon);
                const filteredRoom = respon.find((room) => room.id === typeroom);
                if (filteredRoom) {
                    setRoomName(filteredRoom.name);
                }
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);

    const [services, setServices] = useState<any[]>([]);
    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'rooms');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return doc.data();
                });
                setServices(respon);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);
    console.log(services);



    const handleGoBack = () => {
        window.history.back();
    };
    const handleDateChange = (dateStrings: any) => {
        const [startDate, endDate] = dateStrings;
        localStorage.removeItem('startDate');
        localStorage.removeItem('endDate');

        localStorage.setItem('startDate', startDate);
        localStorage.setItem('endDate', endDate);
    }; 
    return (
        <Layout className='container' >
            <Row className='wrapper-content'>
                <Row className='room-image-detail'>
                    <Row>
                        <img className='i-room' src='https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg' />
                    </Row>
                </Row>
                <Row className='room-detail'>
                    <Row className='back-wrapper'>
                        <ArrowLeftOutlined className='icon-back' />
                        <span className='back' onClick={handleGoBack}>Quay về </span>
                    </Row>
                    <Row className='title-room-wrapper'>
                        <h1 className='title-room-detail-home'>{roomName} room</h1>
                    </Row>
                    <Row>
                        <Rate allowHalf defaultValue={4.5} />
                    </Row>
                    <Row className='avatar-wrapper'>
                        <Row >
                            <Avatar.Group
                                maxCount={2}
                                maxPopoverTrigger="click"
                                size="large"
                                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                            >
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        </Row>
                        <Row>
                            <span className='span-content'>39 review</span>
                        </Row>
                    </Row>

                    <Col className='lorem'>
                        <span className='span-content '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ipsum quae iste totam quam illum officia blanditiis. Ullam voluptas et magnam totam quia facere vitae illo culpa minus eum?</span>
                        <span className='span-content' style={{ marginTop: '15px', fontWeight: '500', textDecoration: 'underline' }}>Xem thêm</span>
                    </Col>
                    <Col className='service'>
                        <img className='service-img' src='https://ss4.vercel.app/assets/feature-163723e0.svg' />
                    </Col>
                    <Col className='space-time'>
                        <Space direction="vertical" size={12}>
                            <RangePicker onChange={handleDateChange} />
                        </Space>
                    </Col>
                    <Col className='action' >
                        <Link to={`/room-detail/${typeroom}/signup`}>
                            <Button  className='action-button-room'>Chọn phòng</Button>
                        </Link>
                    </Col>

                </Row>

            </Row>
        </Layout>
    )
}

export default DetailRoom
import { Col, Row, Image } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { RoomData } from './type';
import './Desc.css';
import Payment_1 from '../PaymentDetail/img/Desc.svg';

export default function Desc() {
    const roomData: RoomData[] = [
        {
            src: Payment_1,
            title: 'King room',
            description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            services: 'Wifi, Gym, food',
            time: '12/06/2023 - 12/08/2023'
        },
    ];

    return (
        <>
            {
                roomData.map((room, index) => (
                    <Col key={index}>
                        <Row>
                            <Row>
                                <Col>
                                    <Image src={room.src} />
                                </Col>
                            </Row>
                            <Row className='form'>
                                <Col span={12}>
                                    <h5 className="title">{room.title}</h5>
                                </Col>
                                <Col>
                                    <p className="description">{room.description}</p>
                                </Col>
                            </Row>
                            <Row className="title-line" >
                                <Col span={12}>
                                    <h5 className="title">Dịch vụ</h5>
                                </Col>
                                <Col span={12}>
                                    <p className={`title ${"text-right"}`}>{room.services}</p>
                                </Col>
                            </Row>
                            <Row className="title-time" >
                                <Col span={12}>
                                    <h5 className="title">Thời gian</h5>
                                </Col>
                                <Col span={12}>
                                    <p className={`title ${"text-right"}`}>{room.time}</p>
                                </Col>
                            </Row>
                            <Row className="title-line">
                                <Col span={24}>
                                    <p className="title checkmark">
                                        <CheckCircleOutlined /> Secure Payment
                                    </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col >
                ))
            }
        </>
    );
}

import { Col, Row, Image, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
import Payment_1 from '../../img/image 19.svg';
import { RoomData } from './type';
import './Desc.css'
export default function Desc() {

    const roomData: RoomData[] = [
        {
            src: Payment_1,
            title: 'King room',
            description: 'orem Ipsum has been the industry\'s standard dummy text ever since',
            services: 'Wifi, Gym, food',
            time: '12/06/2023 - 12/08/2023'
        },
    ];
    return (
        <>
            {
                roomData.map((room, index) => (
                    <Col span={12} key={index}>
                        <Image src={room.src} style={{ width: 654, height: 380 }} />
                        <Title style={{ fontSize: 35, lineHeight: '24px' }}>{room.title}</Title>
                        <Title style={{ fontSize: 20, lineHeight: '27px' }}>{room.description}</Title>
                        <Row className="title-line">
                            <Col span={12} style={{ fontSize: 26, lineHeight: '24px', marginBottom: 50 }}>
                                Dịch vụ
                            </Col>
                            <Col span={12} style={{ fontSize: 26, lineHeight: '24px', textAlign: 'center' }}>{room.services}</Col>
                        </Row>
                        <Row>
                            <Col span={12} style={{ fontSize: 26, lineHeight: '24px' }}>
                                Thời gian
                            </Col>
                            <Col span={12} style={{ fontSize: 26, lineHeight: '24px' }}>{room.time}</Col>
                        </Row>
                        <Row className="title-line" >
                            <Title style={{ fontSize: 26, lineHeight: '24px' }}>
                                <CheckCircleOutlined /> Secure Payment
                            </Title>
                        </Row>
                    </Col>
                ))
            }
        </>
    );
}

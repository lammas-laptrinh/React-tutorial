import { Row, Col, Image } from "antd";
import './index.css'
import RoomType_1 from '../../LPQT/assets/images/land-room-type-1.svg';
import RoomType_2 from "../../LPQT/assets/images/land-room-type-2.svg";
import RoomType_3 from "../../LPQT/assets/images/land-room-type-3.svg";
import RoomType_4 from "../../LPQT/assets/images/land-room-type-4.svg";
import RoomType_5 from "../../LPQT/assets/images/land-room-type-5.svg";
import RoomType_6 from "../../LPQT/assets/images/land-room-type-6.svg";
import RoomType_7 from "../../LPQT/assets/images/land-room-type-7.svg";
import RoomType_8 from "../../LPQT/assets/images/land-room-type-8.svg";
const RoomType = () => {
    return (
        <div style={{ width: '100vw' }}>
            <div className="room">Room type</div>
            <Row className="row">
                <Col className="col">
                    <h2 className="header">Single Room</h2>
                </Col>
                <Col className="col">
                    <h2 className="header">Double Room</h2>
                </Col>
                <Col className="col">
                    <h2 className="header">King Room</h2>
                </Col>
                <Col className="col">
                    <h2 className="header">Queen Room</h2>
                </Col>
                <Col className="col">
                    <h2 className="header">Lanai Room</h2>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={5} className="room-col">
                    <Image src={RoomType_1} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_2} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_3} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_4} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_5} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_6} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">Lorem Ipsum is simply dummy text of the printing .</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_7} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={5} className="room-col">
                    <Image src={RoomType_8} preview={false} className="roomTypeImage" />
                    <h2 className="title">Luxury room</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
            </Row>
        </div>
    );
};

export default RoomType;

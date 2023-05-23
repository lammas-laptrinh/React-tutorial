import { Row, Col, Typography } from "antd";
import './index.css'
const { Title } = Typography;
const Service = () => {
    return (
        <div style={{ width: '100vw', height: 484, backgroundColor: '#F5F3F4', marginTop: 120 }}>
            <Title className="service">Services</Title>
            <Row>
                <Col span={6} className="service-col">
                    <div className='serviceCircle'></div>
                    <h2 className="title">Lorem Ipsum</h2>
                    <Title className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</Title>
                </Col>
                <Col span={6} className="service-col">
                    <div className='serviceCircle'></div>
                    <h2 className="title">Lorem Ipsum</h2>
                    <Title className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</Title>
                </Col>
                <Col span={6} className="service-col">
                    <div className='serviceCircle'></div>
                    <h2 className="title">Lorem Ipsum</h2>
                    <Title className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</Title>
                </Col>
                <Col span={6} className="service-col">
                    <div className='serviceCircle'></div>
                    <h2 className="title">Lorem Ipsum</h2>
                    <Title className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</Title>
                </Col>
            </Row>
        </div>
    );
};

export default Service;

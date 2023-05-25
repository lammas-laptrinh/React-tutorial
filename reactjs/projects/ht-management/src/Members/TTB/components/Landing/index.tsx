import { Layout, Row, Col } from 'antd';
import Footer from './Footer';
import Gallery from './Gallery';
import Services from './Services';
import RoomType from './RoomType'
import HeaderBar from './HeaderBar';
import './index.css'
const Landing = () => {
    return (
        <div className='landing'>
            <Row>
                <Col className='room-header'>
                    <HeaderBar />
                </Col>
            </Row>
            <Row>
                <Col className='room-type'>
                    <RoomType />
                </Col>
            </Row>
            <Row>
                <Col className='landing-service'>
                    <Services />
                </Col>
            </Row>
            <Row >
                <Col className='galley'>
                    <Gallery />
                </Col>
            </Row>                    
            <Row>
                <Col className="footer-col">
                    <Footer />
                </Col>
            </Row>

        </div>
    );
};

export default Landing;

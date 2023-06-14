import { Button, Image, Row, Col } from "antd";
import { PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './HeaderBar.css';
import HeaderBar_1 from "../../static/images/headerbar.svg";


const HeaderBar: React.FC = () => {
    return (
        <>
            <div className="header-container">
                <Row className="header-row-top">
                    <Col span={24} className="top" >
                        <h2 className="top-desc">Home</h2>
                        <h2 className="top-desc">Services</h2>
                        <h2 className="top-desc">Room</h2>
                        <h2 className="top-desc">About us</h2>
                    </Col>
                </Row>
                <div className="overlay-bottom">
                    <Row className="header-row-bottom">
                        <Col className="bottom-1">
                            <h2 className="bottom-desc-1">
                                <PhoneOutlined />090 - 000 - 000
                            </h2>
                        </Col>
                        <Col className="bottom-2">
                            <h2 className="bottom-desc-2">Save 10% off booking right now!</h2>
                        </Col>
                        <Col className="bottom-3">
                            <Button className="bottom-desc-3">
                                <h2>Book Now</h2><ArrowRightOutlined style={{ marginLeft: 40 }} />
                            </Button>
                        </Col>
                    </Row>
                </div >
            </div >
        </>
    );
}

export default HeaderBar;

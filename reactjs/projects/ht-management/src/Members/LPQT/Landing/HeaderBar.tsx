import { Button, Row, Col } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.css'
import HeaderBar_1 from '../../LPQT/assets/images/HeaderBarImg.jpg';
import Phone from '../../LPQT/assets/images/phone.png';


const HeaderBar: React.FC = () => {
    return (
        <div>
            <div className="header-container" style={{ width: '96vw ', height: 600, marginTop: 20, position: 'relative' }}>
                <div style={{ backgroundImage: `url(${HeaderBar_1})`, height: '100%', borderRadius: 40, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                <div className="overlay-top">
                    <Row className="header-row-top">
                        <Col className="top">
                            <h2 className="top-desc">Home</h2>
                            <h2 className="top-desc">Services</h2>
                            <h2 className="top-desc">Room</h2>
                            <h2 className="top-desc">About us</h2>
                        </Col>
                    </Row>
                </div>
                <div className="header-row-bottom">
                    <div className="bottom-1">
                        <div style={{ backgroundImage: `url(${Phone})`, height: 40, width: 35, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: 30, marginRight: 20 }} />
                        <h2 className="bottom-desc-1">
                            090-000-000
                        </h2>
                    </div>
                    <div className="bottom-2">
                        <h2 className="bottom-desc-2">Save 10% off booking right now!</h2>
                    </div>
                    <div className="bottom-3">
                        <Button className="bottom-desc-3">
                            <h2>Book Now</h2><ArrowRightOutlined style={{ marginLeft: 70 }} />
                        </Button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default HeaderBar;

import { Button, Row, Col } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.css'
import HeaderBar_1 from '../../LPQT/assets/images/HeaderBarImg.jpg';
import Phone from '../../LPQT/assets/images/phone.png';
import { Link } from "react-router-dom";


const HeaderBar: React.FC = () => {
    return (
        <div>
            <div className="header-container">
                <div className='HeaderImage' style={{ backgroundImage: `url(${HeaderBar_1})` }} />
                <div className="overlay-top">
                    <Row className="header-row-top">
                        <Col className="top">
                            <Link to={'/'}>
                                <h2 className="top-desc">Home</h2>
                            </Link>
                            <Link to={'/service'}>
                                <h2 className="top-desc">Services</h2>
                            </Link>
                            <Link to={'/room'}>
                                <h2 className="top-desc">Room</h2>
                            </Link>
                            <Link to={'/aboutUs'}>
                                <h2 className="top-desc">About us</h2>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="header-row-bottom">
                    <div className="bottom-1">
                        <div className='PhoneImage' style={{ backgroundImage: `url(${Phone})` }} />
                        <h2 className="bottom-desc-1">
                            090-000-000
                        </h2>
                    </div>
                    <div className="bottom-2">
                        <h2 className="bottom-desc-2">Save 10% off booking right now!</h2>
                    </div>

                    <div className="bottom-3">
                        <Link to={'/room'}>
                            <Button className="bottom-desc-3">
                                <h2>Book Now</h2><ArrowRightOutlined className="ML70" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div >
        </div>
    );
}

export default HeaderBar;

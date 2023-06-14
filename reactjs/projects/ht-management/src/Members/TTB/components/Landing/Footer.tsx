import { Row, Col, Image } from "antd";
import Contact from "../../static/images/land-contact.svg";
import Content from "../../static/images/land-content.svg";
import './Footer.css'
const Footer = () => {
    return (
        <>
            <Row className="footer" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="footer-img"></div>
                <Image src={Contact} preview={false} style={{ margin: '100px 0 0 0' }} />
                <Row style={{ height: 210, marginTop: 100, display: 'flex' }}>
                    <Col className="about-col-1">
                        <h2 className="title">About</h2>
                        <p className="desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                    </Col>
                    <Col className="about-col">
                        <h2 className="title">Room</h2>
                        <p className="desc">
                            Single
                            <br />
                            King
                            <br />
                            Queen
                            <br />
                            Double
                            <br />
                            Lanai
                        </p>
                    </Col>
                    <Col className="about-col">
                        <h2 className="title">Links</h2>
                        <p className="desc">
                            About
                            <br />
                            Service
                            <br />
                            FAQ
                            <br />
                            Term & Condition

                        </p>
                    </Col>
                    <Col className="about-col">
                        <h2 className="title">Social</h2>
                        <p className="desc">
                            Facebook
                            <br />
                            Twitter
                            <br />
                            Instagram
                        </p>
                    </Col>
                    <Col className="about-col">
                        <h2 className="title">Contact</h2>
                        <p className="desc">
                            Address
                            <br />
                            090000000
                            <br />
                            info@yourmain.com
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="copy">Copyright 2023. design by dtd</p>
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export default Footer;

import { Row, Col, Typography, Image } from "antd";
import './Gallery.css'
import Gallery_1 from "../../static/images/land-gallery-1.svg";
import Gallery_2 from "../../static/images/land-gallery-2.svg";
import Gallery_3 from "../../static/images/land-gallery-3.svg";
const { Title } = Typography;
const Gallery = () => {
    return (
        <Row className="gallery-section">
            <Col span={9} className="gallery-col">
                <Title className="title">Our Gallery</Title>
                <Title className="desc">orem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,</Title>
            </Col>
            <Col className="img-section" span={5}>
                <Image src={Gallery_1} preview={false} />
            </Col>
            <Col className="img-section" span={5}>
                <Image src={Gallery_2} preview={false} />
            </Col>
            <Col className="img-section last" /* style={{backgroundColor:'red'}} */ span={5}>
                <Image src={Gallery_3} preview={false} />
            </Col>
        </Row>
    );
};

export default Gallery;

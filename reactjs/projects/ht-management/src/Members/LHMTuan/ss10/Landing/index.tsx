import { Layout, Row, Col } from "antd";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Services from "./Services";
import RoomType from "./RoomType";
import HeaderBar from "./HeaderBar";
import "./index.css";
const Landing = () => {
  return (
    <Layout className="Layout">
      <Row>
        <Col className="room-header">
          <HeaderBar />
        </Col>
      </Row>
      <Row>
        <Col className="room-type">
          <RoomType />
        </Col>
      </Row>
      <Row>
        <Col className="services">
          <Services />
        </Col>
      </Row>
      <Row>
        <Col className="galley">
          <Gallery />
        </Col>
      </Row>
      <Row>
        <Col className="footer-col">
          <Footer />
        </Col>
      </Row>
    </Layout>
  );
};

export default Landing;

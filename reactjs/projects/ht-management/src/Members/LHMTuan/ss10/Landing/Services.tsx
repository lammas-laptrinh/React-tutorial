import { Row, Col, Typography, Image } from "antd";

import Service_1 from "../Img/land-service.svg";
import Service_2 from "../Img/land-service.svg";
import Service_3 from "../Img/land-service.svg";
import Service_4 from "../Img/land-service.svg";
const { Title } = Typography;
const Service = () => {
  return (
    <div className="box">
      <div className="services">Services</div>
      <Row>
        <Col span={6} className="service-col">
          <Image src={Service_1} preview={false} className="img" />
          <h2 className="title">Lorem Ipsum</h2>
          <Title className="desc">
            orem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Title>
        </Col>
        <Col span={6} className="service-col">
          <Image src={Service_2} preview={false} className="img" />
          <h2 className="title">Lorem Ipsum</h2>
          <Title className="desc">
            orem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Title>
        </Col>
        <Col span={6} className="service-col">
          <Image src={Service_3} preview={false} className="img" />
          <h2 className="title">Lorem Ipsum</h2>
          <Title className="desc">
            orem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Title>
        </Col>
        <Col span={6} className="service-col">
          <Image src={Service_4} preview={false} className="img" />
          <h2 className="title">Lorem Ipsum</h2>
          <Title className="desc">
            orem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Service;

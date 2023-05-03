
import React from 'react';
import { Col, Row } from 'antd';
import PaymentDetailRight from "./DesRoom";
import FormCheckOut from './FormCheckOut';
const App: React.FC = () => (
  <>
      <div className="Payment" style={{margin : "35px 90px 0px 90px"}}>
        <Row>
          <Col span={15}><FormCheckOut /></Col>
          <Col span={9} ><PaymentDetailRight /> </Col>
        </Row>
      </div>
  </>
);

export default App;
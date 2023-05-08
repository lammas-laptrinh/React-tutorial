import { Col, Row } from "antd";
import PaymentInputForm from "./paymentInputForm";
import PaymentRoomDetail from "./paymentRoomDetail";
import '../static/index.css'

export default function Payment() {
    return (
        <Row className="payment">
            <Col span={13}>
                <PaymentInputForm />
            </Col>
            <Col span={11}>
                <PaymentRoomDetail/>
            </Col>
        </Row>
    )
}
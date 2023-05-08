import { Button, Col, Row, Space } from "antd";
import InputField from "../input";
import SubInfo from "./subInfo";

export default function PaymentInputForm() {
    return (
        <form>
            <Space className="paymentInput" >
                <div className="title">
                    <h2>Payment Detail</h2>
                </div>
                <InputField title="Email" />
                <InputField title="Card Number" placeholder="xxxx xxxx xxxx xxxx" />
                <Row>
                    <Col span={12} style={{ paddingRight: 20 }}>
                        <InputField title="Expiry Date" placeholder="mm/yy" />
                    </Col>
                    <Col span={12}>
                        <InputField title="cvv" placeholder="xxx"></InputField>
                    </Col>
                </Row>
                <div className="spacing"> </div>
                <SubInfo leftLabel="Subtotal" rightLabel="100$" boldRight/>
                <SubInfo leftLabel="Discount" rightLabel="0$" boldRight/>
                <div className="border"></div>
                <SubInfo leftLabel="Total Amount" rightLabel="100$" boldRight/>
                <Button className="submit-btn" type="primary" block>
                    Submit
                </Button>
            </Space>
        </form>
    )
}
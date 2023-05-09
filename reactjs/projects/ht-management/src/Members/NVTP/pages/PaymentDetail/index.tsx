import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Col, Row, Input, Form, Button, Typography } from 'antd';
import Desc from '../PaymentDetail/Desc'
import Total from '../PaymentDetail/Total'
import PayPalButton from './PayPalButton';
import { PaymentDetailForm } from './type'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const { Title } = Typography;
import './index.css'
export default function PaymentDetail() {
    const [email_address, setEmail] = useState('');
    const [card_number, setCard] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const [CVV, setCvv] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleValidation = () => {
        if (!email_address || !card_number || !expiry_date || !CVV) {
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (handleValidation()) {
            setSubmitted(true);
        }
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "Afyq4GU8bCtnnAjmJOaw0tPJpqMLl5hPq-Lg5aSovTIPBNVIM3XcETjNd1CbeAXLcvmt-Rkvb56m1P2L" }}>
            <Row>
                <Col span={12}>
                    <Title style={{ marginLeft: 100 }}>Payment detail</Title>
                    <Form<PaymentDetailForm> onFinish={handleSubmit} style={{ width: 473, marginLeft: 100 }}>
                        <Form.Item label='Email' labelCol={{ span: 24 }} name="email_address" rules={[{ required: true, message: 'Please enter your email address' }]}>
                            <Input placeholder="@Email.com" value={email_address} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <Form.Item label='Card Number' labelCol={{ span: 24 }} name="card_number" rules={[{ required: true, message: 'Please enter your card number' }]}>
                            <Input placeholder="xxxx xxxx xxxx xxxx" value={card_number} onChange={(e) => setCard(e.target.value)} />
                        </Form.Item>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Expiry Date' labelCol={{ span: 24 }} name="expiry_date" wrapperCol={{ span: 20 }} rules={[{ required: true, message: 'Please enter the expiry date' }]}>
                                    <Input placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='CVV' labelCol={{ span: 24 }} name="CVV" wrapperCol={{ span: 24 }} rules={[{ required: true, message: 'Please enter the CVV' }]}>
                                    <Input value={CVV} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <ToastContainer />
                        <Total />
                        {submitted ? (
                            <PayPalButton />
                        ) : (
                            <Form.Item>
                                <Button htmlType="submit" style={{ backgroundColor: '#ED712E', color: '#FAFAFA', width: 473, height: 74 }}>Make payment</Button>
                            </Form.Item>
                        )}
                    </Form>
                </Col>
                <Desc />
            </Row>
        </PayPalScriptProvider >
    );
}
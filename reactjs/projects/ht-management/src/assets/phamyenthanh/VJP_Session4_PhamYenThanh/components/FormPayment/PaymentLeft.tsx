import { Button, Checkbox, Col, Form, Input, Row, Space } from "antd"
import React, { useState } from "react";

import PlaymentRitght from "./PlaymentRitght";
import { toast } from 'react-toastify';
const PaymentLeft = () => {

    const [email, setemail] = useState("")
    const [number, setNumber] = useState("");
    const [date, setdate] = useState("")
    const [cvv, setcvv] = useState("");
    const [checked, setchecked] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        if (input.length <= 16) {
            const formattedNumber = input.replace(/(\d{4})/g, "$1 ");
            setNumber(formattedNumber.trim());
            setNumber(e.target.value)
        }

    
    };

    const handleValidation = () => {
        if (!email || !number || !date || !cvv || !checked) {
            toast.error("thieu");
            return false;
        }
        return true;
    };


    const handleClick=() =>{
        if (handleValidation()) {
            toast.success('Your payment was successfull!');
        }
    } 
    const paymentDesc = {
        title: 'Subscribe and start saving your money today!',
        desc_0: 'professional Plan',
        title_professional: '$96/month',
        desc_1: 'All features in basic included',
        desc_2: 'Easy and flexible business with invoice management',
        desc_3: 'Fulltime',
        desc_4: '20TB cloud storage',
        title_modify: 'Modify plant',
    };

    return (
        <div className="payment-container">
            <div className="payment-container-item ">
                <Form>
                    <Row >
                        <Col span={14}>
                            <label >
                                Payment details
                            </label>
                            <Form.Item label="Email adress">
                                <Input  placeholder="@Email.com" value={email} onChange={(e) => setemail(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Credit Card Number">
                                <Input placeholder="xxxx xxxx xxxx xxxx" value={number} onChange={handleChange} />
                            </Form.Item>
                            <Row>
                                <Col>
                                    <Form.Item label="Expiry Date">
                                        <Input placeholder="mm/yy" value={date} onChange={(e) => setdate(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Form.Item label="CVV">
                                    <Input value={cvv} placeholder="xxx" onChange={(e) => setcvv(e.target.value)} />
                                </Form.Item>
                                <Col>
                                </Col>
                            </Row>
                            <Form.Item name="disabled" valuePropName="checked">
                                <Checkbox onChange={() => setchecked(!checked)}> I've a promo code</Checkbox>
                            </Form.Item>
                            <Row>
                                <Col span={6}>
                                    <p>Subtoltal</p>
                                </Col  >
                                <Col span={6}>
                                    <p>96$</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <p>Platfoem Fee</p>
                                </Col  >
                                <Col span={6}>
                                    <p>4$</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col span={6}>
                                    <p>Total Amount</p>
                                </Col  >
                                <Col span={6}>
                                    <p>100$</p>
                                </Col>
                            </Row>
                            <Space direction="vertical" style={{ width: '90%' }}>
                                <Button size="large" type="primary" block  onClick={() =>handleClick()}>
                                    Primary
                                </Button>
                            </Space>

                        </Col >

                        <Col span={10}>
                            <PlaymentRitght paymentDesc={paymentDesc} />
                        </Col >
                    </Row>
                </Form>
            </div>

        </div>
    )
}
export default PaymentLeft;
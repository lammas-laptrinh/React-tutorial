import { useState } from "react";
import { PaymentDetailItemProps } from "../type";
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input, Image, Row, Col,Space  } from "antd";
import { toast, ToastContainer } from 'react-toastify';
import PaypalPayment from "./Paypal";
import './Payment.css'

export default function Payment(props: PaymentDetailItemProps) {
    const [email, setEmail] = useState('')
    const [card, setCard] = useState('')
    const [expiry_date, setExpiry_date] = useState('')
    const [cvv, setCvv] = useState('')
    const [showPaypal, setShowPaypal] = useState(false);



    const validate = () => {

        if (!email) {
            toast.error('Trường email không được trống!')
            return false;
        }
        else if (!card) {
            toast.error('Trường Credit Card Number không được trống!')
            return false;
        }
        else if (!expiry_date) {
            toast.error('Trường Expiry Date không được trống!')
            return false;
        }
        else if (!cvv) {
            toast.error('Trường CVV không được trống!')
            return false;
        }
        return true;
    }
    const handleClick = () => {
        if (validate()) {
            setShowPaypal(!showPaypal);
        }
    }
    if (showPaypal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div className="payment-container">
            <Row className="payment-container-item">
                <Row className="title">
                    <h3>Payment details</h3>
                </Row>
                <Col className="payment-items-wrapper">
                    <div className="payment-items">
                        <span className="span-info">Email</span>
                        <Input className="input-info" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="payment-items card">
                        <span className="span-info">Card Number</span>
                        <Input className="input-info" placeholder="xxxx xxxx xxxx xxxx" value={card} onChange={(e) => setCard(e.target.value)} />
                    </div>
                    <div className="payment-items wrapper">
                        <div className="expriry-date">
                            <span className="span-info">Expiry Date</span>
                            <Input className="input-date-cvv" placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                        </div>
                        <div className="cvv">
                            <span className="span-info">CVV</span>
                            <Input className="input-date-cvv" value={cvv} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                        </div>
                    </div>
                    <ToastContainer />
                </Col>
                <div className="total-Amount">
                    <div className="total-items subtotal">
                        <span className="total-span-title">Subtotal</span>
                        <span className="total-span">${props.subtotal}</span>
                    </div>
                    <div className="total-items platform">
                        <span className="total-span-title" >Platform Fee</span>
                        <span className="total-span">${props.discount}</span>
                    </div>
                    <div className="border"></div>
                    <div className="total-items total">
                        <span className="total-span-title">Total Amount</span>
                        <span className="total-span">${props.total}</span>
                    </div>
                </div>
                {showPaypal && (
                    <PaypalPayment   total={10} setShowPaypal={setShowPaypal} showPaypal={showPaypal} />
                )}
                <div className="action-buttons">
                    <Button style={{ color: '#ffffff' }} type="primary" onClick={handleClick}>Thanh toán</Button>
                </div>
            </Row>

            <div className="introduce-wrapper">
                <Row className="room-info">
                    <Col  className="room-banner">
                        <Space >
                        <Image className="room-avatar"  src="https://s3-alpha-sig.figma.com/img/528b/145f/221d81a17c9eab180b803385b4c31fb1?Expires=1684108800&Signature=ay8CK8xS6CYkNrkmuo1eCzY5Qalw8DKz~gfkynrG-wPQgu4tx4VVoIN4LcGZfxR5VQQONCK-4hhI4VS6xNKv~gyUopGNlv9bAsasMjHKZeJUQ1eestzJ80U2GXmOP-nWZR0ZQx8Ko6uFxDgb1VZC0ebhesy6VITJuRn9MbA~UEKRAyYECIuURfUW15OoNuMofMvwM-jhhCIFGYokpwmpeHTUkqubHI582ZxaxDqILorherB6Jn1-LKeH3gJOryOxTKNhuzpwprwpuAVGJBJiQkfSqdHBZrBjVnIeeLPRtFmpL7W453Bk9dh79BqGsIIhJ5LKc0EW9Vxv0gd0~HByWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        </Space>
                       
                    </Col>
                    <Col className="room-detail">
                        <Row className="roomtype">
                            <Col span={24}>
                                <h2 className="title-room">{props.roomtype}</h2>
                                <p>{props.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="border"></Col>
                        </Row>
                        <Row className="room-service-date">
                            <Row className="service" >
                                    <label>Dịch vụ</label>
                                    <span className="service-date-span">{props.service}</span>
                            </Row>
                            <Row className="date">
                                    <label>Thời gian</label>
                                    <span className="service-date-span">{props.date}</span>
                            </Row>
                        </Row>
                        <Row>
                            <Col span={24} className="border"></Col>
                        </Row>
                        <Row className="room-icon">
                            <img src="https://ss6-paypal.vercel.app/assets/tick-8cbc4407.svg" />
                            <span className="span-secure">Secure Payment</span>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );

}
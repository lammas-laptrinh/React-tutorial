import React, { useState } from "react";
import { PaymentDetailItemProps } from "./type";
import PaymentItem from "./PaymentItem";
import "./Payment.css"
import Introduce from "./Introduce";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Session_1(props: PaymentDetailItemProps) {
    const [email, setEmail] = useState('')
    const [card, setCard] = useState('')
    const [expiry_date, setExpiry_date] = useState('')
    const [cvv, setCvv] = useState('')
    const [promoCodeChecked, setPromoCodeChecked] = useState(false);


    
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
        else if (!promoCodeChecked){
            toast.error('Chưa check vào checkbox!')
            return false;
        }
        return true;
    }
    const handleClick = () => {
        if(validate()){
            toast.success('Your payment was successfull!');
        }
    }

    return (
        <div className="payment-container">
            <div className="payment-container-item">
                <div className="title">
                    <h2>Payment details</h2>
                </div>
                <div className="payment-items-wrapper">
                    <div className="payment-items">
                        <span className="span-info">Email adress</span>
                        <input className="input-info" placeholder="@Email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="payment-items">
                        <span className="span-info">Credit Card Number</span>
                        <input className="input-info" placeholder="xxxx xxxx xxxx xxxx" value={card} onChange={(e) => setCard(e.target.value)} />
                    </div>
                    <div className="payment-items wrapper">
                        <div className="expriry-date">
                            <span className="date-span-cvv">Expiry Date</span>
                            <input className="input-date-cvv" placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                        </div>
                        <div className="cvv">
                            <span className="date-span-cvv">CVV</span>
                            <input className="input-date-cvv" value={cvv} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                        </div>
                    </div>
                    <ToastContainer />
                    <div className="checkbox">
                        <label htmlFor="promo-code-checkbox">
                            <input className="checkbox-promo"
                             checked={promoCodeChecked} 
                             onChange={() => setPromoCodeChecked(!promoCodeChecked)}
                            type="checkbox" id="promo-code-checkbox" />

                            I've a promo code
                        </label>
                    </div>
                </div>
                <div className="total-Amount">
                    <div className="total-items subtotal">
                        <span className="total-span">Subtotal</span>
                        <span className="total-span">${props.subtotal}</span>
                    </div>
                    <div style={{borderBottom:'1px solid black'}} className="total-items platform">
                        <span className="total-span" >Platform Fee</span>
                        <span  className="total-span">${props.platfrom}</span>
                    </div>
                    <div className="total-items total">
                        <span className="total-span">Total Amount</span>
                        <span className="total-span">${props.total}</span>
                    </div>
                </div>
                <div className="action-button">
                    <button onClick={handleClick}>Make payment</button>
                </div>
            </div>
            <div className="introduce-wrapper">
                <Introduce
                    title="Subscribe and start saving your money today!" 
                    professtional_plan="$96/month"
                    introduce_1="All features in basic included"
                    introduce_2="Easy and flexiable business with invoice management"
                    introduce_3="Fulltime"
                    introduce_4="20TB cloud storage"
                    modify_plan="Modify plant"
                />
            </div>
        </div>
    );
}

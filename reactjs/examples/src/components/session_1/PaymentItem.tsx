import React from 'react'
import { PaymentDetailItemProps } from './type'

export default function PaymentItem(props:PaymentDetailItemProps){
    const {email,card_number,expiry_date,CVV} = props;
    return <div className='payment-items-container'>
        <div className='payment-items'>
            {email}
            {card_number}
            {expiry_date}
            {CVV}
        </div>
    </div>
}
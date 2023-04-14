import { useState } from 'react';
import { PaymentDetailProps, PaymentDetails } from '../types';


export default function PaymentDetail(props: PaymentDetailProps) {
    const { rows } = props
    const totalPrice = rows.price ? (rows.price.subtotal + rows.price.flatform) : 0;
    const [paymentData, setPaymentData] = useState<PaymentDetails>();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: any) => {
        setIsChecked(e.target.checked);
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(paymentData);
    };
    return (
        <div className='form-container' onSubmit={handleSubmit}>
            <h2>Payment Details</h2>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', }}>
                <div className='item-tittle'>
                    <label >Email Address</label>
                </div>
                <div className='item-input'>
                    <input
                        name='email'
                        id='email'
                        type='text'
                        placeholder='Email Address'
                        required
                        style={{ height: '20px', width: '300px' }}
                    />
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left' }}>
                <div className='item-tittle'>
                    <label >Card Number</label>
                </div>
                <div className='item-input'>
                    <input
                        name='cardNumber'
                        id='cardNumber'
                        placeholder='XXX   XXX   XXX   XXX'
                        required
                        style={{ height: '20px', width: '300px' }}
                    />
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
                <div style={{ flexDirection: 'column', }}>
                    <div className='item-tittle'>
                        <label >Expiration Date</label>
                    </div>
                    <div className='item-input'>
                        <input
                            name='expirationDate'
                            id='expirationDate'
                            type='text'
                            placeholder='mm/yy'
                            required
                            style={{ height: '20px', width: '140px' }}
                        />
                    </div>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: '15px' }}>
                    <div className='item-tittle'>
                        <label htmlFor='cvv'>CVV</label>
                    </div>
                    <div className='item-input'>
                        <input
                            name='cvv'
                            id='cvv'
                            type='text'
                            placeholder='XXX'
                            required
                            style={{ height: '20px', width: '140px' }}
                        />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'left' }}>
                <label>
                    <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                    />
                    I've promo code
                </label>
                {isChecked && (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your promo code"
                        />
                    </div>
                )}
            </div>
            <div className='form-item' style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', borderBottom: "#C1C1C1 1px solid", lineHeight: "40px" }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                    <div className='item-tittle'>
                        <label >Subtotal</label>
                    </div>
                    <div className='item-total' style={{ marginLeft: '200px', fontWeight: 'bold' }}>
                        <label>${rows.price?.subtotal}</label>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                    <div className='item-tittle'>
                        <label >Flatform Fee</label>
                    </div>
                    <div className='item-total' style={{ marginLeft: '168px', fontWeight: 'bold' }}>
                        <label>${rows.price?.flatform}</label>
                    </div>
                </div>
            </div>
            <div className='form-item' style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                    <div className='item-tittle'>
                        <label >Total</label>
                    </div>
                    <div className='item-total' style={{ marginLeft: '220px', fontWeight: 'bold' }}>
                        <label>${totalPrice}</label>
                    </div>
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', marginTop: '40px' }}>
                <button type='submit' style={{ backgroundColor: '#164aff', color: 'white' }}>
                    Make payment
                </button>
            </div>
        </div >
    );
}

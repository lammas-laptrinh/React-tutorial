import { ReactNode, useState } from 'react';
import { PaymentDetailProps, PaymentDetails } from '../types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


export default function PaymentDetail(props: PaymentDetailProps) {
    const { rows } = props
    //do total Price
    const totalPrice = rows.price ? (rows.price.subtotal + rows.price.flatform) : 0;
    //these guys are for validate
    const paymentDetailsSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        cardNumber: Yup.string()
            .required("Please enter a valid credit card number")
            .matches(
                /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                "Please enter a valid credit card number"
            ),
        expirationDate: Yup.string()
            .matches(
                /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                "Please using format mm/yy"
            )
            .required("Please enter the expiration date")
            .test("expirationDate", "Expiration date must be in the future", (val) => {
                const [month, year] = val.split("/");
                const expirationYear = +(`20${year}`);
                const expirationMonth = +month - 1;
                const today = new Date();
                today.setMonth(today.getMonth() + 1);
                if (expirationYear < today.getFullYear()) {
                    return false;
                } else if (expirationYear === today.getFullYear()) {
                    return expirationMonth >= today.getMonth();
                } else {
                    return true;
                }
            }),
        cvv: Yup.number()
            .typeError('Please type CVV')
            .min(100, 'CVV must be at least 3 digits')
            .max(9999, 'CVV must not exceed 4 digits')
            .required('CVV is required'),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(paymentDetailsSchema),
    });
    const onSubmitHandler = (data: any) => {
        console.log({ data });
        //this guy is notify message
        toast.success('Payment success!!!', {
            autoClose: 4000,
        });
        reset();
    };
    //this guy to check if user click or not "i've promo code"
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: any) => {
        setIsChecked(e.target.checked);
    }
    //return this to UI
    return (
        <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)}>
            <h2>Payment Details</h2>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', }}>
                <div className='item-tittle'>
                    <label >Email Address</label>
                </div>
                <div className='item-input'>
                    <input
                        {...register("email")} // register the name to validate
                        name='email'
                        id='email'
                        type='text'
                        placeholder='Email Address'
                        style={{ height: '20px', width: '300px' }}
                    />
                    {errors.email?.message && <p style={{ color: 'red' }}>{errors.email.message as ReactNode}</p>} {/* // show validate message */}
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left' }}>
                <div className='item-tittle'>
                    <label >Card Number</label>
                </div>
                <div className='item-input'>
                    <input
                        {...register("cardNumber")}
                        name='cardNumber'
                        id='cardNumber'
                        placeholder='XXXX   XXXX   XXXX'
                        style={{ height: '20px', width: '300px' }}
                    />
                    {errors.cardNumber?.message && <p style={{ color: 'red' }}>{errors.cardNumber.message as ReactNode}</p>}
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
                <div style={{ flexDirection: 'column', }}>
                    <div className='item-tittle'>
                        <label >Expiration Date</label>
                    </div>
                    <div className='item-input'>
                        <input
                            {...register("expirationDate")}
                            name='expirationDate'
                            id='expirationDate'
                            type='text'
                            placeholder='mm/yy'
                            style={{ height: '20px', width: '140px' }}
                        />
                        {errors.expirationDate?.message && <p style={{ color: 'red' }}>{errors.expirationDate.message as ReactNode}</p>}
                    </div>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: '15px' }}>
                    <div className='item-tittle'>
                        <label htmlFor='cvv'>CVV</label>
                    </div>
                    <div className='item-input'>
                        <input
                            {...register("cvv")}
                            name='cvv'
                            id='cvv'
                            placeholder='XXX'
                            type="number"
                            style={{ height: '20px', width: '140px' }}
                        />
                        {errors.cvv?.message && <p style={{ color: 'red' }}>{errors.cvv.message as ReactNode}</p>}
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
                            {...register("promoCode")}
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
                <button style={{ backgroundColor: '#164aff', color: 'white' }}>
                    Make payment
                </button>
            </div>
        </form>
    );
}

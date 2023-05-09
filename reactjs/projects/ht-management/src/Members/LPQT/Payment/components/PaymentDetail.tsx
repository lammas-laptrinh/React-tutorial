import { ReactNode } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RoomProps } from '../../Room/type';
import paypalApi from '../../Api/paypalApi';


export default function PaymentDetail(props: RoomProps) {
    const { row } = props
    //do total Price
    const totalPrice = row?.price ? (row.price.subtotal! + row.price.flatform!) : 0;
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
    const onSubmitHandler = (/* data: any */) => {
        //the createOrder Data
            const bookRoomData = {
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: totalPrice.toString(),
                            breakdown: {
                                item_total: {
                                    currency_code: 'USD',
                                    value: totalPrice.toString(),
                                },
                            },
                        },
                        items: [
                            {
                                name: row.name,
                                description: row.description?.slice(0, 60),
                                quantity: '1',
                                unit_amount: {
                                    currency_code: 'USD',
                                    value: totalPrice.toString(),
                                },
                            },
                        ],
                    },
                ],
                application_context: {
                    return_url: 'https://example.com/success',
                    cancel_url: 'https://example.com/cancel',
                },
            };
            //CrateOder through Paypal APi
            paypalApi.createOrder(bookRoomData!)
                .then((response) => {
                    // Retrieve the order ID from the response
                    const orderId = response.data.id;
                    paypalApi.checkoutOderById(orderId)
                        .then((orderDetailsResponse) => {
                            // Extract order details from the response
                            const orderDetails = orderDetailsResponse.data;
                            //then it will have the notify when getdata success
                            // find the aprove link 
                            const approveLink = orderDetails.links.find((link: { rel: string; }) => link.rel === 'approve');
                            console.log(approveLink)
                            //this guy is notify message
                            toast.success('Create Oder Success. Moving to the Payment', {
                                autoClose: 4000,
                            });
                            //redirect to another page with approve link after 5000
                            approveLink ? setTimeout(() => {
                                window.open(approveLink.href, '_blank');
                            }, 4005)
                                :
                                console.log('No approve link found');

                            console.log(orderDetailsResponse)
                        })
                        .catch((error) => {
                            console.error('Error getting order details:', error);
                        });

                })
                .catch((error) => {
                    console.error('Error creating order:', error);
                });
        reset();
    };

    //return this to UI
    return (
        <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)}>
            <h2 className='MarginBottom20'>Payment Details</h2>
            <div className='MB20TextL' >
                <div className='item-tittle'>
                    <label >Email Address</label>
                </div>
                <div className='MT10' >
                    <input
                        {...register("email")} // register the name to validate
                        name='email'
                        id='email'
                        type='text'
                        placeholder='Email Address'
                        className='InputStyle300'
                    />
                    {errors.email?.message && <p className='red'>{errors.email.message as ReactNode}</p>} {/* // show validate message */}
                </div>
            </div>
            <div className='MB20TextLeft'>
                <div className='item-tittle'>
                    <label >Card Number</label>
                </div>
                <div className='MT10'>
                    <input
                        {...register("cardNumber")}
                        name='cardNumber'
                        id='cardNumber'
                        placeholder='XXXX   XXXX   XXXX'
                        className='InputStyle300'
                    />
                    {errors.cardNumber?.message && <p className='red'>{errors.cardNumber.message as ReactNode}</p>}
                </div>
            </div>
            <div className='DEvsCVVContain' >
                <div className='FlexDirecColumn' >
                    <div className='item-tittle'>
                        <label >Expiration Date</label>
                    </div>
                    <div className='MT10'>
                        <input
                            {...register("expirationDate")}
                            name='expirationDate'
                            id='expirationDate'
                            type='text'
                            placeholder='mm/yy'
                            className='InputStyle140'
                        />
                        {errors.expirationDate?.message && <p className='red'>{errors.expirationDate.message as ReactNode}</p>}
                    </div>
                </div>
                <div className='FlexDirecColumnMl15'>
                    <div className='item-tittle'>
                        <label htmlFor='cvv'>CVV</label>
                    </div>
                    <div className='MT10'>
                        <input
                            className='InputStyle140'
                            {...register("cvv")}
                            name='cvv'
                            id='cvv'
                            placeholder='XXX'
                            type="number"

                        />
                        {errors.cvv?.message && <p className='red'>{errors.cvv.message as ReactNode}</p>}
                    </div>
                </div>
            </div>

            <div className='PriceContain'>
                <div className='PriceValueContain'>
                    <div className='item-tittle'>
                        <label >Subtotal</label>
                    </div>
                    <div className='PriceValue' >
                        <label>${row.price?.subtotal}</label>
                    </div>
                </div>
                <div className='PriceValue_Contain'>
                    <div className='item-tittle'>
                        <label >Flatform Fee</label>
                    </div>
                    <div className='PriceValue_'>
                        <label>${row.price?.flatform}</label>
                    </div>
                </div>
            </div>
            <div className='form-item'>
                <div className='PriceValueContain'>
                    <div className='item-tittle'>
                        <label >Total</label>
                    </div>
                    <div className='PriceValue__'>
                        <label>${totalPrice}</label>
                    </div>
                </div>
            </div>
            <div className='PageDButton'>
                <button className='PageDButtonStyle'>
                    Thanh toán
                </button>
            </div>
        </form>
    );
}

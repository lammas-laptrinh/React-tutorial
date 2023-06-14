import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';
import { Button } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import './paypal.css'
import { useNavigate  } from "react-router-dom";
import {
    collection, addDoc, Timestamp

} from "firebase/firestore";
import { db } from "../../../../firebase";
export default function PaypalPayment(props: any) {
    const navigate = useNavigate();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const DateTimeNow = Timestamp.fromDate(new Date(formattedDate));

    const handleClick = () => {
        props.setShowPaypal(!props.showPaypal);
    }

    function createOrderData(orderData: any) {
        return {
            purchase_units: [
                {
                    amount: {
                        value: orderData.amount,
                    },
                    description: orderData.description
                },
            ],
        };
    }
    async function handleApprove(data: any, actions: any) {
        const order = await actions.order.capture({ data });
        if (!order) {
            return;
        }
        const paymentID = order.id;
        localStorage.setItem('paymentID',paymentID)
        const billCollection = collection(db, "bill");
            try {
                const docRef = await addDoc(billCollection, {
                    amount:  '100',
                    paymentId: paymentID,
                    paymentTime: DateTimeNow,
                    paymentMethod: 'Ví điện tử',
                    senderId: '1',
                    unit: "usd"
                    // Add other booking data properties as needed
                });
                console.log("Document written with ID: ", docRef.id);
                toast.success(`Đơn hàng của bạn đã thanh toán thành công `);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        props.setShowPaypal(!props.showPaypal);
        
        setTimeout(() => {
            navigate('/payment-success');
          }, 1500);
    }
    return (
        <div className="paypal-popup">
            <div onClick={handleClick} className="overlay"></div>
            <PayPalScriptProvider
                options={{
                    "client-id": "AeXwKzA5G5jKGiDOoWEPhRYDFimQ5xfzCg7I8KotP1vehVs0oHiGJo8mU8Act9Y12VDDknDmE0MGWtR9",
                    currency: "USD",
                }}
            >
                <PayPalButtons
                    createOrder={(_, actions) => actions.order.create(createOrderData({
                        amount: 100, // giá trị đơn hàng
                        description: "Mua hàng từ cửa hàng "
                    }))}
                    onApprove={handleApprove}
                />
            </PayPalScriptProvider>
            <Button className="close-btn" type="primary" icon={<CloseOutlined />} onClick={() => props.setShowPaypal(false)} />
        </div>
    );
}

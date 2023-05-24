import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';
import { Button } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import './paypal.css'
import { useNavigate  } from "react-router-dom";
export default function PaypalPayment(props: any) {
    const navigate = useNavigate();
    
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
        toast.success(`Đơn hàng của bạn đã thanh toán thành công `);
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
                        description: "Mua hàng từ cửa hàng XYZ"
                    }))}
                    onApprove={handleApprove}
                />
            </PayPalScriptProvider>
            <Button className="close-btn" type="primary" icon={<CloseOutlined />} onClick={() => props.setShowPaypal(false)} />
        </div>
    );
}

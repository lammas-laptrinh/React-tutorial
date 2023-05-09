import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";


export default function PaypalCheckout(props: any) {
  const handleClick = () => {
    props.setShowPaypal(!props.showPaypal);
  };

  function createOrderData(orderData: any) {
    return {
      purchase_units: [
        {
          amount: {
            value: orderData.amount,
          },
          description: orderData.description,
        },
      ],
    };
  }

  async function handleApprove(data: any, actions: any) {
    const order = await actions.order.capture({ data });
    if (!order) {
      return;
    }
    toast.success(`Thanh toán thành công`);
  }
  
  return (
    <div className="paypal-popup">
      <div onClick={handleClick} className="overlay"></div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ASHVY8UaSsUHWz-KXh2j04Nbt4L4B7WgfKTR8hrlM8yWTjvLqMpy-xxZZ8mVHPoekjoMGAsvZsENpt5C",
          currency: "USD",
        }}
      >
        <PayPalButtons
          createOrder={(_, actions) =>
            actions.order.create(
              createOrderData({
                amount: 100,
                description:
                  "orem Ipsum has been the industry standard dummy text ever since the 1500s",
              })
            )
          }
          onApprove={handleApprove}
        />
      </PayPalScriptProvider>
      <Button
        className="close-btn"
        type="primary"
        icon={<CloseOutlined />}
        onClick={() => props.setShowPaypal(false)}
      />
    </div>
  );
}

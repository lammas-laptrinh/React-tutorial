import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function PaypalCheckout(props: any) {
  const navigate = useNavigate();
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
    setTimeout(() => {
      navigate("/invoice");
    }, 1500);
  }
  return (
    <div className="paypal-popup">
      <div onClick={handleClick} className="overlay"></div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AbHSGMunI84r9JENIqHwMu0JiRtfSZW6yAxO9Tlma_m_6SPDmr95hVRyPUl6MowcK6TzDlHKPeJshmUC",
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

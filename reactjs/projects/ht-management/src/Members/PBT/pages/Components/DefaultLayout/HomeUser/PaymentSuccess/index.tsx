import { Space } from "antd"
import './PaymentSucess.css'

function PaymentSuccess() {
  return (
    <Space className="payment-sucess-wrapper">
      <Space className="payment-sucess-form">
        <Space className="payment-sucess-header">
          <Space className="border-checked">
            <img className="checked-img" src="https://img.icons8.com/office/40/000000/ok--v1.png" alt="ok--v1" />
          </Space>
          <h2 className="sucess-title">
            Payment Sucess
          </h2>
          <h2 className="success-price">
            100 $
          </h2>
        </Space>

        <Space className="payment-sucess-content">

          <Space className="content-span">
            <span>PaymentId</span>
            <span className="span-bold">1231293081</span>
          </Space>
          <Space className="content-span">
            <span>Payment Time</span>
            <span className="span-bold">12-06-2023, 11:00</span>
          </Space>
          <Space className="content-span">
            <span>Payment Method</span>
            <span className="span-bold">Ví điện tử</span>
          </Space>
          <Space className="content-span">
            <span>Sender</span>
            <span className="span-bold">Nguyen Van A</span>
          </Space>

        </Space>

        <Space className="payment-sucess-amount"> 
          <Space className="content-span">
            <span>Amount</span>
            <span className="span-bold">100$</span>
          </Space>
        </Space>



      </Space>
    </Space>
  )
}

export default PaymentSuccess
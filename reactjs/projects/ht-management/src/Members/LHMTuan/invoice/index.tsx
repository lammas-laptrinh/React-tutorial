import TOPImg from "../assests/success.png";
import "./index.css";

interface InvoiceProps {
  paymentId: string;
  paymentTime: string;
  paymentMethod: string;
  sender: string;
  amount: number;
}
const invoice = () => {
  const paymentDetails: InvoiceProps = {
    paymentId: "1231293081",
    paymentTime: "12-06-2023, 11:00",
    paymentMethod: "Ví điện tử",
    sender: "Nguyen Van A",
    amount: 100,
  };
  return (
    <div>
      <div className="Form">
        <img className="img" src={TOPImg} />
        <div className="title-1">Payment Success</div>
        <div className="amount">{paymentDetails.amount}$</div>
        <div className="line-1" />
        <div className="title-2">
          PaymentID: <div className="data">{paymentDetails.paymentId}</div>
        </div>
        <div className="title-2">
          Payment Time: <div className="data">{paymentDetails.paymentTime}</div>
        </div>
        <div className="title-2">
          Payment Method:
          <div className="data"> {paymentDetails.paymentMethod}</div>
        </div>
        <div className="title-2">
          Sender: <div className="data">{paymentDetails.sender}</div>
        </div>
        <div className="line-2" />
        <div className="title-2">
          Amount: <div className="data">{paymentDetails.amount}$</div>
        </div>
      </div>
    </div>
  );
};

export default invoice;

import PaymentInfo from "../session_1/PaymentInfo";
import PaymentDetailsForm from "../session_1/PaymentDetailsForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.7, marginRight: "100px" }}>
        <PaymentDetailsForm
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div>
        <PaymentInfo />
      </div>
      <ToastContainer />
    </div>
  );
}

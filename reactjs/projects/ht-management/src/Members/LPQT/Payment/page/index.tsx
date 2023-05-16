
import PackageInfo from "../components/PackageInfo";
import PaymentDetail from "../components/PaymentDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { roomData } from "../../Constant/Global";

export default function PaymentPage() {
    const roomId = 'K_1';
    const matchedRoom = roomData.find((room) => room.id === roomId);
    return (
        <div className="PaymentMainContain">
            <div className="IndexPaymentDetail">
                <PaymentDetail row={matchedRoom!} />
            </div>
            <div className="IndexPkgInfo">
                <PackageInfo row={matchedRoom!} />
            </div>
            <ToastContainer />
        </div>
    )
}


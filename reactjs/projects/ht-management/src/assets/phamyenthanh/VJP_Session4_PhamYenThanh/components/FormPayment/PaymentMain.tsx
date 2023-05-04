import PaymentLeft from "./PaymentLeft"
import '../../css/paymentMain.css'
import '../../css/playmentRigjt.css'
import '../../css/playmentLeft.css'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PaymentMain = () => {

    return (
        <>
            <div className="all">
                <PaymentLeft />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </>
    )
}

export default PaymentMain
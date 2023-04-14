
import PackageInfo from "../components/PackageInfo";
import PaymentDetail from "../components/PaymentDetail";
import { PaymentDetails } from "../types";

export default function Payment() {
    const dummyPaymentData: PaymentDetails = {
        email: '',
        id: '1',
        cardNumber: 0,
        expirationDate: new Date(),
        cvv: 0,
        price: { id: '1', subtotal: 10, flatform: 5 },
        promoCode: '',
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, marginRight: '80px' }}>
                <PaymentDetail rows={dummyPaymentData} />
            </div>
            <div style={{ flex: 1 }}>
                <PackageInfo rows={dummyPaymentData?.price} />
            </div>
        </div>

    )
}


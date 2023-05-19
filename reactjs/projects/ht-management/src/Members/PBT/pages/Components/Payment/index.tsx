
import { PaymentDetailItemProps } from './type'

export default function PaymentItem(props:PaymentDetailItemProps){
    const {roomtype,description,service,date,discount,subtotal,total} = props;
    return <div className='payment-items-container'>
        <div className='payment-items'>
            {roomtype}
            {description}
            {service}
            {date}
            {discount}
            {subtotal}
            {total}
        </div>
    </div>
}
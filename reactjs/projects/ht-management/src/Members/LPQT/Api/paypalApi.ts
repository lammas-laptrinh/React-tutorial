
import axiosClient from './axiosClient';
import { IPayPalOrder } from '../Payment/type';
import { v4 as uuidv4 } from 'uuid';


//get the stored Token
const paypalToken = localStorage.getItem('paypalToken');

const paypalApi = {
    createOrder: (data: IPayPalOrder): Promise<any> => {
        //get the random value for 'PayPal-Request-Id
        const PRId = uuidv4()
        //custome header for API
        const headers = {
            'Content-Type': 'application/json',
            'Prefer': 'return=representation',
            'PayPal-Request-Id': PRId,
            'Authorization': `Bearer ${paypalToken}`
        }
        console.log(PRId)
        return axiosClient.post('/v2/checkout/orders', data, { headers: headers });
    },
    checkoutOderById(id: string): Promise<any> {
        //custome header for API
        const headers = {
            'Content-Type': 'application/json',
            'Prefer': 'return=representation',
            'Authorization': `Bearer ${paypalToken}`
        }
        return axiosClient.get(`v2/checkout/orders/${id}`, { headers: headers });
    },
};

export default paypalApi;

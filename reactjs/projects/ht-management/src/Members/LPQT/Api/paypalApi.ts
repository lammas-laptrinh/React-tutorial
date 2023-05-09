
import axiosClient from './axiosClient';
import { IPayPalOrder } from '../Payment/type';
import { v4 as uuidv4 } from 'uuid';

//get the random value for 'PayPal-Request-Id
const PRId = uuidv4()
//get the stored Token
const paypalToken = localStorage.getItem('paypalToken');
//custome header for API
const headers = {
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    'PayPal-Request-Id': PRId,
    'Authorization': `Bearer ${paypalToken}`
}

const paypalApi = {
    createOrder: (data: IPayPalOrder): Promise<any> => {
        return axiosClient.post('/v2/checkout/orders', data, { headers: headers });
    },
    checkoutOderById(id: string): Promise<any> {
        return axiosClient.get(`v2/checkout/orders/${id}`, { headers: headers });
    },
};

export default paypalApi;

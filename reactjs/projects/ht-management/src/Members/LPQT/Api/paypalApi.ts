
import axiosClient from './axiosClient';
import { IPayPalOrder } from '../Payment/type';

const paypalApi = {
    createOrder: (data: IPayPalOrder): Promise<any> => {
        //get the stored Token
        const paypalToken = localStorage.getItem('paypalToken');
        //custome header for API
        const headers = {
            'Content-Type': 'application/json',
            'Prefer': 'return=representation',
            'Authorization': `Bearer ${paypalToken}`
        }
        return axiosClient.post('/v2/checkout/orders', data, { headers: headers });
    },
    checkoutOderById(id: string): Promise<any> {
        //get the stored Token
        const paypalToken = localStorage.getItem('paypalToken');
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

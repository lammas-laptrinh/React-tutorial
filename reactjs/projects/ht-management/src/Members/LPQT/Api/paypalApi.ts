
import axiosClient from './axiosClient';
import { IPayPalOrder } from '../Payment/type';

//custome header for API
const headers = {
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
}
const paypalApi = {
    createOrder: (data: IPayPalOrder): Promise<any> => {
        return axiosClient.post('/v2/checkout/orders', data, { headers: headers });
    },
    checkoutOderById(id: string): Promise<any> {
        return axiosClient.get(`v2/checkout/orders/${id}`, { headers: headers });
    },
    captureById(id: string): Promise<any> {
        return axiosClient.post(`v2/checkout/orders/${id}/capture`, {}, { headers: headers });
    },
};

export default paypalApi;

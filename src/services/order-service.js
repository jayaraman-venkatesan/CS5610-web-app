import { axiosRequest } from './utils/axios';

export const createOrder = async (createOrderRequest) => {
    const response = await axiosRequest.post(`/orders`, createOrderRequest);
    return response.data;
}

export const getOrders = async () => {
    const response = await axiosRequest.get(`/orders`);
    return response.data;
}

export const cancelOrder = async (orderId) => {
    await axiosRequest.post(`/orders/cancel`, { orderId });
}
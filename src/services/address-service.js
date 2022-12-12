import { axiosRequest } from './utils/axios';


export const addUserAddress = async (addAddressRequest) => {
    const response = await axiosRequest.post(`/user-addresses`, addAddressRequest);
    return response.data;
}

export const findUserAddresses = async () => {
    const response = await axiosRequest.get(`/user-addresses`);
    return response.data;
}
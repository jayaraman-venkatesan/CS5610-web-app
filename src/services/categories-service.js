import { axiosRequest } from './utils/axios';


export const getCategories = async () => {
    const response = await axiosRequest.get(`/product-categories`);
    const properties = response.data;
    return properties;
}

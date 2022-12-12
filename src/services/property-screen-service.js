import { axiosRequest } from './utils/axios';

export const getPropertyById = async (propertyId) => {
    const response = await axiosRequest.get("/property/" + propertyId);
    const properties = response.data;
    return properties;
}
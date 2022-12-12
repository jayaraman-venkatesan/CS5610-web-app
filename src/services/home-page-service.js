import { axiosRequest } from './utils/axios';


export const getAllProducts = async (userID, categoryName, controllerSignal) => {
    console.log(categoryName);
    console.log("user is",userID)

    const response = await axiosRequest.get(
        `/products`, {
            params: {
                user: userID,
                category: categoryName
            },
            signal: controllerSignal
    });
    const properties = response.data;
    return properties;
}

export const createProduct = async (product) => {
    const response = await axiosRequest.post(
        `/products`, product,
        {
            'Content-Type': 'multipart/form-data'
        });
    const properties = response.data;
    return properties;
}



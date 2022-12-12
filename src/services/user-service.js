import { axiosRequest } from "./utils/axios";

export const register = async (newuser) => {
    console.log("in user service")
    console.log(newuser)
    const resp = axiosRequest.post(`/register`, newuser);
    return resp;
}


export const updateUser = async (updatedUser) => {
    console.log(updatedUser)
    const resp = axiosRequest.put(`/user/update/${updatedUser._id}`, updatedUser);
    return resp;
}


export const getDetailsByUserName = async (userName) => {
    const resp = axiosRequest.get("/user/" + userName);
    return resp;
}

export const login = async (user) => {
    const response = axiosRequest.post(`/login`, user)
    return response;
}

export const profile = async () => {
    console.log("inside service profile")
    const response = await axiosRequest.post(`/profile`)
    console.log(response.data)
    console.log("after service profile")
    return response.data
}

export const getUser = async () => {
    const response = await axiosRequest.get(`/user`)
    return response.data
}

export const logout = async () => {
    const response = await axiosRequest.post(`http://localhost:4000/logout`)
    return response.data;
}

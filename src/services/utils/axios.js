import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: "http://localhost:4000/api"
});

axiosRequest.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export { axiosRequest };
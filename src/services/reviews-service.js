import { axiosRequest } from './utils/axios';
const API_BASE = "http://localhost:4000/api/reviews";

export const createReview = async (newReview) => {
    const response = await axiosRequest.post("http://localhost:4000/api/reviews", newReview);
    return response.data;
}
export const findReviewsByProductId = async (productId) => {
    const response = await axiosRequest.get(`${API_BASE}`, { params: { pid: productId } });
    const reviews = response.data;
    return reviews;
}

export const findReviewsByUserName = async (userName) => {
    const response = await axiosRequest.get(`${API_BASE}`, { params: { userName } });
    return response;
}

export const deleteReview = async (rid) => {
    const response = await axiosRequest
        .delete(`${API_BASE}/${rid}`)
    return response.data
}

export const updateReview = async (review) => {
    await axiosRequest
        .put(`${API_BASE}/${review.id}`, review);
    return review;
}

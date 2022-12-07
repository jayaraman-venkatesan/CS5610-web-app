import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../../services/reviews-thunks";
import StarIcon from '@mui/icons-material/Star';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Review = ({ review }) => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    return (
        <div className="wd-review-container">
            <div className="wd-review-rating-container">
                {review.rating}
                <span><StarIcon style={{ color: "blue" }} /></span>
            </div>

            <div className="wd-review-comment-user-container">
                {
                    review.user_id === currentUser._id &&
                    <i className="fa fa-x float-end wd-lightgrey"
                        onClick={() => deleteReviewHandler(review.id)}></i>
                }
                <div className="wd-review-comment-container">
                    {review.comment}
                </div>


                <div className="wd-review-bottom-container">
                    <div className="wd-user-container ">
                        {review.username} {' | '} {review.date}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Review;
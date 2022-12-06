import {Link, useNavigate} from "react-router-dom";
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './index.css';
import {logoutThunk} from "./../../services/user-thunks";
// import profile from './user.json';

const ProfileScreen = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate("/")
    }
    return (
        <div className='wd-profile-container'>
            <div className='wd-profile-header'>
                {/* TODO whats the use of back */}
                <i className="fa-solid fa-arrow-left-long wd-back"></i>
                <div>
                    <div className='wd-profile-name'>
                        {currentUser.firstName} {currentUser.lastName}
                    </div>
                </div>
            </div>
            <div className='wd-picture-container'>
                <div>
                    <div className='wd-banner-picture'>
                        <img src={`/assets/banner.jpeg`} alt="Banner" height="200px" width="100%" />
                    </div>
                    <div className='wd-profile-picture'>
                        <img src={`/assets/${currentUser.profImg}`} alt="Profile" height="150px" width="150px" />
                    </div>
                </div>
                <div className='wd-edit-profile-btn-container'>
                    {
                        currentUser.role === 'owner' && <Link className='wd-edit-profile-btn' to={`/add-property`}>
                            Add Property
                        </Link>
                    }
                    {
                        currentUser.role === 'Admin' && <Link className='wd-edit-profile-btn' to="/manage-requests">
                            Manage Requests
                        </Link>
                    }
                    <Link className='wd-edit-profile-btn' to={`/history/${currentUser.id}`}>
                        Booking History
                    </Link>
                </div>
            </div>
            <div className='wd-profile-name'>
                {currentUser.firstName} {currentUser.lastName}
            </div>
            <div className='wd-profile-handle'>
                {currentUser.handle}
            </div>
            <div className='wd-profile-bio'>
                {currentUser.bio}
            </div>
            <div className='wd-profile-additional-icons-container'>
                <div className='wd-profile-additional-info-container'>
                    <div className='wd-profile-icon'>
                        <i className="bi bi-balloon"></i>
                    </div>
                    <div className='wd-profile-additional-info-text'>
                        DOB: {new Date(currentUser.dateOfBirth).toDateString()}
                    </div>
                </div>
            </div>

            <div>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>

        </div >

    );

}

export default ProfileScreen;
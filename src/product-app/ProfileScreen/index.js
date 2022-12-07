import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import { useLocation } from 'react-router-dom';
import * as service from '../../services/user-service.js'
import Button from '@mui/material/Button';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


const ProfileScreen = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    const name = location.pathname
    const navigate = useNavigate()
    const userName = name.split('/')[2] ?? currentUser.userName;
    const [userProf, setUserProf] = useState({})
    const handleEditProfile = () => {
        navigate('/edit-profile')
    }

    if (loading) {
        if (userName !== currentUser.userName) {
            console.log("in if", userName)
            service.getDetailsByUserName(userName).then((response) => {
                setUserProf(response.data);
                setLoading(false);
            })
        } else {
            setUserProf(currentUser)
            setLoading(false);
        }
    }


    const handleManageRequest = () => {
        navigate('/manage-requests')
    }

    const handleManageProducts = () => {
        navigate('/products/add')
    }

    // if (!(currentUser.role === 'Admin' || currentUser.role === 'Buyer' || currentUser.role === 'Seller')) {
    //     return (
    //         alert("PAGE IS RESTRICTED!!")
    //     )

    // }


    return (
        <>
            {
                loading && <h1>LOADING...</h1>
            }
            {
                !loading &&
                <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center  h-100">
                            <MDBCol lg="6" className="mb-4 mb-lg-0">
                                <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                    <MDBRow className="g-0">
                                        <MDBCol md="4" className="gradient-custom text-center text-white"
                                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                            <MDBCardImage src={userProf.profileImg ?? '/assets/default_dp.jpg'}
                                                alt="Avatar" className="my-5 wd-profile-img" style={{ width: '100px' }} fluid />
                                            <MDBTypography className="wd-profile-name2" tag="h5">{userProf.firstName} {userProf.lastName}</MDBTypography>

                                            {
                                                currentUser.userName === userProf.userName &&
                                                <Button className='wd-profile-edit-profile-btn' onClick={handleEditProfile} variant="outlined" size="medium">
                                                    Edit profile
                                                </Button>

                                            }


                                            <MDBIcon far icon="edit mb-5" />
                                        </MDBCol>
                                        <MDBCol md="8">
                                            <MDBCardBody className="p-4">
                                                <MDBTypography tag="h6">Information</MDBTypography>
                                                <hr className="mt-0 mb-4" />
                                                <MDBRow className="pt-1">
                                                    <MDBCol size="6" className="mb-3">
                                                        <MDBTypography tag="h6">Email</MDBTypography>
                                                        <MDBCardText className="text-muted">{userProf.email}</MDBCardText>
                                                    </MDBCol>
                                                    <MDBCol size="6" className="mb-3">
                                                        <MDBTypography tag="h6">Username</MDBTypography>
                                                        <MDBCardText className="text-muted">{userProf.userName}</MDBCardText>
                                                    </MDBCol>
                                                    <MDBCol size="6" className="mb-3">
                                                        <MDBTypography tag="h6">Date of birth</MDBTypography>
                                                        <MDBCardText className="text-muted">{userProf.dateOfBirth}</MDBCardText>
                                                    </MDBCol>
                                                </MDBRow>

                                                {

                                                    userProf.role === 'Admin' &&

                                                    <>
                                                        <MDBTypography tag="h6">Action</MDBTypography>
                                                        <hr className="mt-0 mb-4" />
                                                        <MDBRow className="pt-1">
                                                            <Button className='wd-profile-edit-profile-btn' onClick={handleManageRequest} variant="outlined" size="medium">
                                                                Manage request
                                                            </Button>
                                                        </MDBRow>
                                                    </>

                                                }

                                                {

                                                    userProf.role === 'Seller' &&

                                                    <>
                                                        <MDBTypography tag="h6">Action</MDBTypography>
                                                        <hr className="mt-0 mb-4" />
                                                        <MDBRow className="pt-1">
                                                            <Button className='wd-profile-edit-profile-btn' onClick={handleManageProducts} variant="outlined" size="medium">
                                                                Manage Products
                                                            </Button>
                                                        </MDBRow>
                                                    </>

                                                }


                                            </MDBCardBody>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>


            }


        </>



    );

}

export default ProfileScreen;
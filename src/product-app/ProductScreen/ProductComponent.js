import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import ImagesComponent from "./ProductsImageComponent/productImageScreen";
import SuggestionsComponent from "./SuggestionsComponent/SuggestionsComponent";
import ReviewList from "./ReviewsComponent/ReviewList.js"
import './index.css'
import { findProductsThunkById } from '../../services/product-screen-thunk';
import { findReviewsThunkByProductId } from '../../services/reviews-thunks';
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import OrderComponent from './OrderComponent';

const ProductComponent = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { productById: product, productByIdLoading } = useSelector((state) => state.productById);

    const { reviews, reviewsLoading } = useSelector((state) => state.reviews);

    const [quantity, setQuantity] = useState('')
    const [showOrderForm, setShowOrderForm] = useState()
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const paths = pathname.split('/')
        const productId = paths[2];
        dispatch(findProductsThunkById(productId))
        dispatch(findReviewsThunkByProductId(productId))
    }, [dispatch, pathname])

    const handleQuantityChange = (event) => {
        const value = event.target.value
        setQuantity(value)
    }

    return (

        <>
            {
                (<div className="container-fluid wd-product-details-container">
                    <div className="row ms-1 mt-3">
                        <div className="col-12 col-md-12 col-lg-9 col-xl-9">
                            {
                                (productByIdLoading || !product) ?
                                    <Skeleton animation="wave" width={"100%"} height={600} />
                                    : < ImagesComponent product={product} />
                            }

                        </div>
                        <div className="wd-product-details-card-info col-lg-3 col-xl-3">
                            {
                                (productByIdLoading || !product) ?
                                    (<Skeleton animation="wave" width={"100%"} height={600} />)
                                    : (<>
                                        <div className='wd-product-details-card-title'>
                                            {product.title}
                                        </div>
                                        <div className='wd-product-details-brand-container'>
                                            BY <span className='wd-product-details-brand-name'>{product.brand}</span>
                                        </div>
                                        <div className='wd-product-details-review-rating-container'>
                                            <div className='wd-product-details-rating-container'>
                                                {product.rating}
                                                <span><StarIcon style={{ color: "blue" }} /></span>
                                            </div>
                                            <div className='wd-product-details-review-container'>
                                                {reviews.length} Reviews
                                            </div>
                                        </div>
                                        <div className='wd-product-details-price-discount-container'>
                                            <div className='wd-product-details-price-container'>
                                                <div className='wd-product-details-currency-container'>$</div>
                                                <div>{product.price}</div> 
                                            </div>
                                            <div className='wd-product-details-discount-container'>
                                                <div className='wd-product-details-discount-text'>
                                                    Save {product.discountPercentage} %
                                                </div>
                                                <div>
                                                    Inclusive of all taxes
                                                </div>
                                            </div>
                                        </div>
                                        <div className='wd-product-details-description'>
                                            {product.description}
                                        </div>
                                        {currentUser?.role === "Buyer"
                                            && <div className='wd-product-details-qty-and-buy-container'>
                                                <FormControl style={{ minWidth: 80, marginTop: '20px' }}>
                                                    <InputLabel id="demo-simple-select-label">QTY</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={quantity}
                                                        label="QTY"
                                                        onChange={handleQuantityChange}
                                                    >
                                                        {
                                                            [...Array(product.stock > 5 ? 5 : product.stock)]
                                                                .map(
                                                                    (_, value) =>
                                                                        <MenuItem value={value+1} key={value+1}>
                                                                            <span className='wd-product-details-qty-value'>{value+1}</span></MenuItem>)
                                                        }
                                                    </Select>
                                                </FormControl>
                                                <button className='wd-product-details-buy' onClick={() => { setShowOrderForm(true) }} disabled={!quantity||quantity<=0}>
                                                    BUY NOW
                                                </button>
                                                <OrderComponent
                                                    productId={product.id}
                                                    productPrice={product.price}
                                                    quantity={quantity}
                                                    showOrderForm={showOrderForm}
                                                    setShowOrderForm={setShowOrderForm} />
                                            </div>}
                                        {
                                            product.seller && <div className='wd-product-details-seller-container'>
                                                <div className='wd-product-details-seller-text'>
                                                    Seller
                                                </div>
                                                <div className='wd-product-details-seller-name'>
                                                    {product.seller}
                                                </div>
                                            </div>
                                        }
                                    </>)}

                        </div>
                    </div>
                    <div className="wd-product-details-product-component_suggestion-container">
                        {
                            (productByIdLoading || !product) ?
                                <Skeleton animation="wave" width={"100%"} height={600} />
                                : <SuggestionsComponent product={product} />
                        }

                    </div>

                    <>
                        {
                            reviewsLoading
                                ? <Skeleton animation="wave" width={"100%"} height={600} />
                                : <ReviewList review={reviews} />
                        }
                    </>
                </div>)
            }
        </>



    );
};
export default ProductComponent;
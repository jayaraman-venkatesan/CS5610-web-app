import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cancelOrder } from '../../../services/order-service';
import { getOrders } from '../../../services/order-service';
import './index.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const OrdersComponent = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then((response) => {
            setOrders(response)
        })
    }, [])

    const navigate = useNavigate();

    const handleProductNavigate = (order) => {
        navigate(`/product/${order.product.id}`)
    }

    const handleCancel = async (order) => {
        await cancelOrder(order._id)
        const orderIndex = orders
            .findIndex((o) => o._id === order._id)
        setOrders([
            ...orders.slice(0, orderIndex),
            Object.assign({}, orders[orderIndex], { ...orders[orderIndex], isCancelled: true }),
            ...orders.slice(orderIndex + 1)]
        )
    }

    return (
        <div className='row wd-orders-list-container'>
            {orders.map((order) =>
                <div className='row wd-order-item-container' key={order.id}>
                    <div className='row wd-order-item-header-container'>
                        <div className='col-md-4 col-lg-4 col-xxl-4 row wd-order-placed-container'>
                            <div className='wd-order-placed-header'>
                                ORDER PLACED
                            </div>
                            <div className='wd-order-placed-date'>
                                {order.date}
                            </div>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xxl-2 row wd-order-placed-container'>
                            <div className='wd-order-placed-header'>
                                TOTAL
                            </div>
                            <div className='wd-order-placed-date'>
                                {'$ '}{order.price ?? 0}
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-xxl-4 row wd-order-placed-container'>
                            <div className='wd-order-placed-header'>
                                SHIP TO
                            </div>
                            {
                                <div className='wd-order-address-list-container'>
                                    {
                                        order.userAddresses?.map((address, index) =>
                                            <Tooltip arrow title={`${address.name}${', '} ${address.address1}  ${address.address2},  ${address.city} ${address.state} ${address.country} ${'-'}${address.zipCode}`}>
                                                <Button sx={{ m: 1 }} className="wd-order-address-btn">
                                                    {address.name} {(index+1)!==order.userAddresses.length&&"|"}
                                                </Button>
                                            </Tooltip>

                                        )
                                    }
                                </div>
                            }


                        </div>
                        <div className='col-md-2 col-lg-2 col-xxl-2 row wd-order-placed-container'>
                            <div className='wd-order-placed-header'>
                                ORDER #
                            </div>
                            <div className='wd-order-placed-date'>
                                {order._id.substr(-8)}
                            </div>
                        </div>
                    </div>
                    <div className='row wd-order-product-details-container'>
                        <div className='col-lg-4 col-xxl-4 row'>
                            <img className='wd-order-product-thumbnail' src={order.product.thumbnail} alt={`${order.product.id}-thumbnail`} onClick={() => handleProductNavigate(order)} />
                        </div>
                        <div className='wd-order-product-details col-lg-6 col-xxl-6 row'>
                            <div className='wd-order-product-title' onClick={() => handleProductNavigate(order)}>
                                {order.product?.title}
                            </div>
                            <div className='wd-order-product-brand-category'>
                                {order.product?.brand}
                                <span className='wd-order-product-brand-category-separator'>{'|'}</span>
                                {order.product?.category}
                            </div>
                            <div className='wd-order-product-description'>
                                {order.product?.description}
                            </div>
                            <div className='wd-order-product-delivery-instruction-header'>
                                Delivery Instruction:
                                <span className='wd-order-product-delivery-instruction'>
                                    {order.deliveryInstruction ? order.deliveryInstruction : "----"}
                                </span>
                            </div>
                        </div>

                        <div className='col-lg-2 col-xxl-2 row wd-order-product-quantity-cancel-container'>
                            <div className='wd-order-product-quantity'>
                                QTY {':'} {order.quantity}
                            </div>
                            {order.isCancelled ? <div className='wd-order-product-cancelled'> Cancelled </div>
                                : <button className='wd-order-cancel-button' onClick={() => handleCancel(order)}>Cancel</button>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrdersComponent;
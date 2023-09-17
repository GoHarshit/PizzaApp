import React, { useEffect } from 'react'
import { getUserOrders } from '../Action/orderAction'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import { Col, Row } from 'react-bootstrap';

const OrderScreen = () => {
    const orderstate=useSelector(state=> state.getUserOrdersReducer);
    const {loading,error,orders}=orderstate;
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getUserOrders())
    }, [dispatch])
  return (
    <>
        <h1><center>Your Orders</center></h1>
        {loading && (<Loader/>)}
        {error && (<Error error="Something went wrong"/>)}
        {orders && 
            orders.map((order) =>(
            <div className='container border p-4 bg-light'>
            <Row style={{padding:"5%"}}>
                <Col md={4} >
                    <h4><center>Pizza's</center></h4>
                    <hr/>
                    {
                        order.orderItems.map((item)=>(
                            <div>
                                <h5>{item.name} [{item.variants}]</h5>
                                <p>{item.quantity} *{item.prices[0][item.variants]} = {item.price} </p>
                            </div>
                        ))
                    }
                </Col>
                <Col md={4}>
                    <h4><center>Address</center></h4>
                    <hr/>
                    <h6>Street: {order.shippingAddress.street}</h6>
                    <h6>City: {order.shippingAddress.city}</h6>
                    <h6>PinCode: {order.shippingAddress.pincode}</h6>
                    <h6>Country: {order.shippingAddress.country}</h6>
                </Col>
                <Col md={4}>
                <h4><center>Order Info</center></h4>
                <hr/>
                    <h6>Order Amount: {order.orderAmount}</h6>
                    <h6>Transaction Id: {order.transactionId}</h6>
                    <h6>Order Id: {order._id}</h6>
                </Col>
            </Row>
            </div>
        )
        )
        }
    </>
  )
}

export default OrderScreen;
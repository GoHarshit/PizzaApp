import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { deliverorder, getAllOrders } from '../../Action/orderAction';
import Loader from '../Loader';
import Error from '../Error';
import { Button, Container, Table } from 'react-bootstrap';

const OrderList = () => {
  const allOrdersState=useSelector(state=>state.allUserOrdersReducer);
  const {loading,orders,error}=allOrdersState;

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <div>
    <Container>
    <h1>Orders List</h1>
      {loading && (<Loader/>)}
      {error && (<Error error="Admin order request fail"/>)}
      <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Order Id</th>
                      <th>Email</th>
                      <th>User Id</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      {orders && 
                        orders.map((order)=>(
                        <tr key={order._id}>
                          <td>{order._id}</td>
                          <td>{order.email}</td>
                          <td>{order.transactionId}</td>
                          <td>Rs {order.orderAmount}/-</td>
                          <td>{order.createdAt.substring(0,10)}</td>
                          <td>{order.isDelivered ?
                                (<h6 className='text-success'>Delivered</h6>)
                                : (<><Button className='text-danger' 
                                  onClick={()=>{
                                  dispatch(deliverorder(order._id))
                                  }}>Deliver</Button></>)
                                }</td>
                        </tr>
                      ))}
                    </tbody>
        </Table>
    </Container>
    </div>
  )
}

export default OrderList;
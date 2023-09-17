import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {useSelector,useDispatch} from "react-redux"
import {FaCircleMinus} from 'react-icons/fa6'
import {FaPlusCircle,FaTrash} from 'react-icons/fa'
import Checkout from '../Components/Checkout'
import {addToCart,deleteFromCart} from "../Action/cartAction"

const CartScreen = () => {
    const cartState=useSelector(state=>state.cartReducer);
    const cartItems=cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal= cartItems.reduce((x,item)=> x+item.price,0);

  return (
    <>
        <Container>
            <Row>
                <Col md={6}>
                    <h1>Cart Items</h1>
                    <Row>
                        {
                            cartItems.map(item=>(
                                <>
                                    <Col md={7}>
                                        <h5>{item.name}[{item.variants}]</h5>
                                        <h6>Price: {item.quantity}x{item.prices[0][item.variants]} = {item.price}</h6>
                                        <h6>Quantity:
                                         <FaCircleMinus 
                                            className='text-danger'
                                            style={{cursor:"pointer"}}
                                            onClick={()=>{
                                                dispatch(
                                                    addToCart(item,item.quantity-1,item.variants)
                                                )
                                            }}
                                         /> &nbsp;
                                         {item.quantity} &nbsp;
                                         <FaPlusCircle 
                                            className="text-success"
                                            style={{cursor:"pointer"}}
                                            onClick={()=>{
                                                dispatch(
                                                    addToCart(item,item.quantity+1,item.variants)
                                                )
                                            }}
                                            /> &nbsp;
                                        </h6>
                                    </Col>
                                    <Col md={5}>
                                        <img
                                            alt={item.Image}
                                            src={item.Image}
                                            style={{width:"80px", height:"80px", borderRadius:"4px"}}
                                        ></img>
                                        <FaTrash
                                            className='text-danger'
                                            style={{cursor:"pointer", marginLeft:"20px"}}
                                            onClick={()=>{
                                                dispatch(
                                                    deleteFromCart(item)
                                                )
                                            }}
                                        />
                                    </Col>
                                    <hr/>
                                </>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={4} >
                    <h1 style={{marginLeft:"20px"}}>Payment Info</h1>
                    <h4 style={{marginLeft:"60px",marginTop:"60px"}}>Sub Total: </h4>
                    <h4 style={{marginLeft:"60px"}}>RS: {subTotal}/-</h4>
                    <Checkout  subTotal={subTotal}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CartScreen;









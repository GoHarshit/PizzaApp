import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector } from 'react-redux';
import { placeOrder } from '../Action/orderAction';
import Loader from './Loader';
import Error from './Error';
import Success from './Success';

const Checkout = ({subTotal}) => {
    const orderState=useSelector(state=>state.placeOrderReducer);
    const {loading, error,success} =orderState;
    const dispatch=useDispatch();

    const tokenHandler=(token)=>{
        dispatch(placeOrder(token,subTotal));
        console.log(token);
    }

  return (
  <>
    {loading && (<Loader />)}
    {error && (<Error error="Something went wrong"/>)}
    {success && (<Success success="Order placed successfully"/>)}
    <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51NmWmJSFUCJGnM4sNxP5XAku0r5iUnvEj7mnEPu8OH6wkGuO2Bqcwcd0O3mzoMD4KH0juHzzetlkY0cpbXIlgycx00wSVGR9Vr'
        currency='INR'
    >
        <Button style={{marginLeft:"60px"}}>Pay Now</Button>
    </StripeCheckout>
    </>
  );
}

export default Checkout
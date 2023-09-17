
import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" });

    const { currentUser } = getState().loginUserReducer;
    const { cartItems } = getState().cartReducer;

    try {
        const response = await axios.post("/api/orders/placeorder", {
            token,
            subTotal,
            currentUser,
            cartItems,
        });

        // Assuming your server returns meaningful data on success
        const responseData = response.data;

        dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: responseData });
        console.log(responseData);
    } catch (error) {
        // Handle different error scenarios
        if (error.response) {
            // The request was made, but the server responded with an error
            console.log("Server responded with an error:", error.response.data);
        } else if (error.request) {
            // The request was made, but there was no response from the server
            console.log("No response from the server:", error.request);
        } else {
            // Something else happened while setting up the request
            console.log("Error setting up the request:", error.message);
        }

        dispatch({ type: 'PLACE_ORDER_FAIL', payload: error.message });
    }
};


export const getUserOrders=()=>async(dispatch,getState)=>{
    const currentUser=getState().loginUserReducer.currentUser;
    dispatch({type:'USER_ORDER_REQUEST'});
    try {
        const response=await axios.post("/api/orders/getuserorder",{
            userid:currentUser._id,
        })
        console.log(response);
        dispatch({type:'USER_ORDER_SUCCESS',payload: response.data});
    } catch (error) {
        dispatch({type:'USER_ORDER_FAIL',payload:error});
    }
};


export const getAllOrders=()=>async(dispatch,getState)=>{
    //const currentUser=getState().loginUserReducer.currentUser;
    dispatch({type:'ALL_ORDER_REQUEST'});
    try {
        const response=await axios.get("/api/orders/alluserorder")
        console.log(response);
        dispatch({type:'ALL_ORDER_SUCCESS',payload: response.data});
    } catch (error) {
        dispatch({type:'ALL_ORDER_FAIL',payload:error});
    }
};



export const deliverorder=(orderid)=>async(dispatch,getState)=>{
    //const currentUser=getState().loginUserReducer.currentUser;
    dispatch({type:'GET_ALL_ORDER_REQUEST'});
    try {
        const response=await axios.post("/api/orders/deliverorder",{orderid})
        console.log(response);
        alert('Delivered successfully');
        const orders=await axios.get('/api/orders/alluserorder');
        dispatch({type:'GET_ALL_ORDER_SUCCESS',payload: orders.data});
        window.location.href='/admin/orderList'
    } catch (error) {
        dispatch({type:'GET_ALL_ORDER_FAIL',payload:error});
    }
};
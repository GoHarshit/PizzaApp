import axios from "axios";
import swal from 'sweetalert';

export const getAllPizzas=()=>async(dispatch)=>{
    dispatch({type:"GET_PIZZAS_REQUEST"});
    try{
        const res= await axios.get("/api/pizzas/getAllPizzas");
        console.log(res);
        dispatch({type:"GET_PIZZAS_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type:"GET_PIZZAS_FAIL", payload:err});
    }
};

export const AddPizza=(pizza)=>async(dispatch)=>{
    dispatch({type:"ADD_PIZZAS_REQUEST"});
    try{
        const res= await axios.post("/api/pizzas/addpizza",{pizza});
        console.log(res);
        dispatch({type:"ADD_PIZZAS_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type:"ADD_PIZZAS_FAIL", payload:err});
    }
};

export const getPizzaById=(pizzaId)=>async(dispatch)=>{
    dispatch({type:"GET_PIZZABYID_REQUEST"});
    try{
        const response= await axios.post("/api/pizzas/getpizzabyid",{pizzaId});
        console.log(response);
        dispatch({type:"GET_PIZZABYID_SUCCESS", payload: response.data});
    }catch(err){
        dispatch({type:"GET_PIZZABYID_FAIL", payload:err});
    }
};

export const updatePizza=(updatedPizza)=>async(dispatch)=>{
    dispatch({type:"UPDATE_PIZZABYID_REQUEST"});
    try{
        const response= await axios.post("/api/pizzas/updatepizza",{updatedPizza});
        console.log(response);
        dispatch({type:"UPDATE_PIZZABYID_SUCCESS", payload: response.data});
        window.location.href='/admin/PizzasList';
    }catch(err){
        dispatch({type:"UPDATE_PIZZABYID_FAIL", payload:err});
    }
};


export const deletePizza=(pizzaId)=>async(dispatch)=>{
    
    try{
        const response= await axios.post("/api/pizzas/deletepizza",{pizzaId});
        console.log(response)
        swal("Pizza deleted successfully", "success");
    }catch(err){
        swal("Error while deleting pizza", "warning");
    }
};

export const filterPizza=(searchkey,cateogory)=>async(dispatch)=>{
    let filteredPizza;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try {
        const res=await axios.get("/api/pizzas/getAllPizzas")
        filteredPizza=res.data.filter(pizza=> pizza.name.toLowerCase().includes(searchkey))
        if(cateogory!=='all'){
            filteredPizza=res.data.filter(pizza=> pizza.cateogory.toLowerCase()===cateogory)
        }
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:filteredPizza})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAIL',payload:error})
    }
}
import React, { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Pizza from '../Components/Pizza'
import {useDispatch,useSelector} from "react-redux"
import {getAllPizzas} from '../Action/pizzaAction'
import Loader from '../Components/Loader'
import Error from '../Components/Error'
import Filters from '../Components/Filters'

const HomeScreen = () => {
    const dispatch=useDispatch();
    const pizzastate= useSelector(state=> state.getAllPizzaReducer);
    const {loading,pizzas,error}=pizzastate;
    useEffect( ()=> {
        dispatch(getAllPizzas());
    }, [dispatch]);

  return (
    <>
        <Container>
        {
            loading? (<Loader/>)
            :error ? (<Error>Error while fetching...</Error>)
            : (<Row>
                <Filters/>
                {pizzas.map(pizza=>(
                    <Col md={4}>
                        <Pizza pizza={pizza}/>
                    </Col>
                ))}
            </Row>)
        }
            
        </Container>
    </>
  )
}

export default HomeScreen;













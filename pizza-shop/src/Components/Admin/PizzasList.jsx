import React, { useEffect } from 'react'
import { Container,Table } from 'react-bootstrap'
//import Pizza from '../../Components/Pizza'
import {useDispatch,useSelector} from "react-redux"
import {deletePizza, getAllPizzas} from '../../Action/pizzaAction'
import Loader from '../../Components/Loader'
import Error from '../../Components/Error'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const PizzasList = () => {
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
            : (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Pizza Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pizzas && pizzas.map((pizza)=>(
                        <tr>
                          <td><img src={pizza.Image} alt='logo' style={{width:"200px", height:'100px'}}/></td>
                          <td>{pizza.name}</td>
                          <td>
                            Small: {pizza.prices[0]['small']}
                            <br/>
                            Medium: {pizza.prices[0]['medium']}
                            <br/>
                            Large: {pizza.prices[0]['large']}
                          </td>
                          <td>{pizza.cateogory}</td>
                          <td>
                          <Link to={`/admin/editpizza/${pizza._id}`}>
                            <AiFillEdit />
                          </Link>

                            &nbsp; 
                            <AiFillDelete
                              style={{color:"red", cursor:"pointer"}}
                              onClick={()=>{dispatch(deletePizza(pizza._id))}}
                            />
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </div>
              )
        }
            
        </Container>
    </>
  )
}

export default PizzasList;
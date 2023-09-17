import React, { useEffect } from 'react';
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';


const AdminScreen = () => {
  const navigate = useNavigate();
  const userState= useSelector((state)=>state.loginUserReducer);
  const {currentUser}=userState;
  useEffect(()=>{
    if(localStorage.getItem("currentUser")===null || !currentUser.isAdmin){
      window.location.href="/";
    }
  })
  return (
    <>
      <Container>
        <Row>
          <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
          <Col md={12}>
          <ButtonGroup vertical style={{ minHeight: "70vh" }}>
            <Button onClick={() => navigate('/admin/UserList')}>User List</Button>
            <Button onClick={() => navigate('/admin/PizzasList')}>All Pizzas</Button>
            <Button onClick={() => navigate('/admin/AddNewPizza')}>Add New Pizza</Button>
            <Button onClick={() => navigate('/admin/OrderList')}>All Orders</Button>
          </ButtonGroup>
        </Col>
        </Row>
      </Container>
    </>
  );
}
export default AdminScreen
 
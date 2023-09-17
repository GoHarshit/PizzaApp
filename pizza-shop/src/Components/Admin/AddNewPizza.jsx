import React, { useState } from 'react'
import { Form,Row,Col,Button, Container } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { AddPizza } from '../../Action/pizzaAction';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';

const AddNewPizza = () => {
  const [name,setName]=useState('');
  const [smallPrice,setSmallPrice]=useState();
  const [mediumPrice,setMediumPrice]=useState();
  const [largePrice,setLargePrice]=useState();
  const [Image,setImage]=useState('');
  const [description,setDescription]=useState('');
  const [cateogory,setCateogory]=useState('');
  const addPizzaState=useSelector(state=>state.addPizzaReducer);
  const {loading,error,success}=addPizzaState;
  const dispatch=useDispatch();

  const submitForm=(e)=>{
    e.preventDefault();
    const pizza={
      name,Image,description,cateogory,
      prices:{
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice
      }
    }
    dispatch(AddPizza(pizza));
  }
  return (
    <div>
    {loading && (<Loader/>)}
    {error && (<Error error="Error while adding new pizza"/>)}
    {success && (<Success success="Pizza added successfully"/>)}
    <Container>
    <Form onSubmit={submitForm}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            value={name}
            onChange={e=> setName(e.target.value)}
            placeholder="Enter name" />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Small Price</Form.Label>
          <Form.Control 
            type="text"
            value={smallPrice}
            onChange={e=> setSmallPrice(e.target.value)}
            placeholder="Set price for small size"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Medium Price</Form.Label>
          <Form.Control
            type="text"
            value={mediumPrice}
            onChange={e=> setMediumPrice(e.target.value)}
            placeholder="Set price for medium size" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Large Price</Form.Label>
          <Form.Control 
            type="text"
            value={largePrice}
            onChange={e=> setLargePrice(e.target.value)}
            placeholder="Set price for large size"
          />
        </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text" 
            value={Image}
            onChange={e=> setImage(e.target.value)}
            placeholder="Add image URL" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>description</Form.Label>
        <Form.Control 
          type="text"
          value={description}
          onChange={e=> setDescription(e.target.value)}
          placeholder="Enter Description of pizza"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Category</Form.Label>
        <Form.Control 
          type="text"
          value={cateogory}
          onChange={e=> setCateogory(e.target.value)}
          placeholder="Enter category of pizza" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default AddNewPizza;
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import '../index.css'
import { filterPizza } from '../Action/pizzaAction'

const Filters = () => {
    const dispatch=useDispatch();
    const [searchkey,setsearchkey]=useState('');
    const [cateogory,setCateogory]=useState('all');
  return (
    <div className='filter'>
        <Form>
        <Row>
            <Col md={4}>
                <Form.Control type="text"
                    value={searchkey}
                    onChange={e=>setsearchkey(e.target.value)}
                     placeholder="Search Pizza" />
            </Col>
            <Col md={4} >
            <select 
                class='form-select'
                value={cateogory}
                onChange={e=>setCateogory(e.target.value)}
                defaultValue={cateogory}
                >
                <option>All</option>
                <option>veg</option>
                <option>nonveg</option>
            </select>
            </Col>
            <Col md={3}>
                <Button className='btn' onClick={()=>{dispatch(filterPizza(searchkey,cateogory))}}>Search</Button>
            </Col>
        </Row>
    </Form>
    </div>
  )
}

export default Filters
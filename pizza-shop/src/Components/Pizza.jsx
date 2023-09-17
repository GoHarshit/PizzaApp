import React, { useState } from 'react'
import {Card,Row,Col, Button,Image} from 'react-bootstrap';
import {BiRupee} from 'react-icons/bi'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Action/cartAction';


const Pizza = ({pizza}) => {
    const [variant,setVariant]=useState("small");
    const [quantity,setQuantity]=useState(1)
   
    const [show, setShow] = useState(false);

    const dispatch=useDispatch();
    const addToCartHandler=()=>{
      dispatch(addToCart(pizza,quantity,variant))
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 

  return (
    <>
        <Card style={{ width: '20rem' , margin:"40px"}}>
      <Card.Img variant="top" src={pizza.Image} style={{height:"10rem",cursor:"pointer"}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
          {pizza.description}
        </Card.Text>
        <hr/>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={variant}  onChange={e=>setVariant(e.target.value)}
                style={{width:"6.5rem"}}
                >
                    {pizza.variants.map((variant)=>(
                        <option>{variant} </option>
                    ))}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i)=>(
                        <option value={i+1}>{i+1}</option>
                    ))}
                </select>
            </Col>
           {/* <Col md={5}>
                <h6>Select Crust</h6>
                <select value={basetype} onChange={e=>setBasetype(e.target.value)} style={{width:"10rem"}}>
                    {pizza.base.map((base)=>(
                        <option>{base}{index}->{pizza.baseprices[0][base]}</option>
                    ))}
                </select>
            </Col>*/}
          </Row>
        </Card.Text>
        <Row>
            <Col md={6} style={{fontSize:"20px"}}>Price: <BiRupee/>{pizza.prices[0][variant] *quantity }</Col>
        </Row>
        <Row>
            <Col md={6}>
                <Button className='bg-danger text-white' onClick={addToCartHandler}>Add to cart</Button>
            </Col>
            <Col md={6}>
                <Button bg-light onClick={handleShow}>Customise</Button>
            </Col>
        </Row>
      </Card.Body>
    </Card>

    {/*offCanvas*/}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{pizza.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Image src={pizza.Image} style={{height:"11rem",width:"23rem",borderRadius:"1rem"}}></Image>
          
           {pizza.description}
            <p><br></br></p>
           <Row>
            <Col md={5}>
                <h6>Select Size</h6>
                <select value={variant} onChange={e=>setVariant(e.target.value)}>
                    {pizza.variants.map((variant)=>(
                        <option>{variant}</option>
                    ))}
                </select>
            </Col>
            <Col md={5}>
            <h6>Quantity</h6>
                <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i)=>(
                        <option value={i+1}>{i+1}</option>
                    ))}
                </select>
               
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Pizza
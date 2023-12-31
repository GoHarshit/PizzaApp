import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../Action/userAction';
import Loader from '../Components/Loader';
import Success from '../Components/Success';
import Error from '../Components/Error';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch= useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    },[])
    const loginState=useSelector(state=> state.loginUserReducer);
    const {error,success,loading}=loginState;
const loginHandler= () =>{
    const user={email,password};
    dispatch(loginUser(user))
}
  return (
    <>

        <Container style={{marginTop:"30px"}}>
        {loading && <Loader/>}
        {success && <Success success="Login Successfull "/>}
        {error && <Error error="Something went Wrong"/>}
                    <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary"  onClick={loginHandler}>
                    Submit
                </Button>
                </Form>
        </Container>
         
    </>
  )
}

export default Login
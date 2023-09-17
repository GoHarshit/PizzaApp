import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {  getAllUsers } from '../../Action/userAction';
import Loader from '../Loader';
import Error from '../Error';
import { Container, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser } from '../../Action/userAction';

const UserList = () => {
  const userState=useSelector(state=>state.getAllUsersReducer)
  const {loading,error,users}=userState;
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllUsers());
  },[dispatch]);
  return (
    <div>
    <Container>
    <h1>Users List</h1>
      {loading && (<Loader/>)}
      {error && (<Error error="Admin order request fail"/>)}
      <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user)=>(
                        <tr ket={user._id}>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <AiFillDelete
                                style={{color:"red", cursor:"pointer"}}
                                onClick={()=>{
                                  dispatch(deleteUser(user._id));
                                }}
                              />
                          </td>
                        </tr>
                      ))}    
                  </tbody>
        </Table>
    </Container>
    </div>
  )
}

export default UserList;
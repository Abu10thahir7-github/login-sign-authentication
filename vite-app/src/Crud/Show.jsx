import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function Show() {

    const [users,setUsers]=useState([])
    console.log(users);
    useEffect(()=>{
        axios.get('http://localhost:3000/showall')
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h2>All users</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
    </tr>
  ))}
      
  </tbody>
</table>

    </div>
)}
export default Show

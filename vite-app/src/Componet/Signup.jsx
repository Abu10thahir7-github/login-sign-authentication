
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password })
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    };
  return (
    
        <div className="sign">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                 
                    <input 
                    type="text"
                    placeholder=' name'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-0'
                    onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="mb-3 ">
               
                    <input 
                    type="email"
                    placeholder=' email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    
                    <input 
                    type="password"
                    placeholder=' password'
                    
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="btn">

                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                </div>
            </form>
            <p >Already have an accout</p>
                <Link to={'/login'}  className=''>Login</Link>
        </div>

  )
}

export default Signup

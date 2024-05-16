
import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Crud/Home.jsx'

import Signup from './Componet/Signup.jsx'
import Login from './Componet/Login.jsx'
import  Dashboard from './Crud/Dash.jsx'
import Show from './Crud/Show.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
         
          <Route path='/login' element={<Login/>}/>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/show'  element={<Show />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
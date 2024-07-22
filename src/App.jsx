import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React, { useState } from 'react'

function App() {
  const [cart,setCart]=useState([]);

  return (
    <>
      <Navbar len={cart.length}/>
      <Outlet context={[cart,setCart]}/>
      <Footer/>
    </>
  )
}

export default App

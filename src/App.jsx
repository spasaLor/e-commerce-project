import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);

  const addToCart = (item) =>{
    let found = cart.find((cartItem) =>cartItem.id === item.id);
    if(!found){
      setCart([...cart,item]);
    }
  }
  const deleteItem = (item) =>{
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  }

  return (
    <div className="container">
      <Navbar cart= {cart}/>
      <Outlet context={{cart, addToCart, deleteItem}}/>
      <Footer/>
    </div>
  )
}

export default App

import { useContext, useState } from 'react'
import './styles.css'
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { Link } from "react-router-dom"
import Home from "./components/Home"
import Product from './components/Products';
import Login from './components/Login';
 import { CartContext } from './context/CartContext';
function App() {
  const { auth } = useContext(CartContext)


 

  return (
    <div> 
     
    
      
      {/* <Navbar /> */}
      <div className='route' >
      <Routes>

<Route path='/' element={<Login/>}/>
<Route  path='/navbar' element={<Navbar/>} />
<Route path='/product' element={<Product/>} />
<Route  path='/home' element={<Home/>} />



</Routes>

      </div>
     
   
    </div>
  )
}


export default App
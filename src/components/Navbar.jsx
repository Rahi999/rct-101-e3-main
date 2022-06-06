import React, { useContext } from 'react'
import Product from './Products'
import Login from './Login';
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { useNavigate} from "react-router-dom"

// const Link = <a />;

const Navbar = () => {
  <div data-cy="navbar">
  <Link data-cy="navbar-home-link"></Link>
  <span data-cy="navbar-cart-items-count">{/* count here */}</span>
  <button data-cy="navbar-login-logout-button"></button>
  </div>

  const { cart} = useContext(CartContext)

  const {logout , auth } = useContext(CartContext) ;
  const navigate = useNavigate()
 const handleOnClick=()=> {
   if(auth){
     logout()
     navigate("/");

   }
   else{
     navigate("/login")
   }
 }







  return (
    <div >
     <div className='main'>
     <Link to="/Home" >Home</Link>
  <Link to="/" >login</Link>
 <Link to="/product" >Product</Link>
 <Link to="/navbar" >Navbar</Link>

    <button className='theme' onClick={handleOnClick} > {auth ? "Logout" : "Login"}</button> 
      
    Cart:{cart}
     </div>

    </div>
  )
}

export default Navbar
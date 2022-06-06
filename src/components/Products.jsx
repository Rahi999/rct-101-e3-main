import React, { useEffect, useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import { Navigate, useNavigate} from "react-router-dom"
import { useContext} from "react"
import CartContext from "../context/CartContext"
import styles from "./Product.module.css"

const Product = () => {
  const [prod, setProd] = useState([]);
  const navigate = useNavigate()
  const [cart,setCart] = useState(1)
 const click = ()=> {
  setCart(cart+1)
  alert("Product added!!!")
  navigate("/navbar")
 }
  useEffect(()=> {
      const data = ()=> {
          fetch("http://localhost:3000/posts")
          .then((res)=> res.json())
          .then((d)=> {
              console.log(d)
              setProd(d)
          })
      }
      data()
  },[])
  


  return (
    <div>Products
   <div className={styles.container} >
       {prod.map((p)=> (
           <div key={p.id} >
               <Link  className={styles.a} to={`/product/${p.id}`}><img
                
                 src={p.image} alt="" 
                 />
                 <h3>{p.title}</h3>
                 <h3>{p.category}</h3>
                 <h3>{p.price}$</h3>
                 </Link>
                 <button onClick={click} >Add to Cart</button>
           </div>
           
       ))}
   </div>
   <Outlet />


    </div>
  )
}


export default Product
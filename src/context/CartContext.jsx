import React,{ createContext, useState } from "react";
import { useNavigate} from "react-router-dom"
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const navigate = useNavigate()

   const [cart, setCart] = useState(1) ;

   

   
       
       const [auth,setAuth] = useState(false);
       const login =()=> {
           setAuth(true);
           navigate("/navbar")
       }

       const logout = ()=> {
           setAuth(false);
           navigate("/navbar");

       }
    return (


        <CartContext.Provider value={{ cart, auth,login,logout}} >
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider
import React,{ useContext, useState} from 'react'
import { CartContext } from '../context/CartContext';

const Login = () => {

    const [log,setLog] = useState({}) ;

     const { login } = useContext(CartContext)

     const handleOnChange=(e)=> {
            const {name, value } = e.target;
            setLog({
                ...log,
                [name]:value,
            })
    }

    const handleOnClick=(e)=> {
        e.preventDefault();
        login()
        alert(log.email)
         
    }

  return (
    <div>

      
 
    <form onSubmit={handleOnClick} >
        <input type="email" 
        placeholder='Enter Email...'
        name='email'
        onChange={handleOnChange}
        
        /> <br /><br />

        <input type="password" 
        placeholder='Enter Your Password...'
        onChange={handleOnChange}
        /> <br /> <br />
        <input type="submit" value="Login" /> <br /> <br />
    </form>

    </div>
  )
}

export default Login
import React from 'react'
import "./Login.css"
import Logo from "../Logo/logo2.png"
import Fb from "../Logo/facebook.png"
import Gg from "../Logo/Google.png"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div class="center">
      
         <input type="checkbox" id="show" />
         <div class="container">
            <div class="text">
            <img class="Style" src= {Logo} alt='' /> 
               <img class="fb" src= {Fb} alt='' />
               <img class="Gg" src= {Gg} alt='' />
               <h1 class = "Style">Login</h1>
            </div>
            <form action="#">
               <div class="data">
                  
                  <input type="text" placeholder='Email or Phone' />
               </div>
               <div class="data">
                  {/* <label>Password</label> */}
                  <input type="password" placeholder='Password' />
               </div>
               <div class="forgot-pass">
               <Link to="/Forgot">Forgot Password</Link>
               </div>
               <div class="btn">
                  <div class="inner"></div>
                  <button type="submit">login</button>
               </div>
               <div class="signup-link">
                  Not a member? 
                  <Link to="/Registration">Signup Now</Link>
               </div>
            </form>
         </div>
      </div>
  )
}

export default Login
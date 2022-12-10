import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div class="center">
      
         <input type="checkbox" id="show" />
         <div class="container">
            <div class="text">
               Login
            </div>
            <form action="#">
               <div class="data">
                  <label>Email or Phone</label>
                  <input type="text" required />
               </div>
               <div class="data">
                  <label>Password</label>
                  <input type="password" required />
               </div>
               <div class="forgot-pass">
                  <a href="../Forgot">Forgot Password?</a>
               </div>
               <div class="btn">
                  <div class="inner"></div>
                  <button type="submit">login</button>
               </div>
               <div class="signup-link">
                  Not a member? <a href="../Registration">Signup now</a>
               </div>
            </form>
         </div>
      </div>
  )
}

export default Login
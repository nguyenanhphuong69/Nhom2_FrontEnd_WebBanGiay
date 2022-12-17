import React from 'react'
import { Link } from 'react-router-dom'
import "./Forgot.css"
import LogoF from "../Logo/logo2.png"
const Forgot = () => {
  return (
    <div class="center">
    <input type="checkbox" id="show" />
    <div class="container">
       <div class="text">
         <img class="LogoF" src= {LogoF} alt=''/>
       ForgotPassword
       </div>
       <form action="#">
          <div class="data">
             <label>Email or Phone</label>
             <input type="text" required />
          </div>
          <div class="btn">
             <div class="inner"></div>
             <button type="submit">submit</button>
          </div>
          <div class="signup-link">
          <Link to="/Login">Login Now</Link>
          </div>
       </form>
    </div>
 </div>
  )
}

export default Forgot
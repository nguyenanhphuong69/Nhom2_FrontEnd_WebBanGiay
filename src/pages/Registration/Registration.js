import React from 'react'
import {Link} from 'react-router-dom'
import Lg from "../Logo/logo2.png"
import "./Registration.css"
const Registration = () => {
  return (
    <div class="container">
    <div class="title">
    <img class="Lg" src= {Lg} alt='' /> 
      <b class= "Text">Registration</b>
      </div>
    <br/>
    <br/>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
           {/* < input type="tel" name="phone"/> */}
             <input type="tel" id="phone" name="phone" pattern="[0]{1}[0-9]{4}[0-9]{5}" placeholder="Enter your phone number" required /> 
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="number" placeholder="Gender" required />
          </div>
          <div class="input-box">
            <span class="details">Date of birth</span>
            <input type="Date" placeholder="Date of birth" required />
          </div>
        </div>
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div class="button">
          <input type="submit" value="Register" /> 
          {/* <center><a href="../Login">Login </a></center> */}
          <center><Link to="/Login" class="L">Login</Link></center>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Registration
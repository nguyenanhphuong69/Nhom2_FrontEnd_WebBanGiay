import React from 'react'
import { useState } from "react";
import "./Login.css"
import Logo from "../Logo/logo2.png"
// import Fb from "../Logo/facebook.png" 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
      const [showPassword, showPasswordChange] = useState(false)
      const [email,emailChange] = useState();
      const [password,passwordChange] = useState();
     
      const navigate = useNavigate();
    
      const handlesubmit = async (e) => {
         e.preventDefault();
         await axios.post('http://localhost:5000/customer/login', {
            email,
            password
         }, {
            headers: { "content-type": "application/json" }
         }).then((res) => {
            if(res.status === 200) {
               // alert("Saved successfully.");
               navigate("/");
            } 
         }).catch((error)=>{
               alert(`${error.response.data.message}`);

         })
      };   
  return (

    <div className='center'>
         <input type='checkbox' id="show" />
         <div className='container'>
            <div className='text'>
            <img className='Style' src= {Logo} alt='' /> 
            {/* <img className='fb' src= {Fb} alt='' /> */}
            {/* <img className='Gg' src= {Gg} alt='' /> */}
               <h1 className = 'Login'>Login</h1>
               {/* <div>Login</div> */}
            </div>
            <form action="#" onSubmit={handlesubmit}>
               <div className='data'>
                  
                  <input type='email' placeholder='Email' required value={email} onChange={(e) => emailChange(e.target.value)}/>
               </div>
               <div className='data'>
                  {/* <label>Password</label> */}
                  {/* <input type='password' placeholder='Password' value={password} onChange={(e) => passwordChange(e.target.value)}  /> */}
                  <input type={showPassword ? 'text' : 'password'} placeholder="Password" required value={password} onChange={(e) => passwordChange(e.target.value)}/>
                  
               <div className='p-relative'>
                  <div className='eye'>
                     {!showPassword ?
                        <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} onClick={() => showPasswordChange(true)} />
                     : <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: 'pointer' }} onClick={() => showPasswordChange(false)} />
                     }
                  </div>
               </div>
               </div>
               <div className='forgot-pass'>
               <Link to="/Forgot">Forgot Password </Link>
               </div>
               <div className='btn'>
                  <div className='inner'></div>
                  <button type="submit" >login</button>
               </div>
               <div className='signup-link'>
                  Not a member? 
                  <Link to="/signup">Create a free account</Link>
               </div>
               
            </form>
            <a href="#" className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
            </a>
         </div>
      </div>
      );
    
//          function changeTypePassword(){
//          document.getElementById('password').type = document.getElementById('password').type == 'text' ? 'password' : 'text';
// }
   
      
  }

  
export default Login
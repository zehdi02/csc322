import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './SignIn.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

import MainLayout from '../layout/MainLayout';



function SignIn() {
    const [useremail, getEmail]=useState("");
    const [userpassword, getPassword]=useState("");
    const [signinMessage,getsigninMessage]=useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); //is set true when user is logged in
    const [fullname, getfullname]=useState("");
    const navigate = useNavigate();
  
    //Login user If user is
    const login = () => {
      Axios.post("http://localhost:3001/sign-in", {
        email: useremail,
        password: userpassword,
      }).then((response) => {
        if(response.data.message){
          window.loginStatus=false;
          console.log(window.loginStatus);
        getsigninMessage(response.data.message); //Login unsucceful
        }else{
         console.log(response.data[0]);
         const data=response.data[0];    //Login succfull
         window.loginStatus=true;        
         localStorage.setItem("FullName",data.FirstName+ " "+data.LastName);   
         localStorage.setItem("Phone#",data.Phone);
         localStorage.setItem("email",data.Email);
         localStorage.setItem("LoginStatus",true);  
         localStorage.setItem("wallet",data.Wallet);   
      
         console.log(window.loginStatus);
         navigate('/user-page');     
        }
      });
      
    };
    
  
  return (
    <MainLayout>
        <div className="signin-container">
            <h1>Sign In to O-CompS</h1>
            <form className="signin-form">
              <input type="email" name="email" placeholder="Email" required onChange={(e) => {getEmail(e.target.value);}}/>
              <input type="password" name="password" placeholder="Password" required onChange={(e) => {getPassword(e.target.value);}}/>
              <button type="button"  onClick={login} >Sign In</button>
            </form>
            <p><a href="#">Forgot your password?</a></p>
            <p>{signinMessage}</p> 
          </div>
          
    </MainLayout>
  );
    
}

export default SignIn;

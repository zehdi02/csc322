import React, { useState } from 'react';
import Axios from 'axios';

import './SignIn.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

import MainLayout from '../layout/MainLayout';

function SignIn() {
    const [useremail, getEmail]=useState("");
    const [userpassword, getPassword]=useState("");
    const [signinMessage,getsigninMessage]=useState("");

    const login = () => {
      Axios.post("http://localhost:3001/sign-in", {
        email: useremail,
        password: userpassword,
      }).then((response) => {
        if(response.data.message){
        getsigninMessage(response.data.message);
        }else{
        getsigninMessage(response.data[0].FirstName); //the Email part must be the same as db
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

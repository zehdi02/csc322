import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

import './Forgot.css'

import MainLayout from '../layout/MainLayout'

function Forgot() {
  const [emailReg, setemailReg] = useState("");
  const [NewpasswordReg, setNewpasswordReg] = useState("");

  const reset = () => {
    Axios.post("http://localhost:3001/forgot", {
      email: emailReg,
      password: NewpasswordReg,
    }).then((response) => {
      console.log(response);
    });
  };


  return (
    <MainLayout>
        <div class="signup-container">
                <h1>Reset Your Password</h1>
                <form class="signup-form">
                    <input type="email" name="email" placeholder="Email" required onChange={(e) => {setemailReg(e.target.value);}}/>
                    <input type="password" name="password" placeholder="New Password" required onChange={(e) => {setNewpasswordReg(e.target.value);}}/>
                    <button type="submit" onClick={reset} >Reset Password</button>
                </form>
                <p>Proceed to <a href="/sign-in">Sign in</a> After Reset </p>
            </div>
    </MainLayout>
  )
}

export default Forgot

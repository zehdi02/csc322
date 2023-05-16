import React, { useState } from 'react'
import Axios from 'axios'

import './SignUp.css'

import MainLayout from '../layout/MainLayout'

function SignUp() {

  const [fnameReg, setfnameReg] = useState("");
  const [lnameReg, setlnameReg] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [phoneReg, setphoneReg] = useState("");
  const [signupMessage,getsignupMessage]=useState("");
  const regist = () => {
    Axios.post("http://localhost:3001/sign-up", {
      firstname: fnameReg,
      lastname: lnameReg,
      email: emailReg,
      password: passwordReg,
      phone: phoneReg,
    }).then((response) => {
      if(response.data.message){
      console.log(response.data.message);
      getsignupMessage(response.data.message);
      }else{
        getsignupMessage("Something went wrong please try again !!!");
      }

    });
  };


  return (
    <MainLayout>
        <div class="signup-container">
                <h1>Create an Account</h1>
                <form class="signup-form">
                    <input type="text" name="firstname" placeholder="First Name" required onChange={(e) => {setfnameReg(e.target.value);}}/>
                    <input type="text" name="lastname" placeholder="Last Name" required onChange={(e) => {setlnameReg(e.target.value);}}/>
                    <input type="email" name="email" placeholder="Email" required onChange={(e) => {setemailReg(e.target.value);}}/>
                    <input type="password" name="password" placeholder="Password" required onChange={(e) => {setpasswordReg(e.target.value);}}/>
                    {/*<input type="password" name="confirm_password" placeholder="Confirm Password" required />*/}
                    <input type="tel" name="phone" placeholder="Mobile Phone Number" required onChange={(e) => {setphoneReg(e.target.value);}}/>
                    <button type="submit" onClick={regist} >Sign Up</button>
                </form>
                <p>Already have an account? <a href="/sign-in">Sign in</a></p>
                <p>{signupMessage}</p> 
            </div>
    </MainLayout>
  )
}

export default SignUp

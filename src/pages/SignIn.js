import React from 'react';

import './SignIn.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

import MainLayout from '../layout/MainLayout';

function SignIn() {
    
  return (
    <MainLayout>
        <div className="signin-container">
            <h1>Sign In to O-CompS</h1>
            <form className="signin-form" action="/signin" method="post">
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
            <p><a href="#">Forgot your password?</a></p>
          </div>
    </MainLayout>
  );
}

export default SignIn;

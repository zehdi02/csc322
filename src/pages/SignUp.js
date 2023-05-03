import React from 'react'

import MainLayout from '../layout/MainLayout'

function SignUp() {
  return (
    <MainLayout>
        <div class="signup-container">
                <h1>Create an Account</h1>
                <form class="signup-form" action="/signup" method="post">
                    <input type="text" name="firstname" placeholder="First Name" required />
                    <input type="text" name="lastname" placeholder="Last Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                    <input type="tel" name="phone" placeholder="Mobile Phone Number" required />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
    </MainLayout>
  )
}

export default SignUp
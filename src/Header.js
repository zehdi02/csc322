import React from 'react'

export default function header() {
  return (
    <header className="nav_bar">
                <div className="header-container">
                    <div className="logo">
                        <a href="index.html">
                            <img src="img/o-comps_logo2.png" alt="O-CompS Logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Purchase History</a></li>
                            <li><a href="signin.html">Sign In</a></li>
                            <li><a href="signup.html">Create an Account</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
  )
}

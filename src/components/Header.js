import React from 'react'

import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header className="nav_bar">
                <div className="header-container">
                    <div className="logo">
                        <Link to="/">
                            <img src="img/o-comps_logo2.png" alt="O-CompS Logo"/>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/browse-products">Products</Link></li>
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

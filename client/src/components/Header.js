import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

import Cart from '../components/Cart'
import { CartProvider } from "react-use-cart"
import ItemCard from './browse/ItemCard'
import testData from "../components/browse/testData"


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartContainerRef = useRef(null);
  const [loginStatus,getloginStatus]= useState(()=>{
    window.loginStatus = localStorage.getItem('LoginStatus');
    console.log(window.loginStatus);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartContainerRef.current && !cartContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartContainerRef]);
     //If user is logged in shows this header
    if(window.loginStatus){
      return(<header className="nav_bar">

      <div className="header-container">
          <div className="logo-search-cart">
              <Link to="/" className="logo">
                  <a href="#">
                      <img src={require('../img/o-comps_logo2.png')} alt="O-CompS Logo" />
                  </a>
              </Link>
              {/* <input type="text" placeholder="Search" className="search-bar" /> */}
              <div className="cart" ref={cartContainerRef}>
                <button className="cart-button" onClick={handleClick}>🛒</button>
                <div className={`cart-container ${isOpen ? 'open' : ''}`}>
                   
                    <CartProvider>
                      <Cart />
  
                    </ CartProvider>
                </div>
              </div>
          </div>
  
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/browse-products">Products</Link></li>
                  <li><Link to="/build-pc">Build a PC</Link></li>
                  <li><a href="#">About Us</a></li>
                  {/* <li><a href="#">Contact Us</a></li>  */}
                  {/* <li><a href="#">Purchase History</a></li> */}
                   <li><Link to="/user-page">User Account</Link></li> 
                  {/* <li><Link to="/sign-up">Buy</Link></li> */}
              </ul>
          </nav>
      </div>
      {isOpen && <div className="overlay" />}
      </header>);

    }else
 //If user is not logged in show this header
  return (
    <header className="nav_bar">

    <div className="header-container">
        <div className="logo-search-cart">
            <Link to="/" className="logo">
                <a href="#">
                    <img src={require('../img/o-comps_logo2.png')} alt="O-CompS Logo" />
                </a>
            </Link>
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="cart" ref={cartContainerRef}>
              <button className="cart-button" onClick={handleClick}>🛒</button>
              <div className={`cart-container ${isOpen ? 'open' : ''}`}>
                  {/* Cart items will be displayed here */}
                  <CartProvider>
                    <Cart />

                    {/* <div className="prod_browse">
                        {testData.productData.map((item, index)=> {
                            return (
                                <ItemCard 
                                    item={item} 
                                    key={index}
                                    img={item.img} 
                                    title={item.title} 
                                    price={item.price} 
                                    quantity={item.quantity} 
                                    rating={item.rating} />
                            )
                        })}
                    </div> */}
                  </ CartProvider>
              </div>
            </div>
        </div>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse-products">Products</Link></li>
                <li><Link to="/build-pc">Build a PC</Link></li>
                <li><a href="#">About Us</a></li>
                {/* <li><a href="#">Contact Us</a></li>  */}
                {/* <li><a href="#">Purchase History</a></li> */}
                <li><Link to="/sign-in">Sign In</Link></li>
                <li><Link to="/sign-up">Create an Account</Link></li>
            </ul>
        </nav>
    </div>
    {isOpen && <div className="overlay" />}
    </header>
  );
}

export default Header;

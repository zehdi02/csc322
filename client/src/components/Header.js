import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Cart from '../components/Cart'
import { CartProvider } from "react-use-cart"
import ItemCard from '../components/ItemCard'
import testData from "../components/testData"


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartContainerRef = useRef(null);

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
                <li><a href="#">About Us</a></li>
                {/* <li><a href="#">Contact Us</a></li>  */}
                <li><a href="#">Purchase History</a></li>
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

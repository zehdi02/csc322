import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCart, CartProvider } from 'react-use-cart';

import './Cart_checkout.css'

const Cart_checkout = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        confirmPurchase,
    } = useCart();

    const [balance, setBalance] = useState(parseFloat(localStorage.getItem('wallet')) || 0);

    const roundedTotalPrice = cartTotal.toFixed(2); // Round the total price to 2 decimal places
    useEffect(() => {
        const storedBalance = parseFloat(localStorage.getItem('wallet')) || 0;
        setBalance(storedBalance);
    }, []); // Run this effect only once on component mount


    //for pop up
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };

    //to check if user is logged in
    const loginstat = localStorage.getItem("LoginStatus");

    const handleConfirmPurchase = () => {
        if (!loginstat) {openPopup();}
        else {
            if (balance >= cartTotal) {
                emptyCart();
                const updatedBalance = balance - cartTotal;
                setBalance(updatedBalance);
                localStorage.setItem('wallet', updatedBalance.toString()); // Store the updated balance in local storage
            } else {
                console.log('Insufficient balance');
                // Handle insufficient balance error
            }}}

    //Format number
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      });
    let formatBalance=useState(formatter.format(balance));

    return (
        <div className="cart-wrapper">
            
            <div className='checkout-cont'>
                <div className="user-wallet">
                    <h3>Your Balance:</h3>
                    <label>{formatBalance}</label>
                </div>
                <div className='payup'>
                    <a href='#'>
                        <button className=''
                        onClick={handleConfirmPurchase }>
                            Confirm Purchase
                        </button>
                        {showPopup && (
                            <div className = "popup">
                                <div className = "popup-content">
                                    <span className = "close" onClick={closePopup}>&times;</span>
                                    <h2> Error </h2>
                                    <p> Please Sign in and Deposit Money to continue to Checkout </p>
                                    </div>
                                    </div>
                        )}
                    </a>
                </div>
            </div>

            <div className="total-clear">
                <h2>{totalItems}🛒</h2>
                <h2 id="total-price">Total Price: ${roundedTotalPrice}</h2>
                <button className=""
                    onClick={() => emptyCart()}>
                        Clear Cart
                </button>
            </div>

            <table className="cart-table">
                <tbody>
                    {items.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} />
                                </td>
                                <td>
                                    <p className="prod-title">{item.title}</p>
                                </td>
                                <td className="price-quantity">
                                    <p>${item.price}</p>
                                    <p>#{item.quantity}</p>
                                </td>
                                <td className="min-add-rem">
                                    <button className=""
                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                    >-</button>
                                    <button className=""
                                    onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                    >+</button>
                                    <button className=""
                                    onClick={() => removeItem(item.id)}
                                    >Remove Item</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Cart_checkout

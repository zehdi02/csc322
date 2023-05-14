import React, { createContext, useContext, useState } from 'react';
import {useCart } from "react-use-cart";
import {CartProvider} from "react-use-cart"
import { Link, useHistory } from 'react-router-dom';


import './Cart_build.css'

const Cart_build = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const roundedTotalPrice = cartTotal.toFixed(2); // Round the total price to 2 decimal places


    if (isEmpty) return <h1 className="empty-cart">Cart is Empty</h1>
    return (
        <div className="cart-wrapper">
            <div className="total-clear">
                <h2 className="total-items">{totalItems}🛒</h2>
                <h2 className="total-price">Total Price: ${roundedTotalPrice}</h2>
                <button className="clear-cart"
                    onClick={() => emptyCart()}>
                        Clear Cart
                </button>
                <button id="checkout">
                    <Link to="/checkout">
                        Checkout
                    </Link>
                </button>
            </div>
            <div>
                
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
                                    <p className='prod-title'>{item.title}</p>
                                </td>
                                <td className="price-quantity">
                                    <p>${item.price}</p>
                                    <p>#{item.quantity}</p>
                                </td>
                                {/* <td></td> */}
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

export default Cart_build
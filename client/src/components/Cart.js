import React, { createContext, useContext, useState } from 'react';
import {useCart } from "react-use-cart";
import {CartProvider} from "react-use-cart"

import './Cart.css'

const Cart = () => {

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

    if (isEmpty) return <h1 className="">Your Cart is Empty</h1>
    return (
        <div className="cart-wrapper">
            <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
            <table className="cart-table">
                <tbody>
                    {items.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity: {item.quantity}</td>
                                <td>
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
            <div>
                <h2>Total Price: {cartTotal}</h2>
            </div>
            <div>
                <button className=""
                onClick={() => emptyCart()}>
                    Clear Cart
                </button>
            </div>
        </div>
    )
}

export default Cart
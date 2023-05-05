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

    // if (isEmpty) return <h1 className="">Cart is Empty</h1>
    return (
        <div className="cart-wrapper">
            <div className="total-clear">
                <h2>{totalItems}🛒</h2>
                <h2>Total Price: ${cartTotal}</h2>
                <button className=""
                    onClick={() => emptyCart()}>
                        Clear Cart
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
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>#{item.quantity}</td>
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

export default Cart
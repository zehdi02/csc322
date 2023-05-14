import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import './Checkout.css'

import MainLayout from '../layout/MainLayout'
import testData from "../components/browse/testData"

import { CartProvider } from "react-use-cart"
import Cart_checkout from '../components/Cart_checkout'
import {useCart } from "react-use-cart";

function Checkout() {

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

  return (
  <MainLayout>
    <div className='checkout-contain'>
      <CartProvider>
        
        <Cart_checkout />
        {/* <div className="cart-wrapper">
        <div className="total-clear">
          <h2>{totalItems}🛒</h2>
          <h2 id="total-price">Total Price: ${roundedTotalPrice}</h2>
          <button className=""
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

        </div> */}
      </ CartProvider>
    </div>
  </MainLayout>
  )
}

export default Checkout
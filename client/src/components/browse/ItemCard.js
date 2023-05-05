import React, { createContext, useContext, useState } from 'react';
import { useCart } from "react-use-cart"

import './ItemCard.css'

const ItemCard = (props) => {
    const { addItem } = useCart()
    
    return (
        <div className="prod-item" id="prod1">
            <div className="left-col">
                <a href="#">
                    <img src={props.img} alt="Product 1" />
                </a>
            </div>
            <div className="middle-col">
                <a href="#">
                    <p>{props.title}</p>
                </a>
                <div className="rating-stock">
                    <div className="prod-rating">
                        <h5>Rating:</h5>
                        <p id="#">{props.rating}</p>
                    </div>
                    <div className="prod-stock">
                        <h5>Stock:</h5>
                        <p id="#">{props.quantity}</p>
                    </div>
                </div>
            </div>
            <div className="name_buy">
                <p>${props.price}</p>
                {/* <a href="#" className="cta">
                    <p></p>
                </a> */}
                <button className="bt" 
                onClick={() => addItem(props.item)}
                >🛒 Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ItemCard
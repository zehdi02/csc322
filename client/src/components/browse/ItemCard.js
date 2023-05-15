import React, { createContext, useContext, useState } from 'react';
import { useCart } from "react-use-cart"
import { useNavigate } from 'react-router-dom';
import ProductDemo from "../../pages/Products/ProductDemo.js";
import './ItemCard.css'

 export let id=1;

const ItemCard = (props) => {
    const navigate = useNavigate();
    const { addItem } = useCart()
    console.log("Id",id);
    //Gets iteam clicked and passes it to productDemos using props

    const handleClick = event => {
        id=event.currentTarget.id; //Set ID based on target clicked
         navigate("/product-demo")
      };

    return (
        <div className="prod-item" id="prod1">
            <div className="left-col">
                <a href="#">
                    <img src={props.img} alt="Product 1" onClick={handleClick} id={props.id}/>
                </a>
            </div>
            <div className="middle-col">
                <a href="#" onClick={handleClick} id={props.id} >
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

export default ItemCard;

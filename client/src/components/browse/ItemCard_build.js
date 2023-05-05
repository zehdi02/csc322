import React, { createContext, useContext, useState } from 'react';
import { useCart } from "react-use-cart"

import './ItemCard_build.css'

const ItemCard_build = (props) => {
    const { addItem } = useCart()

    return (
    <div className="build-prod">
        <div className="build-grid">
            <a className="cta"
            onClick={() => addItem(props.item)}>
                <img src={props.img} />
            </a>
            <a href="#">{props.title}</a>
            <h3>${props.price}</h3>
        </div>
    </div>
  )
}

export default ItemCard_build
import React, { createContext, useContext, useState } from 'react';

import './ItemCards_deal.css'

const ItemCards_deal = (props) => {
    
    return (
        <div className="best_deal">
            <a href="#" className="cta">
                <img src={props.img} />
            </a>
            <a href="#">
                <p>{props.title}</p>
            </a>
        </div>
    )
}

export default ItemCards_deal
import React, { createContext, useContext, useState } from 'react';

import './ItemCards_user.css'

const ItemCards_user = (props) => {
    
    return (
        <div className="personal-prod">
            <a href="#" className="cta">
                <img src={props.img} alt="Deal 1"/>
            </a>
            <a href="#">
                <p>{props.title}</p>
            </a>
        </div>
    )
}

export default ItemCards_user
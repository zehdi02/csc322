import React, { createContext, useContext, useState } from 'react';

import './ItemCards_new.css'

const ItemCards_new = (props) => {
    
    return (
            <div className="new_prod_container">

                <div className="new_prod">
                    <a class="cta" href="#">
                        <img src={props.img} />
                    </a>
                    <a href="#">
                        <h3>{props.title}</h3>
                    </a>
                    <p>{props.desc}</p>
                    <a href="#" className="cta">Learn More</a>
                </div>
            </div>
    )
}

export default ItemCards_new
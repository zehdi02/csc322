import React, { createContext, useContext, useState } from 'react';
import testData from '../testData';
import './Filter_cat.css'

const Filter_brand = (props) => {
    
    return (
        <div className="filter-brand">
            <label>
                <input type="checkbox" name="cat" value="option1" />
                {props.brand}
            </label>
        </div>
    )
}

export default Filter_brand
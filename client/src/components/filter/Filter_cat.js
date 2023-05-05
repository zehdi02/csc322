import React, { createContext, useContext, useState } from 'react';
import testData from '../browse/testData';
import './Filter_cat.css'

const Filter_cat = (props) => {
    
    return (
        <div className="filter-cat">
            <label>
                <input type="checkbox" name="cat" value="option1" />
                {props.cat}
            </label>
        </div>
    )
}

export default Filter_cat
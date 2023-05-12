import React from 'react';
import './Filter_cat.css';

const Filter_brand = ({ brand, selectedBrand, setSelectedBrand }) => {
    const handleCategoryChange = (event) => {
        console.log('handleCategoryChange called');
        if (event.target.checked) {
            setSelectedBrand([...selectedBrand, event.target.value]);
        } else {
            setSelectedBrand(
            selectedBrand.filter((category) => category !== event.target.value)
          );
        }
        console.log('selectedBrand:', selectedBrand);
      };
    
    return (
        <div className="filter-brand">
            <label>
                <input
                type="checkbox"
                name="brand"
                value={brand}
                checked={selectedBrand.includes(brand)}
                onChange={handleCategoryChange}
                />
                {brand}
            </label>
        </div>
    )
}

export default Filter_brand
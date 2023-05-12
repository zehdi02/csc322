import React from 'react';
import './Filter_cat.css';

const Filter_cat = ({ cat, selectedCategories, setSelectedCategories }) => {
    const handleCategoryChange = (event) => {
        console.log('handleCategoryChange called');
        if (event.target.checked) {
          setSelectedCategories([...selectedCategories, event.target.value]);
        } else {
          setSelectedCategories(
            selectedCategories.filter((category) => category !== event.target.value)
          );
        }
        console.log('selectedCategories:', selectedCategories);
      };
      

    return (
        <div className="filter-cat">
            <label>
                <input
                type="checkbox"
                name="cat"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={handleCategoryChange}
                />
                {cat}
            </label>
        </div>
  );
};

export default Filter_cat;

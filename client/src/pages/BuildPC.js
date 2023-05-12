import React, { useState } from 'react'

import './BuildPC.css'

import MainLayout from '../layout/MainLayout'
import ItemCard_build from '../components/browse/ItemCard_build'
import testData from "../components/browse/testData"

import Cart_build from '../components/Cart_build'
import { CartProvider } from "react-use-cart"

import Filter_cat from '../components/filter/Filter_cat'
import Filter_brand from '../components/filter/Filter_brand'

function BuildPC() {

    const [selectedPriceRange, setSelectedPriceRange] = useState('');

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    // display all products by default before filtering
    const filteredData = testData.productData.filter((item) => {
        return (selectedCategories.length === 0 || selectedCategories.includes(item.cat)) &&
        (selectedBrand.length === 0 || selectedBrand.includes(item.brand));
      });

    console.log('filteredData:', filteredData);

    return (
    
        <MainLayout>
            <div className="border"></div>
            <div className="prod-wrapper" >
    
                <div className="filter">
                    <div className="cat">
                        <h3>CATEGORY</h3>
                        <div className="catBox">
                        {
                            [...new Set(testData.productData.map(item => item.cat))]
                            .map((cat, index) => (
                                <Filter_cat
                                    cat={cat}
                                    key={index}
                                    selectedCategories={selectedCategories}
                                    setSelectedCategories={setSelectedCategories}
                                />
                            ))
                        }
                        </div>

                    </div>

                    <div className="brand">
                        <h3>BRAND</h3>
                        <div className="brandBox">
                            {
                                [...new Set(testData.productData.map(item => item.brand))]
                                .map((brand, index) => (
                                    <Filter_brand
                                        brand={brand} 
                                        key={index} 
                                        selectedBrand={selectedBrand}
                                        setSelectedBrand={setSelectedBrand}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="price">
                        <h3> PRICE </h3>
                        <div className="priceBox">
                            <label>
                                <input type="radio" name="price" value="lowToHigh" 
                                onChange={() => setSelectedPriceRange('lowToHigh')} />
                                Low to High
                            </label>
                            <label>
                                <input type="radio" name="price" value="highToLow" 
                                onChange={() => setSelectedPriceRange('highToLow')} />
                                High to Low
                            </label>
                        </div>
                    </div>

                    <div className="rating">
                        <h3> RATING </h3>
                        <div className="ratingBox">
                            <label>
                                <input type="checkbox" name="rating" value="5star" />
                                <span> &#9733;&#9733;&#9733;&#9733;&#9733; </span> & Up
                            </label>
                            <label>
                                <input type="checkbox" name="rating" value="4star" />
                                <span> &#9733;&#9733;&#9733;&#9733;&#9734; </span> & Up
                            </label>
                            <label>
                                <input type="checkbox" name="rating" value="3star" />
                                <span> &#9733;&#9733;&#9733;&#9734;&#9734; </span> & Up
                            </label>
                        </div>
                    </div>
                </div>

                <CartProvider>
                    <div className="build_browse">
                        {filteredData
                            .sort((a, b) => {
                                if (selectedPriceRange === 'lowToHigh') {
                                return a.price - b.price;
                                } else if (selectedPriceRange === 'highToLow') {
                                return b.price - a.price;
                                }
                            })
                            .map((item, index)=> {
                                return (
                                    <ItemCard_build
                                        item={item} 
                                        key={index}
                                        img={item.img} 
                                        title={item.title} 
                                        price={item.price} 
                                        quantity={item.quantity} 
                                        rating={item.rating} />
                                )
                            })}
                    </div>
                    <Cart_build />
                </ CartProvider>

            </div>
        </MainLayout>
        
    
      )
}

export default BuildPC
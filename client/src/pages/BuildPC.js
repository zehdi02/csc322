import React from 'react'

import './BuildPC.css'

import MainLayout from '../layout/MainLayout'
import ItemCard_build from '../components/browse/ItemCard_build'
import testData from "../components/browse/testData"

import Cart_build from '../components/Cart_build'
import { CartProvider } from "react-use-cart"

import Filter_cat from '../components/filter/Filter_cat'
import Filter_brand from '../components/filter/Filter_brand'

function BuildPC() {
    return (
    
        <MainLayout>
            <div className="border"></div>
            <div className="prod-wrapper" >
    
                <div className="filter">
                    <div className="cat">
                        <h3>CATEGORY</h3>
                        <div className="catBox">
                        {/* {testData.productData.map((item, index)=> { */}
                            {
                                [...new Set(testData.productData.map(item => item.cat))].map((cat, index) => (
                                    <Filter_cat 
                                        cat={cat} 
                                        key={index} 
                                    />
                                ))
                            }
                        </div>
                    </div>
    
                    <div className="brand">
                        <h3 > BRAND </h3>
                        <div className="brandBox">
                        {/* {testData.productData.map((item, index)=> { */}
                            {
                                [...new Set(testData.productData.map(item => item.brand))].map((brand, index) => (
                                    <Filter_brand
                                        brand={brand} 
                                        key={index} 
                                    />
                                ))
                            }
                        </div>
                    </div>
    
                    <div className="price">
                        <h3> PRICE </h3>
                        <div className="priceBox">
                            <label>
                                <input type="checkbox" name="price" value="option1" />
                                Low to High
                            </label>
                            <label>
                                <input type="checkbox" name="proce" value="option2" />
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
                        {testData.productData.map((item, index)=> {
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
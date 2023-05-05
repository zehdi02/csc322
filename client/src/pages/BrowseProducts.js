import React from 'react'

import './BrowseProducts.css'

import MainLayout from '../layout/MainLayout'
import ItemCard from '../components/ItemCard'
import testData from "../components/testData"

import Cart from '../components/Cart'
import { CartProvider } from "react-use-cart"
import Filter_cat from '../components/filter/Filter_cat'


function BrowseProducts() {

    // const[cart, setCart] = useState({});

    console.warn(testData.productData)



  return (
    
    <MainLayout>
        <div className="border"></div>
        <div className="prod-wrapper" >

            <div className="filter">
                {/* {testData.productData.map((item, index)=> {
                    return (
                        <ItemCard 
                            item={item} 
                            key={index}
                            img={item.img} 
                            title={item.title} 
                            price={item.price} 
                            quantity={item.quantity} 
                            rating={item.rating} />
                    )
                })} */}

                <div className="cat">
                    <h3>CATEGORY</h3>
                    <div className="catBox">
                        
                    {testData.productData.map((item, index)=> {
                    return (
                            <Filter_cat 
                                item={item} 
                                key={index}
                                cat={item.cat} />
                        )
                    })}
                    </div>
                </div>

                <div className="brand">
                    <h3 > BRAND </h3>
                    <div className="brandBox">
                            <label>
                                <input type="checkbox" name="brand" value="option1" />
                                Brand A
                            </label>
                            <label>
                                <input type="checkbox" name="beand" value="option2" />
                                Brand B
                            </label>
                            <label>
                                <input type="checkbox" name="brandp" value="option3" />
                                Brand C
                            </label>
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
                <div className="prod_browse">
                    {testData.productData.map((item, index)=> {
                        return (
                            <ItemCard 
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
                {/* <Cart /> */}
            </ CartProvider>

        </div>
    </MainLayout>
    

  )
}

export default BrowseProducts
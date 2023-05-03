import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBox from '../components/ChatBox'

import MainLayout from '../layout/MainLayout'

function BrowseProducts() {
  return (
    
    <MainLayout>
        <div className="product_page_contents">
                    <div className="p_container" >
                        <div className="filter">
                            <div className="filter_contents">
                                <div className="prod-cat">
                                    <h3>CATEGORY</h3>
                                    <label>
                                        <input type="checkbox" name="cat" value="option1" />
                                        Category A
                                    </label>
                                    <label>
                                        <input type="checkbox" name="cat" value="option2" />
                                        Category B
                                    </label>
                                    <label>
                                        <input type="checkbox" name="cat" value="option3" />
                                        Category C
                                    </label>
                                    <label>
                                        <input type="checkbox" name="cat" value="option4" />
                                        Category D
                                    </label>
                                
                                </div>
                                <div className="brand">
                                    <h3 > BRAND </h3>
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
                                <div className="price">
                                    <h3> PRICE </h3>
                                    <label>
                                        <input type="checkbox" name="price" value="option1" />
                                        Low to High
                                    </label>
                                    <label>
                                        <input type="checkbox" name="proce" value="option2" />
                                        High to Low
                                    </label>
                                </div>
                                <div className="rating">
                                    <h3> RATING </h3>
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
                        <div className="prod_browse">
                            <div className="prod-item" id="prod1">
                                <div className="left-col">
                                    <img src="img/products_page/laptop1.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p className="prod_name">HP - 15.6" Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Natural Silver</p>
                                    <p id="prodID_rating">Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$499.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>

                            <div className="prod-item" id="prod5">
                                <div className="left-col">
                                    <img src="img/products_page/laptop5.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$199.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            <div className="prod-item" id="prod6">
                                <div className="left-col">
                                    <img src="img/products_page/laptop6.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$199.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            <div className="prod-item" id="prod7">
                                <div className="left-col">
                                    <img src="img/products_page/laptop7.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>Lenovo - Ideapad Gaming 3 15.6" FHD Laptop - Ryzen 5 5600H - 8GB Memory - NVIDIA GeForce RTX 3050 Ti - 256GB SSD - Shadow Black</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$199.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            <div className="prod-item" id="prod8">
                                <div className="left-col">
                                    <img src="img/products_page/laptop8.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 1TB SSD - Silver</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$199.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            
                            <div className="prod-item" id="prod2">
                                <div className="left-col">
                                    <img src="img/products_page/laptop2.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>HP - 17.3" HD+ Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Natural Silver</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$399.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            <div className="prod-item" id="prod3">
                                <div className="left-col">
                                    <img src="img/products_page/laptop3.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>HP - 15.6" Touch-Screen Laptop - Intel Core i7 - 16GB Memory - 512GB SSD - Natural Silver</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$299.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                            <div className="prod-item" id="prod4">
                                <div className="left-col">
                                    <img src="img/products_page/laptop4.jpeg" alt="Product 1" />
                                </div>
                                <div className="middle-col">
                                    <p>HP - ENVY 2-in-1 14" Full HD Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB SSD - Natural Silver</p>
                                    <p>Rating: </p>
                                </div>
                                <div className="name_buy">
                                    <p>$199.99</p>
                                    <a href="#" className="cta">Buy</a>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </MainLayout>
    

  )
}

export default BrowseProducts
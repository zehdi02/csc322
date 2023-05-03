import React from 'react'

import './App.css'

import MainLayout from './layout/MainLayout';


function App() {
  return (
  <MainLayout>
    <div class="border"></div>

    <section id="home">
        <h1>Welcome to O-CompS</h1>
        <p>Your destination for the latest electronics, appliances, and more.</p>
        <a href="products.html" className="cta">Shop Now</a>
    </section>

    <div class="border"></div>

    <section id="personal_products">
        <h2>Based on your recent history</h2>
        <div className="personal-deals">
            <div className="personal-prod">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>Lenovo - Legion Pro 5i 16" - 82WK0069US - Onyx Grey</p>
                </a>
            </div>
            <div className="personal-prod">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>Arcade1up The Fast & The Furious Deluxe Arcade Game</p>
                </a>
            </div>
            <div className="personal-prod">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_3.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>Conair - Magnetic Head Trimmer - Silver</p>
                </a>
            </div>
            <div className="personal-prod">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>Apple - iPhone 13 5G 128GB (Unlocked) - Midnight</p>
                </a>
            </div>
            <div className="personal-prod">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>Frigidaire - Gallery 1.9 Cu. Ft. Over-the Range Microwave</p>
                </a>
            </div>
        </div>
    </section>

    <div class="border-thin"></div>

    <section id="products">
        <h2>Our Newest Releases</h2>
        <div className="new_prod_container">
            <div className="new_prod">
                <a class="cta" href="#">
                    <img src="img/landing_page/new_product_1.avif" alt="Product 1"/>
                </a>
                <a href="#">
                    <h3>Product 1</h3>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="cta">Learn More</a>
            </div>
            <div className="new_prod">
                <a class="cta" href="#">
                    <img src="img/landing_page/new_product_2.avif" alt="Product 2"/>
                </a>
                <h3>Product 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="cta">Learn More</a>
            </div>
            <div className="new_prod">
                <a class="cta" href="#">
                    <img src="img/landing_page/new_product_3.avif" alt="Product 3"/>
                </a>
                <h3>Product 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="cta">Learn More</a>
            </div>
            <div className="new_prod">
                <a class="cta" href="#">
                    <img src="img/landing_page/new_product_3.avif" alt="Product 4"/>
                </a>
                <h3>Product 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="cta">Learn More</a>
            </div>
        </div>
    </section>

    <div class="border-thin"></div>
    
    <section id="deals">
        <h2>Shop our Bestsellers</h2>
        <div className="bestselling_deals">
            <div className="best_deal">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>SUPER DUPER POWERFUL PC 3000</p>
                </a>
            </div>
            <div className="best_deal">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 2"/>
                </a>
                <a href="#">
                    <p>SUPER DUPER POWERFUL PC 69000</p>
                </a>
            </div>
            <div className="best_deal">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_3.avif" alt="Deal 3"/>
                </a>
                <a href="#">
                    <p>SUPER DUPER POWERFUL PC 420000</p>
                </a>
            </div>
            <div className="best_deal">
                <a href="#" className="cta">
                    <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                </a>
                <a href="#">
                    <p>WHITE</p>
                </a>
            </div>
        </div>
    </section>
  </MainLayout>
  );
}

export default App;

import React from 'react'
import { Link } from 'react-router-dom';

import './App.css'

import MainLayout from './layout/MainLayout';

import testData from './components/testData';
import ItemCards_new from './components/landing_page/ItemCards_new';
import ItemCards_deal from './components/landing_page/ItemCards_deal';
import ItemCards_user from './components/landing_page/ItemCards_user';

function App() {

    console.warn(testData.productData)

  return (
  <MainLayout>
    <div class="border"></div>

    <section id="home">
        <h1>Welcome to O-CompS</h1>
        <p>Your destination for the latest electronics, appliances, and more.</p>
        <Link to="./browse-products"><a className="cta">Shop Now</a></Link>
    </section>

    <div class="border"></div>

    <section id="personal_products">
        <h2>Based on your recent history</h2>
        <div className="personal-deals">
            {testData.productData.map((item, index)=> {
                return (
                    <ItemCards_user
                        item={item} 
                        key={index}
                        img={item.img} 
                        title={item.title} 
                    />
                )
            })}
        </div>
    </section>

    <div class="border-thin"></div>

    <section id="new-products">
        <h2>Our Newest Releases</h2>
        <div className="newP">
            {testData.productData.map((item, index)=> {
                return (
                    <ItemCards_new
                        item={item} 
                        key={index}
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc}
                    />
                )
            })}
        </div>
    </section>

    <div class="border-thin"></div>
    
    <section id="deals">
        <h2>Shop our Bestsellers</h2>
        <div className="bestselling_deals">
            {testData.productData.map((item, index)=> {
                return (
                    <ItemCards_deal
                        item={item} 
                        key={index}
                        img={item.img} 
                        title={item.title} 
                    />
                )
            })}
        </div>
    </section>
    
  </MainLayout>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css'

import MainLayout from './layout/MainLayout';

import testData from './components/browse/testData';
import ItemCards_new from './components/landing_page/ItemCards_new';
import ItemCards_deal from './components/landing_page/ItemCards_deal';
import ItemCards_user from './components/landing_page/ItemCards_user';

import studentImg from './img/presets/student_pc.png'
import businessImg from './img/presets/business_pc.png'
import gamerImg from './img/presets/gamer_pc.png'

function App() {

    console.warn(testData.productData)

    const [loginStatus,getloginStatus]= useState(()=>{
        window.loginStatus = localStorage.getItem('LoginStatus');
        console.log(window.loginStatus);
      });

    if(window.loginStatus){
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
            {testData.productData.slice(0,4).map((item, index)=> {
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
            {testData.productData.slice(0,4).map((item, index)=> {
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
        <h2>Student? Gamer? Business?<br></br>We got it for you!</h2>
        <div className="">
            <div className='preset-cont'>
                <div className='student-preset'>
                        <h3>Student</h3>
                    <Link to='presets'>
                        <img src={studentImg} alt='student pc'/>
                        <a href="#" className="cta">Learn More</a>
                    </Link>
                </div>
                <div className='gamer-preset'>
                        <h3>Gamer</h3>
                    <Link to='presets'>
                        <img src={gamerImg} alt='student pc'/>
                        <a href="#" className="cta">Learn More</a>
                    </Link>
                </div>
                <div className='business-preset'>
                        <h3>Business</h3>
                    <Link to='presets'>
                        <img src={businessImg} alt='student pc'/>
                        <a href="#" className="cta">Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <div class="border-thin"></div>

    <section id="new-products">
        <h2>Our Newest Releases</h2>
        <div className="newP">
            {testData.productData.slice(0,4).map((item, index)=> {
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
            {testData.productData.slice(0,4).map((item, index)=> {
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

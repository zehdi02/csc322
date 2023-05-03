import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    

    <div className="page_container">
        <div className="content_wrap">
            <header className="nav_bar">
                <div className="header-container">
                    <div className="logo">
                        <a href="index.html">
                            <img src="img/o-comps_logo2.png" alt="O-CompS Logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Purchase History</a></li>
                            <li><a href="signin.html">Sign In</a></li>
                            <li><a href="signup.html">Create an Account</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="home">
                <h1>Welcome to O-CompS</h1>
                <p>Your destination for the latest electronics, appliances, and more.</p>
                <a href="products.html" className="cta">Shop Now</a>
            </section>

            <section id="personal_products">
                <h2>Based on your recent history</h2>
                <div className="personal-deals">
                    <div className="personal-prod">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                            <p>Lenovo - Legion Pro 5i 16" - 82WK0069US - Onyx Grey</p>
                        </a>
                    </div>
                    <div className="personal-prod">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 1"/>
                            <p>Arcade1up The Fast & The Furious Deluxe Arcade Game</p>
                        </a>
                    </div>
                    <div className="personal-prod">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_3.avif" alt="Deal 1"/>
                            <p>Conair - Magnetic Head Trimmer - Silver</p>
                        </a>
                    </div>
                    <div className="personal-prod">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                            <p>Apple - iPhone 13 5G 128GB (Unlocked) - Midnight</p>
                        </a>
                    </div>
                    <div className="personal-prod">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 1"/>
                            <p>Frigidaire - Gallery 1.9 Cu. Ft. Over-the Range Microwave</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="products">
                <h2>Our Newest Releases</h2>
                
                <div className="new_prod_container">
                    <div className="new_prod">
                        <img src="img/landing_page/new_product_1.avif" alt="Product 1"/>
                        <h3>Product 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="cta">Learn More</a>
                    </div>
                    <div className="new_prod">
                        <img src="img/landing_page/new_product_2.avif" alt="Product 2"/>
                        <h3>Product 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="cta">Learn More</a>
                    </div>
                    <div className="new_prod">
                        <img src="img/landing_page/new_product_3.avif" alt="Product 3"/>
                        <h3>Product 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="cta">Learn More</a>
                    </div>
                    <div className="new_prod">
                        <img src="img/landing_page/new_product_1.avif" alt="Product 3"/>
                        <h3>Product 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="cta">Learn More</a>
                    </div>
                </div>
            </section>
            
            <section id="deals">
                <h2>Shop our Bestsellers</h2>
                <div className="bestselling_deals">
                    <div className="best_deal">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                            <p>SUPER DUPER POWERFUL PC 3000</p>
                        </a>
                    </div>
                    <div className="best_deal">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_2.avif" alt="Deal 2"/>
                            <p>SUPER DUPER POWERFUL PC 69000</p>
                        </a>
                    </div>
                    <div className="best_deal">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_3.avif" alt="Deal 3"/>
                            <p>SUPER DUPER POWERFUL PC 420000</p>
                        </a>
                    </div>
                    <div className="best_deal">
                        <a href="#" className="cta">
                            <img src="img/landing_page/bestseller_product_1.avif" alt="Deal 1"/>
                            <p>WHITE</p>
                        </a>
                    </div>
                </div>
            </section>

            <div id="chat-bot">
                <div id="chat-icon">
                <img src="img/chat_employee.png" alt="Chat Icon"/>
                </div>
                <div id="chat-window">
                    <div className="message received">
                        <p>Hello! How may I help you?</p>
                    </div>
                    <div id="chat-messages"></div>
                    <div id="chat-input-container">
                        <input type="text" id="chat-input" placeholder="Ask a question..."/>
                        <button id="chat-send-button">Send</button>
                    </div>
                </div>
            </div>
            {/* <script src="chat_script.js"></script> */}

            <footer>
                <div className="footer-container">
                    <div className="left-content">
                        <p>&copy; 2023 O-CompS. All rights reserved.</p>
                    </div>
                    <div className="right-content">
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div> 
    </div>

    
  </div>
  );
}

export default App;

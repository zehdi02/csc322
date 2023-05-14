import React from 'react'
import CommentSection from '../../components/browse/commentSection';
import cpu1 from '../../img/products_page/cpu1.png';
import MainLayout from '../../layout/MainLayout'
import './Product.css'
function product() {
    return (
      
        <MainLayout>
            <div class="product-container">
                <div class="image-container">
                    <img src={cpu1} alt="Product 1" class="product-image"/>
                </div>
                <div class="product-info">
                        <h1>ASUS - Vivobook 14" Laptop - Intel Core 11th Gen i3 with 8GB Memory - 128GB SSD - Transparent Silver</h1>
                        
                    <div class="product-description">
                        <p> Include product description </p>
                    </div>
                    <div class="product-features">
                        <p>Include product features </p>
                    </div>
                    <div className="name_buy">
                        <p>$199.99</p>
                        <a href="#" className="cta">
                            <p>🛒 Add to Cart</p>
                        </a>
                    </div>
                </div>
            </div>
                <div class="product-reviews-container">
                {/*<h1>Comments</h1>*/}
            <   CommentSection />
            </div>
        </MainLayout>
    )
}
export default product

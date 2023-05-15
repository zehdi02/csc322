import React from 'react'
import CommentSection from '../../components/browse/commentSection';
import cpu1 from '../../img/products_page/cpu1.png';
import MainLayout from '../../layout/MainLayout'
import testData from "../../components/browse/testData"
import ItemCard, {id} from "../../components/browse/ItemCard" 
import './Product.css'

function ProductDemo(){
//Get item based on image slected in browse page
let item=testData.productData[id-1];

    return (
      
        <MainLayout>
            <div class="product-container">
                <div class="image-container">
                    <img src={item.img} alt="Product 1" class="product-image" />
                </div>
                <div class="product-info">
                        <h1>{item.title}</h1>
                        
                    <div class="product-description">
                        <p>{item.desc}</p>
                    </div>
                    <div class="product-features">
                        <p>{item.rating}</p>
                    </div>
                    <div className="name_buy">
                        <p>${item.price}</p>
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
export default ProductDemo
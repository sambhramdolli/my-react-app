import React from 'react';
import './style.css';

const Product = ({ image, title, offerPrice, mrp, savings }) => {
    return (
        <div className='productThumb'>
            <div className='imgWrapper'>
                <img src={image} className='w-100' alt="Product"/>
            </div>
            <div className='info'>
    
                <h4 className='title'>
                    <a href="#" className='product-link'>
                        {title}
                    </a>
                </h4>
                <div className='price-info'>
                    <span className='price'>Offer Price: ₹{offerPrice}</span>
                    <span className='mrp'>MRP: ₹{mrp}</span>
                    <span className='you-save'>You Save: ₹{savings}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;

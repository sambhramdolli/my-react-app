import React from 'react';
import HomeSlider from './slider/index';
import CatSlider from '../../component/catSlider';
import './style.css';
import Product from '../../component/product';

const products = [
    {
        image: 'https://www.reliancedigital.in/medias/Samsung-Convertible-5-in-1-Inverter-Split-AC-581110576-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTE3fGltYWdlL2pwZWd8aW1hZ2VzL2gyZS9oNTYvMTAwOTg2MDc4NDk1MDIuanBnfDViYWJhOWQ1OGQwMDYzZDBkMGM3ZmZmZjI5ZjFkZjlkNzZhMTQ4Zjg1NmFhMGQ0OWVjZGRlY2VkM2IwZjk2NzI',
        title: 'SAMSUNG 1.5 Ton 3 Star 5 in 1 convertible Inverter Split AC, AR!*CY#ZAWK',
        offerPrice: '38,990.00',
        mrp: '45,990.00',
        savings: '7,000.00'
    },
    {
        image: 'https://www.reliancedigital.in/medias/Samsung-WindFree-Inverter-Split-Air-Conditioner-581110398-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDM0NHxpbWFnZS9qcGVnfGltYWdlcy9oYjkvaDRlLzEwMDk4NjA5NDg3OTAyLmpwZ3xiNTBkMjQ2Njg1ZmY5NTFjMzQ2NmNhNGE4MmU1NjdiMjQ3ZWQyOTI5OWVlYTk5NzY3MDNmMTViN2E1NWFkZTA0',
        title: 'LG 1 Ton 5 Star Inverter Split AC, XYZ123',
        offerPrice: '29,990.00',
        mrp: '39,990.00',
        savings: '10,000.00'
    },
    {
        image: 'https://www.reliancedigital.in/medias/Samsung-WindFree-Inverter-Split-Air-Conditioner-581110575-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTk2M3xpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGI2LzEwMDk4NjA4ODMyNTQyLmpwZ3wxNjVjNWQ5ZmFiNjA0NGQ0MGU5MWI1YTIyOWMzNmEyZGM5Y2RlZWIxMGY1ZTIyYmE4YmM3YmY1NTEyMjgxYzIz',
        title: 'Whirlpool 1.5 Ton 3 Star Split AC, ABC456',
        offerPrice: '32,990.00',
        mrp: '42,990.00',
        savings: '10,000.00'
    },
    {
        image: 'https://www.reliancedigital.in/medias/Samsung-Convertible-Inverter-Split-Air-Conditioner-581110577-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTc4fGltYWdlL2pwZWd8aW1hZ2VzL2g5Mi9oZGQvMTAwOTg2MTAxNDMyNjIuanBnfDdhN2NlNWU1MmE3OGI3NjBmZGM2ZTE0ZDIxOGZjZTdkOGI1OGYxYzc1OTA2Y2E2MWRhMTgyNjI1ODc5ZDcwNzA',
        title: 'Voltas 1.5 Ton 4 Star Inverter Split AC, DEF789',
        offerPrice: '34,990.00',
        mrp: '44,990.00',
        savings: '10,000.00'
    },
    {
        image: 'https://www.reliancedigital.in/medias/Bluestar-IC518RNU-Air-Conditioner-581110409-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzI2NnxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGM1Lzk5NjgzMjI2MDkxODIuanBnfGYyZDlhMzMyNTFlODg4NzBmYWU4NmQ3NTMzZWQ3N2ZiMmU3YWUxYTQ0MzAzZGU3MWQyMThjMDVjZTg0Y2Q0ZTk',
        title: 'Hitachi 1 Ton 5 Star Inverter Split AC, GHI012',
        offerPrice: '31,990.00',
        mrp: '41,990.00',
        savings: '10,000.00'
    }
];

const Home = () => {
    return (
        <>
            <HomeSlider />
            <CatSlider />
            <section className='homeProducts'>
                <div className='container-fluid'>
                    <h2 className='hd mb-0 mt-0'>2024 New Range of ACs from Rs.22990*</h2>
                    <div className='productRow'>
                        {products.map((product, index) => (
                            <div className='item' key={index}>
                                <Product 
                                    image={product.image}
                                    title={product.title}
                                    offerPrice={product.offerPrice}
                                    mrp={product.mrp}
                                    savings={product.savings}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

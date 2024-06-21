import React from 'react';
import Slider from "react-slick";
import './style.css';

import Slide1 from '../assets/image/slider1.jpg';
import Slide2 from '../assets/image/slider2.jpg';
import Slide3 from '../assets/image/slider3.webp';
import Slide4 from '../assets/image/slider4.jpg';
import Slide5 from '../assets/image/slider5.jpg';
import Slide6 from '../assets/image/slider6.jpg';


const CatSlider =()=>{


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 1000,
        
    };

    return(
        <div className='catSlidersection'>
            <div className='container-fluid'>
            <Slider {...settings} className='cat_slider_Main'>
                <div className='item'>
                    <img src={Slide1} className='w-100' alt="Banner1"/>
                </div>
                <div className='item'>
                    <img src={Slide2} className='w-100' alt="Banner2"/>
                </div>
                <div className='item'>
                    <img src={Slide3} className='w-100' alt="Banner1"/>
                </div>
                <div className='item'>
                    <img src={Slide4} className='w-100' alt="Banner1"/>
                </div>
                <div className='item'>
                    <img src={Slide5} className='w-100' alt="Banner1"/>
                </div>
                <div className='item'>
                    <img src={Slide6} className='w-100' alt="Banner1"/>
                </div>
            </Slider>

            </div>
        </div>
    )
}

export default CatSlider;
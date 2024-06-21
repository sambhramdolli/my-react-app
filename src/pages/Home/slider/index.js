import React from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../component/assets/banner1.jpg';
import Slide2 from '../../../component/assets/banner2.jpg';



const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false
    };

    return (
        <section className='homeSlider'>
            <div className='container-fluid'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className='item'>
                        <img src={Slide1} className='w-100' alt="Banner1"/>
                    </div>
                    <div className='item'>
                        <img src={Slide2} className='w-100' alt="Banner2"/>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default HomeSlider;

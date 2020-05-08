import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import reactLogo from '../Images/react.svg';

// Useful docs: 
// https://swiperjs.com/api/
// https://react-id-swiper.ashernguyen.site/example/three-d-coverflow-effect

const SimpleSwiper = () => {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        },
        autoplay: {
            delay: 1000,
        },

    }

    return (
        <Swiper {...params}>
            <div style={{
                height: '100px',
                width: '100px',
                backgroundImage: `url(${javascriptLogo})`
            }} />
            <div style={{
                height: '100px',
                width: '100px',
                backgroundImage: `url(${reactLogo})`
            }} />
            <div style={{
                height: '100px',
                width: '100px',
                backgroundImage: `url(${htmlLogo})`
            }} />
            <div style={{
                height: '100px',
                width: '100px',
                backgroundImage: `url(${cssLogo})`
            }} />
            <div style={{
                height: '100px',
                width: '100px',
                backgroundImage: `url(${pythonLogo})`
            }} />
        </Swiper>
    );
}

export default SimpleSwiper;
import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import javascriptLogo from '../Images/javascript.svg';
import reactLogo from '../Images/react.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import pythonLogo from '../Images/python.svg';

// Useful docs: 
// https://swiperjs.com/api/
// https://react-id-swiper.ashernguyen.site/example/three-d-coverflow-effect


const SimpleSwiper = () => {
    const params = {
        speed: 3000,
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
            delay: 0,
            disableOnInteraction: false,
        },

    }

    return (
        <Swiper {...params}>
            <article
                className="card card--1"
                id="javascript-card">
                <img
                    className="card__img"
                    id="javascript-card-image"
                    src={javascriptLogo}
                    alt="JavaScript"
                />
                <div className="card__info">
                    <span className="card__category">
                        JavaScript
                    </span>
                </div>
            </article>
            <article
                className="card card--2"
                id="react-card">
                <img
                    className="card__img"
                    id="react-card-image"
                    src={reactLogo}
                    alt="React.js"
                />
                <div className="card__info">
                    <span className="card__category">
                        React.js
                    </span>
                </div>
            </article>
            <article
                className="card card--3"
                id="html-card">
                <img
                    className="card__img"
                    id="html-card-image"
                    src={htmlLogo}
                    alt="HTML 5"
                />
                <div className="card__info">
                    <span className="card__category">
                        HTML 5
                    </span>
                </div>
            </article>
            <article
                className="card card--4"
                id="css-card">
                <img
                    className="card__img"
                    id="css-card-image"
                    src={cssLogo}
                    alt="CSS 3"
                />
                <div className="card__info">
                    <span className="card__category">
                        CSS 3
                    </span>
                </div>
            </article>
            <article
                className="card card--5"
                id="python-card">
                <img
                    className="card__img"
                    id="python-card-image"
                    src={pythonLogo}
                    alt="Python"
                />
                <div className="card__info">
                    <span className="card__category">
                        Python
                    </span>
                </div>
            </article>
        </Swiper>
    );
}

export default SimpleSwiper;
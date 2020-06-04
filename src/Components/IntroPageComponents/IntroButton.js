import React from 'react';
import { Link } from "react-scroll";

const IntroButton = () => {
    const onMouseEnterIntroButton = () => {
        document.querySelector('.intro-button-text').style.color = '#252934';
        document.querySelector('.intro-button').style.backgroundColor = '#BFC0C0';
    };

    const onMouseLeaveIntroButton = () => {
        document.querySelector('.intro-button-text').style.color = '#BFC0C0';
        document.querySelector('.intro-button').style.backgroundColor = '#252934';
    };

    return (
        <div className="intro-button-container">
            <Link
                activeClass="active"
                to="page-1"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}>
                <div 
                className="intro-button"
                onMouseEnter={onMouseEnterIntroButton}
                onMouseLeave={onMouseLeaveIntroButton}>
                    <div className="intro-button-text">
                        VIEW MY WORK
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default IntroButton;

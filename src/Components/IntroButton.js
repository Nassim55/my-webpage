import React from 'react';
import { Link } from "react-scroll";

const IntroButton = () => {
    return (
        <div className="intro-button-container">
            <Link activeClass="active" to="About" spy={true} smooth={true} duration={250}>
                <div className="intro-button">
                    <div className="intro-button-text">
                        VIEW MY WORK
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default IntroButton;

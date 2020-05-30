import React from 'react';
import { Link } from "react-scroll";

const IntroButton = () => {
    return (
        <div className="intro-button-container">
            <Link
                activeClass="active"
                to="page-1"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}>
                <div className="intro-button">
                    <div id="dub-arrow">
                        <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                    </div>
                    <a className="intro-button-text">
                        VIEW MY WORK
                    </a>
                </div>
            </Link>
        </div>
    );
};

export default IntroButton;

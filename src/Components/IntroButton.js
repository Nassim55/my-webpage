import React, { useState } from 'react';
import { Link } from "react-scroll";
import { useSpring, animated } from 'react-spring';

const IntroButton = () => {
    const [hover, setHover] = useState(false);

    const mouseOverHoverEffect = () => {
        setHover(true);
    };

    const mouseOutHoverEffect = () => {
        setHover(false);
    };

    const { transform } = useSpring({
        transform: `scale(${hover ? 1.25 : 1})`
    });

    return (
        <div className="intro-button-container">
            <Link activeClass="active" to="About" spy={true} smooth={true} duration={250}>
                <animated.div
                className="intro-button"
                onMouseOver = {mouseOverHoverEffect}
                onMouseOut = {mouseOutHoverEffect}
                style={{transform}}>
                    <div className="intro-button-text">
                        VIEW MY WORK
                    </div>
                </animated.div>
            </Link>
        </div>
    );
};

export default IntroButton;

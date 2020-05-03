import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'
import { useSpring, animated } from 'react-spring';

const IntroButton = () => {
    const [isToggled, setToggled] = useState(true);
    const fadeEntryButton = useSpring({
        opacity: isToggled ? 1 : 0
    });

    const AnimatedButton = animated(Button);

    //const [positonScrolled, setPositonScrolled] = useState(window.scrollY);

    return (
        <div
            className="intro-button"
        >
            <Link
                activeClass="active"
                to="page-1"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
            >
                <AnimatedButton
                    className="entry-button"
                    color="primary"
                    onClick={ () => setToggled(!isToggled) }
                    style={fadeEntryButton}
                >
                    View my work
                </AnimatedButton>{' '}
            </Link>
        </div>
    );

    const nassimButton = ReactDOM.findDOMNode('AnimatedButton');
};

export default IntroButton;
import React, { useState } from 'react';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'
import { useSpring, animated } from 'react-spring';
import IntroButton from '../Components/IntroButton';

const IntroPage = () => {
    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

    return (
        <div
            className="intro-page"
            id="intro-page">
            <div className="intro-container">
                <div className="intro-container-left">
                    <animated.p
                        className="profile-paragraph"
                        style={fade}>
                        Hello, I'm <span className="my-name">Nassim</span>.<br /> Welcome to my software development portfolio!
                    </animated.p>
                </div>
                <IntroButton />
            </div>
        </div>
    );
};

export default IntroPage;
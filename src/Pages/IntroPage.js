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
            id="intro-page"
        >
            <div
                className="intro-container"
            >
                <div
                    className="intro-container-left"
                >
                    <animated.h1
                        className="name-heading"
                        style={fade}
                    >
                        Nassim Chenouf
                </animated.h1>
                    <animated.p
                        className="profile-paragraph"
                        style={fade}
                    >
                        Welcome to my development portfolio
                </animated.p>
                    <div className="linkedin-and-git">
                        <div className="linkedin-button">
                            <a
                                className="linkedin-button-a-tag"
                                href="https://www.linkedin.com/in/nassim-chenouf-2b7845135/"
                                target="_blank">
                                Linkedin
                            </a>
                        </div>
                        <div className="github-button">
                            <a
                                className="github-button-a-tag"
                                href="https://github.com/Nassim55"
                                target="_blank">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <IntroButton />
            </div>
        </div>
    );
};

export default IntroPage;
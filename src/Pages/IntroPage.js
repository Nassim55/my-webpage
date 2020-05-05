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
                    {/* <div className="linkedin-and-git">
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
                    </div> */}
                </div>
                <IntroButton />
            </div>
        </div>
    );
};

export default IntroPage;
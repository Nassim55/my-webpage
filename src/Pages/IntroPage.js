import React, { useState } from 'react';
import { Link } from "react-scroll";
//import { Button } from 'react-mdl';
import Button from 'react-bootstrap/Button'
import { useSpring, animated } from 'react-spring';

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
                    Welcome to my software developer portfolio
                </animated.p>
                <div
                    className="linkedin-and-git"
                >
                    <Button
                        className="linkedin-button"
                        href="https://www.linkedin.com/in/nassim-chenouf-2b7845135/"
                        target="_blank"
                    >
                        Linkedin
                    </Button>{' '}
                    <Button
                        className="github-button"
                        href="https://github.com/Nassim55"
                        target="_blank"
                        color="primary"
                    >
                        GitHub
                    </Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default IntroPage;
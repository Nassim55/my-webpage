import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import myImage from '../Images/me-circle-cropped.png';

import CarouselProjectCards from '../Components/CarouselProjectCards';

import pythonLogo from '../Images/python.svg';
import javascriptLogo from '../Images/javascript.svg';
import reactLogo from '../Images/react2.svg';
import tensorflowLogo from '../Images/tensorflow.svg';
import djangoLogo from '../Images/django.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import sassLogo from '../Images/sass.svg';
import gitLogo from '../Images/git.svg';

import { Link } from "react-scroll";

const useOnScreen = (options) => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }

    }, [ref, options]);

    return [ref, visible];
}

const About = () => {
    const [ref, visible] = useOnScreen({ rootMargin: '-150px' });
    const { x } = useSpring({
        x: ref.current ? 0 : -600
    });

    return (
        <div className="About">
            <div className="page-title-grouping">
                <div
                id="page-1-title"
                className="page-title">
                    About
                </div>
                <div
                id="underline-page-1-title"
                className="underline-page-title">
                </div> 
            </div>
            <div
                className="top-container-page-1"
                ref={ref}>
                <animated.div
                    className="top-left-container-page-1"
                    style={{
                        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
                    }}>
                    <img
                        className="my-photo"
                        src={myImage}
                        alt="me" />
                    <div className="navigation-button-container">
                        <div className="navigation-container-title-grouping">
                            Contents
                            <div className="underline-navigation"></div> 
                        </div>      
                        <Link
                        className="down-page-button"
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            <div className="navigation-button">
                                Projects
                            </div>
                        </Link>
                        <Link
                        className="down-page-button"
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            <div className="navigation-button">
                                Contact
                            </div>
                        </Link>
                    </div>
                </animated.div>
                <animated.div
                    className="top-right-container-page-1"
                    style={{
                        transform: x.interpolate(x => `translate3d(${-x}px, 0, 0)`)
                    }}>
                    <p>
                        <span className="quotation-marks">"&nbsp;&nbsp;&nbsp;</span>
                        I'm an Aerospace Engineering graduate from the University
                        of Leeds. Interested in software engineering that 
                        focuses on the application of machine learning and data science.
                        Swipe the card stack below to see the technologies I'm familiar with.
                        <span className="quotation-marks">&nbsp;&nbsp;&nbsp;"</span>
                    </p>
                </animated.div>
            </div>
            <div className="middle-container-page-1">
                <CarouselProjectCards 
                languageTitles={['Git', 'SASS', 'CSS', 'HTML', 'Django', 'TensorFlow', 'React', 'JavaScript', 'Python']}
                languageLogos={[gitLogo, sassLogo, cssLogo, htmlLogo, djangoLogo, tensorflowLogo, reactLogo, javascriptLogo , pythonLogo]}
                />
            </div>
        </div>
    );
};

export default About;
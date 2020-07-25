import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import myImage from '../Images/me-circle-cropped.png';

import CarouselProjectCards from '../Components/CarouselProjectCards';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';

import pythonLogo from '../Images/python.svg';
import javascriptLogo from '../Images/javascript.svg';
import reactLogo from '../Images/react2.svg';
import tensorflowLogo from '../Images/tensorflow.svg';
import scikitLearnLogo from '../Images/scikitlearn.svg';
import djangoLogo from '../Images/django.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import sassLogo from '../Images/sass.svg';
import gitLogo from '../Images/git.svg';
import matlabLogo from '../Images/matlab.svg';
import solidworksLogo from '../Images/solidworks.svg';

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
            <SectionTitleGrouping sectionTitle={"About"}/>
            <div className="about-content-container">
                <div className="profile-picture-contents-intro-container" ref={ref}>
                    <animated.div className="profile-picture-contents-container"
                    style={{
                        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
                    }}>
                        <img className="profile-picture" src={myImage} alt="profile-picture" />
                        <div className="contents-container">
                            <SectionTitleGrouping sectionTitle={"Contents"}/>   
                            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={250}>
                                <div className="navigation-button">
                                    Projects
                                </div>
                            </Link>
                            <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={250}>
                                <div className="navigation-button">
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </animated.div>
                    <animated.div className="profile-paragraph-container"
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
                <div className="technology-cards-container">
                    <CarouselProjectCards 
                    languageTitles={['SolidWorks', 'Matlab', 'Git', 'SASS', 'CSS', 'HTML', 'Django', 'Scikit-Learn', 'TensorFlow', 'React', 'JavaScript', 'Python']}
                    languageLogos={[solidworksLogo, matlabLogo, gitLogo, sassLogo, cssLogo, htmlLogo, djangoLogo, scikitLearnLogo, tensorflowLogo, reactLogo, javascriptLogo , pythonLogo]}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
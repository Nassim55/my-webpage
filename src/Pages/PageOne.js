import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import myImage from './me-circle-cropped.png';

import CarouselUseSprings from '../Components/PageOneComponents/CarouselUseSprings';

import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';

import { DownOutlined } from '@ant-design/icons';

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

const PageOne = () => {
    const [ref, visible] = useOnScreen({ rootMargin: '-150px' });
    const { x } = useSpring({
        x: ref.current ? 0 : -600
    });

    //CONTACT Me button at bottom of paragraph

    return (
        <div className="page-1" id="page-1">   
            <div className="page-content-container">
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
                    </animated.div>
                    <animated.div
                        className="top-right-container-page-1"
                        style={{
                            transform: x.interpolate(x => `translate3d(${-x}px, 0, 0)`)
                        }}>
                        <p>
                            <span className="quotation-marks">"&nbsp;&nbsp;&nbsp;</span>
                            I'm an Aerospace Engineering graduate from the University
                            of Leeds. Passionate about building interesting and creative
                            software. Check out the languages I'm familiar with below.
                            <span className="quotation-marks">&nbsp;&nbsp;&nbsp;"</span>
                        </p>
                    </animated.div>
                </div>
                <div className="middle-container-page-1">
                    <CarouselUseSprings 
                    languageTitles={['JavaScript', 'Python', 'HTML', 'CSS']}
                    languageLogos={[cssLogo, htmlLogo, javascriptLogo , pythonLogo]}
                    />
                </div>
                <div className="bottom-container-page-1">
                    <DownOutlined 
                    className="arrow-to-next-page"
                    style={{
                        fontSize: '2em'
                    }}/>
                    <div className="text-to-next-page">Find Out More</div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;

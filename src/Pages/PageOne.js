import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';

import myImage from './me-circle-cropped.png';
import SimpleSwiper from '../Components/SimpleSwiper';


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

    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">
                <SimpleSwiper className="simple-swiper" />
                <div
                    className="bottom-container-page-1"
                    ref={ref}>
                    <animated.div
                        className="bottom-left-container-page-1"
                        style={{
                            transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
                        }}>
                        <img
                            className="my-photo"
                            src={myImage}
                            alt="me" />
                    </animated.div>
                    <animated.div
                        className="bottom-right-container-page-1"
                        style={{
                            transform: x.interpolate(x => `translate3d(${-x}px, 0, 0)`)
                        }}>
                        <p>
                            <span className="quotation-marks">"&nbsp;&nbsp;&nbsp;</span>
                            I'm a Graduate Aerospace Engineering student from the University
                            of Leeds. Passionate about building interesting new software.
                            <span className="quotation-marks">&nbsp;&nbsp;&nbsp;"</span>
                        </p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;



//const [isToggled, setToggled] = useState(false);
    //const { x } = useSpring({
    //    x: isToggled ? 0 : -200
    //});

    //onClick={() => setToggled(!isToggled)}
import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IntroButton from '../Components/IntroButton';

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


const Intro = () => {
    const [ref, visible] = useOnScreen();
    const { y } = useSpring({
        y: ref.current ? 0 : -1000
    });

    const AnimatedIntroButton = animated(IntroButton);

    return (
        <div className="Intro" ref={ref}>
            <animated.p
            className="profile-paragraph"
            style={{transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)}}>
                Hello, I'm <span className="my-name">Nassim</span>.<br /> Welcome to my project portfolio site!
            </animated.p>
            <AnimatedIntroButton />
        </div>
    );
};

export default Intro;
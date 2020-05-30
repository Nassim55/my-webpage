import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IntroButton from '../Components/IntroPageComponents/IntroButton';

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


const IntroPage = () => {
    //const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

    const [ref, visible] = useOnScreen();
    const { x } = useSpring({
        x: ref.current ? 0 : -1000
    });

    const AnimatedIntroButton = animated(IntroButton);

    return (
        <div
            className="intro-page"
            id="intro-page"
            ref={ref}>
            <div className="intro-container">
                <animated.p
                    className="profile-paragraph"
                    style={{transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)}}>
                    Hello, I'm <span className="my-name">Nassim</span>.<br /> Welcome to my software development portfolio!
                </animated.p>
                <AnimatedIntroButton />
            </div>
        </div>
    );
};

export default IntroPage;
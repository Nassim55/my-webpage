import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import GenericButton from '../Components/GlobalComponents/GenericButton';

const PageTwo = () => {
    const [isToggled1, setIsToggled1] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);


    const fade2 = useSpring({
        opacity: isToggled2 ? 1 : 0
    });

    const { transform, opacity } = useSpring({
        opacity: isToggled1 ? 1 : 0,
        transform: `perspective(600px) rotateX(${isToggled1 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    const AnimatedGenericButton = animated(GenericButton)

    return (
        <div className="page-2" id="page-2">
            <div className="page-content-container">
                <div 
                className="ml"
                onClick={() => setIsToggled1(!isToggled1)}>
                    <animated.div
                    className="c projects-container-back"
                    id="ml-sarcasm-project-container-back"
                    style={{opacity: opacity.interpolate(o => 1 - o), transform }} >
                        <animated.div 
                        className="project-title">
                            Sentiment Analysis
                        </animated.div>
                        <animated.div 
                        className="project-languages">
                            React, Python, TensorFlow, Django
                        </animated.div>
                        <AnimatedGenericButton
                        id="button-ml-project" />
                    </animated.div>
                    <animated.div
                    className="c projects-container-front"
                    id="ml-sarcasm-project-container-front"
                    style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                    </animated.div>
                </div>
            </div> 
        </div>
    );
};

export default PageTwo;
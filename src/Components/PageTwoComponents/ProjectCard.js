import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import GenericButton from '../GlobalComponents/GenericButton';

const ProjectCard = (props) => {
    const [isToggled1, setIsToggled1] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: isToggled1 ? 1 : 0,
        transform: `perspective(600px) rotateX(${isToggled1 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    const AnimatedGenericButton = animated(GenericButton)

    return (
        <div 
        className={props.projectClassName}
        onClick={() => setIsToggled1(!isToggled1)}>
            <animated.div
            className="c projects-container-back"
            style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <animated.div 
                className="project-title">
                    {props.projectTitle}
                </animated.div>
                <animated.div 
                className="project-languages">
                    {props.projectLanguages}
                </animated.div>
                <AnimatedGenericButton
                id="button-ml-project"
                href={'https://goofy-perlman-2c3af1.netlify.app/'}
                text={'FIND OUT MORE'} />
            </animated.div>
            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{opacity: opacity.interpolate(o => 1 - o), transform }}>
            </animated.div>
        </div>
    );
}

export default ProjectCard
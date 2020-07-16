import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import GenericButton from '../GlobalComponents/GenericButton';

const ProjectCard = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: isToggled ? 1 : 0,
        transform: `perspective(600px) rotateX(${isToggled ? 180 : 0}deg)`,
        config: { mass: 12, tension: 500, friction: 80 }
    });

    const AnimatedGenericButton = animated(GenericButton)

    return (
        <div
        id={props.projectId} 
        className={props.projectClassName}
        onClick={() => setIsToggled(!isToggled)}>
            <animated.div
            className="c projects-container-back"
            style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(${props.rotationDirection})`) }}>
                <animated.div 
                className="project-title">
                    {props.projectTitle}
                </animated.div>
                <animated.div 
                className="project-languages">
                    {props.projectLanguages}
                </animated.div>
            </animated.div>
            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{opacity: opacity.interpolate(o => 1 - o), transform }}>
                <animated.div className="project-title-front">
                    {props.projectTitle}
                </animated.div>
                <img className="project-image-front" src={props.imageSrc}></img>
            </animated.div>
        </div>
    );
}

export default ProjectCard
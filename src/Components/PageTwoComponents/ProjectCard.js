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
                <AnimatedGenericButton
                href={props.projectHref}
                text={'GO TO SITE'} />
            </animated.div>
            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{opacity: opacity.interpolate(o => 1 - o), transform }}>
                <animated.div className="project-title-front">
                    {props.projectTitle}
                </animated.div>
                <AnimatedGenericButton
                className="fip-card-arrow"
                text={'FIND OUT MORE'}
                textColour={'black'}
                borderColour={'black'}
                backgroundColour={'white'} />
            </animated.div>
        </div>
    );
}

export default ProjectCard
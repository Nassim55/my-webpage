import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ProjectCard = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: isToggled ? 1 : 0,
        transform: `perspective(600px) rotateX(${isToggled ? 180 : 0}deg)`,
        config: { mass: 12, tension: 500, friction: 80 }
    });

    return (
        <div
        id={props.projectId} 
        className={props.projectClassName}
        onClick={() => setIsToggled(!isToggled)}>

            <animated.div
            className="c projects-container-back"
            style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(${props.rotationDirection})`) }}>
                <div className="project-title">
                    {props.projectTitle}
                </div>
                <div className="project-languages">
                    {props.projectLanguages}
                </div>
                <div className="project-information-container">
                    <p className="project-information-text">
                        {props.projectInfo}
                    </p>
                </div>
            </animated.div>

            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{opacity: opacity.interpolate(o => 1 - o), transform }}>
                <img className="project-image-front" src={props.imageSrc}></img>
                <div className="project-title-front">
                    {props.projectTitle}
                </div>
            </animated.div>

        </div>
    );
}

export default ProjectCard
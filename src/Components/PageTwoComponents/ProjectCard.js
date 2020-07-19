import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdZoomOutMap } from "react-icons/md";

const ProjectCard = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const { zIndex, transform, opacity } = useSpring({
        zIndex: isToggled ? 1 : 0,
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
            style={{ 
                zIndex,
                opacity,
                transform: transform.interpolate(t => `${t} rotateX(${props.rotationDirection})`) }}>
                <div className="project-information-container">
                    <p className="project-information-text">
                        {props.projectInfo}
                    </p>
                </div>
            </animated.div>

            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{
                zIndex: zIndex.interpolate(o => 1 - o),
                opacity: opacity.interpolate(o => 1 - o),
                transform }}>
                <div className="expand-icon-container">
                    <MdZoomOutMap className="expand-icon-project-card"/>
                </div>
                <img className="project-image-front" src={props.imageSrc}></img>
                <div className="project-title-front">
                    {props.projectTitle}
                </div>
                <div className="project-languages">
                    {props.projectLanguages}
                </div>
            </animated.div>
            
        </div>
    );
}

export default ProjectCard
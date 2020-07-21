import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdZoomOutMap, MdRotateLeft } from "react-icons/md";

const ProjectCard = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const { zIndex, transform, opacity, height } = useSpring({
        zIndex: isToggled ? 1 : 0,
        opacity: isToggled ? 1 : 0,
        height: isToggled ? '480px' : '240px',
        transform: `perspective(600px) rotateX(${isToggled ? 180 : 0}deg)`,
        config: { mass: 12, tension: 500, friction: 80 }
    });

    return (
        <div id={props.projectId} className={props.projectClassName}>

            <animated.div
            className="c projects-container-back"
            style={{ 
                zIndex,
                opacity,
                height,
                transform: transform.interpolate(t => `${t} rotateX(${props.rotationDirection})`) }}>
                <div className="project-information-container">
                    <p className="project-information-text">
                        {props.projectInfo}
                    </p>
                    { props.isMarsRover ? 
                        <video width="100%" height="auto" src={props.videoSrc} controls></video>
                        : 
                        null
                    }
                </div>
                <div className="flip-back-button-container">
                    <MdRotateLeft
                    className="flip-back-button"
                    onClick={() => setIsToggled(!isToggled)} />
                </div>
            </animated.div>

            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{
                zIndex: zIndex.interpolate(o => 1 - o),
                opacity: opacity.interpolate(o => 1 - o),
                transform }}>
                <div className="expand-image-icon-container">
                    <MdZoomOutMap className="expand-image-icon"/>
                </div>
                <img className="project-image-front" src={props.imageSrc}></img>
                <div className="project-title-front">
                    {props.projectTitle}
                </div>
                <div className="project-languages">
                    {props.projectLanguages}
                </div>
                <div className="learn-more-button-container">
                    <div 
                    className="learn-more-button"
                    onClick={() => setIsToggled(!isToggled)}>
                        Learn More
                    </div>
                </div>
            </animated.div>
            
        </div>
    );
}

export default ProjectCard
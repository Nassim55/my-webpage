import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdZoomOutMap, MdRotateLeft } from "react-icons/md";

import MarsRoverMoreInfo from './MoreInfoComponents/MarsRoverMoreInfo'; 
import UavMoreInfo from './MoreInfoComponents/UavMoreInfo';
import AerospaceSiteMoreInfo from './MoreInfoComponents/AerospaceSiteMoreInfo';
import HypersonicMoreInfo from './MoreInfoComponents/HypersonicMoreInfo';

const ProjectCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);


    const { zIndex, transform, opacity, height, width } = useSpring({
        zIndex: isFlipped ? 1 : 0,
        opacity: isFlipped ? 1 : 0,
        height: isFlipped ? '480px' : '240px',
        transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
        config: { mass: 12, tension: 500, friction: 80 }
    });

    return (
        <div id={props.projectId} className="project-card-page-2">
            
            { isEnlarged ? 
                <div className="container-project-image-expanded" tabIndex="0">
                    <img 
                    className="project-image-expanded"
                    src={props.enlargedImageSrc}
                    onClick={() => {
                        setIsEnlarged(!isEnlarged);
                        document.querySelector('.project-card-container').style.visibility = 'visible';
                    }} />
                </div>
                : null 
            }

            <animated.div className="c projects-container-back" style={{ zIndex, opacity, height, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
                <div className="project-title-back">{props.projectTitle}</div>
                <div className="flip-back-button-container">
                    <MdRotateLeft className="flip-back-button" onClick={() => setIsFlipped(!isFlipped)} />
                </div>
                
                {props.isMarsRover ? <MarsRoverMoreInfo /> : null}
                {props.isUav ? <UavMoreInfo /> : null}
                {props.isAerospaceSite ? <AerospaceSiteMoreInfo /> : null}
                {props.isHypersonic ? <HypersonicMoreInfo /> : null}
            </animated.div>

            <animated.div
            className="c projects-container-front"
            id="ml-sarcasm-project-container-front"
            style={{
                width,
                zIndex: zIndex.interpolate(o => 1 - o),
                opacity: opacity.interpolate(o => 1 - o),
                transform }}>
                <img className="project-image-front" id={props.imageId} src={props.imageSrc} />
                <div className="project-title-front">
                    {props.projectTitle}
                </div>
                <div className="project-languages">
                    {props.projectLanguages}
                </div>
                <div className="learn-more-button-container">
                    <div 
                    className="learn-more-button"
                    onClick={() => setIsFlipped(!isFlipped)}>
                        Learn More
                    </div>
                </div>
            </animated.div>
            
        </div>
    );
}

export default ProjectCard


/* 
<div className="expand-image-icon-container">
    <MdZoomOutMap
    className="expand-image-icon"
    onClick={() => {
        setIsEnlarged(!isEnlarged);
        document.querySelector('.project-card-container').style.visibility = 'hidden';
    }} />
</div>
*/
import React from 'react';
import marsroverVideo from '../../Videos/mars_rover.mov';

const paragraph1 = `mars rover text here ...`

const MarsRoverMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <video className="project-information-video" src={marsroverVideo} controls></video>
        </div>
    );
};

export default MarsRoverMoreInfo;
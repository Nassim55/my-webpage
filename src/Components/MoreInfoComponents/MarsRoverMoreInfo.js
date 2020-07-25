import React from 'react';
import marsroverVideo from '../../Videos/mars_rover.mov';
import marsRoverMotors from '../../Images/motorsNoBackground.jpg'
import marsRoverWheels from '../../Images/wheelsNoBackground.jpg'

const paragraph1 = `Second year aerospace engineering design project tasked with the design and manufacture
    of an autonomous mars rover. This rover would then go on to compete against teams drawn from the school
    of mechanical engineering year group. Play the video below to see the rover in action during the 
    competition.`

const MarsRoverMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <video className="project-information-video" src={marsroverVideo} controls></video>
            <p className="project-information-text">{paragraph1}</p>
            <img className="project-information-image-rectangle" src={marsRoverMotors} />
            <p className="project-information-text">{paragraph1}</p>
            <img className="project-information-image" src={marsRoverWheels} />
        </div>
    );
};

export default MarsRoverMoreInfo;
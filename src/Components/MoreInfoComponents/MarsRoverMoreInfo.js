import React from 'react';
import marsroverVideo from '../../Videos/mars_rover.mov';
import marsRoverMotors from '../../Images/motorsNoBackground.jpg'
import marsRoverWheels from '../../Images/wheelsNoBackground.jpg'

const paragraph1 = `Team project involving the design and build of an autonomous rover tasked to 
    compete in an assessed trial across an obstacle course. The rover was assessed on factors including:
    design ingenuity, autonomous algorithm precision, and structural integrity. See the rover in action below.`;

const paragraph2 = `Temperatures on the surface of Mars can drop to minus 107 degrees Centigrade. As such 
    it was not possible to use traditional rubber wheels due to their glass-like characteristics at low 
    temperatures. A minimalist aluminium alloy design was employed providing reduced weight and 
    sufficient structural integrity. To provide grip on rough and uneven surfaces, U-shaped runners were 
    designed to sit on the wheel edges. Additionally, the large wheel diameter was chosen in order to avoid
    the buggy struggling with bumps.`;

const paragraph3 = `A butterfly style minimalist suspension system was designed allowing independent 
    oscillations in each of the four wheels. To avoid fouling, the DC motors were...`;



const MarsRoverMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <video className="project-information-video" src={marsroverVideo} controls></video>
            <p className="project-information-text">{paragraph2}</p>
            <img className="project-information-image" src={marsRoverWheels} />
            <p className="project-information-text">{paragraph3}</p>
            <img className="project-information-image-rectangle" src={marsRoverMotors} />
        </div>
    );
};

export default MarsRoverMoreInfo;
import React from 'react';
import marsroverVideo from '../../Videos/mars_rover.mov';
import marsRoverMotors from '../../Images/motorsNoBackground.jpg'
import marsRoverWheels from '../../Images/wheelsNoBackground.jpg'
import marsroverImage from '../../Images/marsrover.jpg';
import realMarsroverImage from '../../Images/RealMarsRoverFlipped.jpg';

const paragraph1 = `Team project involving the design and build of an autonomous rover tasked to 
    compete in an assessed trial across an obstacle course. The rover was assessed on factors including:
    design ingenuity, autonomous algorithm precision, and structural integrity. See the rover in action below.`;

const paragraph2 = `Temperatures on the surface of Mars can drop to minus 107 degrees Centigrade. As such 
    it was not possible to use traditional rubber wheels due to their glass-like characteristics at low 
    temperatures. A minimalist aluminium alloy wheel was designed providing reduced weight and 
    sufficient structural integrity. To provide grip on rough and uneven surfaces, U-shaped runners were 
    designed to sit on the wheel edges. Additionally, a relatively large wheel diameter was chosen in order to avoid
    the buggy struggling with bumps. Take a look at the CAD model of the wheel design.`;

const paragraph3 = `A simple to manufacture butterfly style suspension system was designed allowing independent 
    oscillations in each of the four wheels, this can be seen in the CAD model below. Not only did this design enhance
    the engineering characteristics of the rover, it also complemented the overall aesthetics of the design.`;

const paragraph4 = `A comparison between the SolidWorks model designed and the actual rover manufactured by the team
    in the lab can be seen below. `

const MarsRoverMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <video className="project-information-video" src={marsroverVideo} controls></video>
            <p className="project-information-text">{paragraph2}</p>
            <img className="project-information-image" src={marsRoverWheels} />
            <p className="project-information-text">{paragraph3}</p>
            <img className="project-information-image-rectangle" src={marsRoverMotors} />
            <p className="project-information-text">{paragraph4}</p>
            <img className="project-information-image-rectangle" src={marsroverImage} />
            <img className="project-information-image-rectangle" src={realMarsroverImage} />
        </div>
    );
};

export default MarsRoverMoreInfo;
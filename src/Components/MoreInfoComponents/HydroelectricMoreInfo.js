import React from 'react';
import slomoHydroelectricVideo from '../../Videos/slomoWheel.mp4';
import turbineImage from '../../Images/turbineNoBackground.jpg';


const paragraph1 = `Hydroelectric power is a form of renewable energy that harnesses the kinetic energy present within
    a flow of water to generate electricity. Hydroelectric power, such as that used to turn a water wheel, has been used
    throughout history dating back to ancient Greece. At present, hydroelectric energy is the most commonly-used 
    renewable source of electricity energy worldwide. This can be attributed to the relatively low cost of hydroelectric
    energy per kilowatt hour.`;

const paragraph2 = `This project focused on the design and build of a hydroelectric turbine that could be used to
    generate electrical power. Theoretical calculations were carried out to determine critical design factors such as:
    the number of water buckets, surface area of water buckets, position of the water jet, and the jet diameter. See CAD
    models of the turbine and the turbine in action during lab testing below.`;

const HydroelectricMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <video className="project-information-video" src={slomoHydroelectricVideo} controls></video>
            <img className="project-information-image-rectangle" src={turbineImage} />
        </div>
    );
};

export default HydroelectricMoreInfo
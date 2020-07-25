import React from 'react';

import slomoHydroelectricVideo from '../../Videos/slomoWheel.mp4';

const paragraph1 = `Hydroelectric turbine project...`

const HydroelectricMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <video className="project-information-video" src={slomoHydroelectricVideo} controls></video>
        </div>
    );
};

export default HydroelectricMoreInfo
import React from 'react';
import cadHoneycomb from '../../Images/croppedCadHoneycomb.jpg';

const paragraph1 = `The effectivity of thermal management using a honeycomb sandwich panel
    as the skin structure for a hypersonic aircraft wing was assessed using both theoretical and 
    finite-element methods.`;

const paragraph2 = `Two different honeycomb models, hexagonal core and square core, were 
    analysed and results were compared to a conventional solid skin structure. CAD models for the inner
    core of the two honeycombs are shown below.`;
    
const paragraph3 =  `Results showed that heat transfer through a honeycomb core is noticeably reduced 
    relative to a solid structure with core cell geometry not having a significant effect on temperature
    distribution. Additionally a static structural analysis was carried out to determine the effect of
    thermal loads.`;   

const paragraph4 = `Conclusions drawn from this were that the hexagonal honeycomb displayed 
    lower stress values and was therefore the optimal honeycomb structure for use as the skin. Furthermore,
    by using a hexagonal honeycomb, it was shown that material volume was reduced by approximately 67% 
    relative to a conventional solid skin structure.`;

const HypersonicMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <img className="project-information-image" src={cadHoneycomb} />
            <p className="project-information-text">{paragraph3}</p>
            <p className="project-information-text">{paragraph4}</p>
        </div>
    );
};

export default HypersonicMoreInfo;
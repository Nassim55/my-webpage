import React from 'react';
import cadHoneycomb from '../../Images/croppedCadHoneycomb.jpg';

const paragraph1 = `Final year masters project working in conjunction with the aerospace organisation
    BAE Systems. The goal of this project was to optimise the design of a conceptual hypersonic civil 
    aircraft. I chose to research the advantages of employing a honeycomb like structure functioning as 
    the aircraft skin.`

const paragraph2 = `Hypersonic air flow is characterised by a number of physical phenomena that at present make it 
    unsuited for civil aircraft. One such flow characteristic is the excessively high temperatures faced by aircraft
    submerged within a hypersonic flow. By designing a honeycomb structure for the aircraft skin, heat transfer due
    to conduction can be significantly reduced as a result of the lack of structural material present.`

const paragraph3 = `Two different honeycomb models, a hexagonal core and a square core honeycomb, were 
    modelled and results were compared to a conventional solid skin structure. CAD models for the inner
    core of the two honeycombs are shown below. Note, the solid face plates on either side of the honeycomb core are
    not shown in this image.`;
    
const paragraph4 =  `Results showed that heat transfer through a honeycomb core is noticeably reduced in a honeycomb 
    skin relative to a contemporary solid skin structure. It was also found that both honeycomb core cell geometries 
    showed comparable heat transfer distributions through their depth. Therefore from the sample geometries chosen it
    was determined that the heat transfer function was independent of the core cell geometry. However it should be noted 
    that only two different cell geometries were modelled, this is a relatively small subset of the possible
    manufacturable core cell shapes. Further research  would be needed to conclusively support this conclusion.` 

const paragraph5 = `A structural analysis was also modelled to assess the structural trade-off when employing a 
    honeycomb skin over a conventional solid skin. Conclusions drawn from this were that the hexagonal honeycomb
    displayed lower stress values and was therefore the optimal honeycomb structure for use as the skin. Furthermore,
    by using a hexagonal honeycomb, it was shown that material volume was reduced by approximately 67% relative to a
    conventional solid skin structure. However, whilst the hexagonal core was optimal from a purely engineering point 
    of view, the trade-off for this is a more complex manufacturing set-up relative to a square honeycomb core. As such
    the final decision would be dependant on development constraints.`;

const HypersonicMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <p className="project-information-text">{paragraph3}</p>
            <img className="project-information-image" src={cadHoneycomb} />
            <p className="project-information-text">{paragraph4}</p>
            <p className="project-information-text">{paragraph5}</p>
        </div>
    );
};

export default HypersonicMoreInfo;
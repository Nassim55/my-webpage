import React from 'react';
import NoseUav from '../../Images/NoseUav.jpg';


const paragraph1 = `Multidisciplinary aerospace vehicle design team project involving the 
    design of an unmanned aerial vehicle, commonly known as a UAV. The aim of this project was to 
    design a UAV that could provide a solution to a current real-world problem. My team chose to develop
    at a UAV concept that could be used by emergency services such as search and rescue teams, 
    coastguards, and police forces.`;

const paragraph2 = `Through this concept my team were able to show that it was possible for a UAV to rapidly deliver life
    saving equipment to individuals trapped in hard to reach locations such as mountainous areas, natural
    disaster zones, and high seas. This equipment would be carried internally in the form of a capsule 
    mounted at the front of the UAV, shown in the image below. This capsule would then be jettisoned by the 
    controlling pilot situated at the launch site.`;

const paragraph3 = `The success of this project relied on a solid understanding of key aerospace engineering design
    concepts such as: aerodynamics, propulsion, stability and control, finite element analysis, and 
    computer aided design modelling. Similarly, economic considerations were equally critically to 
    project success. Material and manufacturing costs often forced significant design changes from
    the original concept, and the proposed business case relied on solid research carried out on current 
    and potential future competitors.`;

const UavMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <img className="project-information-image" src={NoseUav} />
            <p className="project-information-text">{paragraph3}</p>
        </div>
    );
};

export default UavMoreInfo;
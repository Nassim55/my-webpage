import React from 'react';
import ProjectCard from '../Components/PageTwoComponents/ProjectCard';

import marsroverImage from '../Images/marsrover.jpg'; 
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';

let hypersonicText = 'The effectivity of thermal management using a honeycomb sandwich panel as the skin structure for a hypersonic aircraft wing was assessed using both theoretical and finite-element methods. Two different honeycomb models, hexagonal core and square core, were analysed and results were compared to a conventional solid skin structure. Results showed that heat transfer through a honeycomb core is noticeably reduced relative to a solid structure with core cell geometry not having a significant effect on temperature distribution. Additionally a static structural analysis was carried out to determine the effect of thermal loads. Conclusions drawn from this were that the hexagonal honeycomb displayed lower stress values and was therefore the optimal honeycomb structure for use as the skin. Furthermore, by using a hexagonal honeycomb, it was shown that material volume was reduced by approximately 67% relative to a conventional solid skin structure.'

const Page3 = () => {
    return (
        <div className="page-2" id="page-2">
            <div className="page-title-grouping">
                <div
                id="page-2-title"
                className="page-title">
                    Projects
                </div>
                <div
                id="underline-page-2-title"
                className="underline-page-title">
                </div>
            </div>
            <ProjectCard 
            className="project-card-page-2"
            projectClassName={'project-card-page-2'}
            projectTitle={'AUTONOMOUS MARS ROVER'}
            projectLanguages={'SolidWorks, Matlab, LabView'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            projectInfo = {hypersonicText}
            imageSrc = {marsroverImage}
            />
            <ProjectCard
            projectClassName={'project-card-page-2'}
            projectTitle={'UNMANNED AERIAL VEHICLE'}
            projectLanguages={'SolidWorks, Matlab'}
            rotationDirection = {'180deg'}
            projectInfo = {hypersonicText}
            imageSrc = {uavImage}
            />
            <ProjectCard
            className="project-card-page-2"
            projectClassName={'project-card-page-2'}
            projectTitle={'HYPERSONIC THERMAL MANAGEMENT'}
            projectLanguages={'Python, SolidWorks, Ansys Fluent'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            projectInfo = {hypersonicText}
            imageSrc = {honeycombImage}
            />
            <ProjectCard
            projectClassName={'project-card-page-2'}
            projectTitle={'ARTIFICIAL NEURAL NETWORK'}
            projectLanguages={'Python, TensorFlow, Django, React'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            projectInfo = {hypersonicText}
            imageSrc = {neuralnetworkImage}
            />
        </div>
    );
};

export default Page3;
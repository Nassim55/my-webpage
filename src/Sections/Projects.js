import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';

import marsroverImage from '../Images/marsrover.jpg'; 
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';

import marsroverVideo from '../Videos/mars_rover.mov';

let hypersonicText = 'The effectivity of thermal management using a honeycomb sandwich panel as the skin structure for a hypersonic aircraft wing was assessed using both theoretical and finite-element methods. Two different honeycomb models, hexagonal core and square core, were analysed and results were compared to a conventional solid skin structure. Results showed that heat transfer through a honeycomb core is noticeably reduced relative to a solid structure with core cell geometry not having a significant effect on temperature distribution. Additionally a static structural analysis was carried out to determine the effect of thermal loads. Conclusions drawn from this were that the hexagonal honeycomb displayed lower stress values and was therefore the optimal honeycomb structure for use as the skin. Furthermore, by using a hexagonal honeycomb, it was shown that material volume was reduced by approximately 67% relative to a conventional solid skin structure.'

const Projects = () => {
    return (
        <div className="Projects">
            <SectionTitleGrouping sectionTitle={"Projects"}/>
            <div className="project-card-container">
                <ProjectCard 
                projectTitle={'autonomous mars rover'}
                projectLanguages={'SolidWorks, Matlab, LabView'}
                projectInfo = {hypersonicText}
                imageSrc = {marsroverImage}
                videoSrc = {marsroverVideo}
                isMarsRover = {true}
                />
                <ProjectCard
                projectTitle={'unmanned aerial vehicle'}
                projectLanguages={'SolidWorks, Matlab'}
                projectInfo = {hypersonicText}
                imageSrc = {uavImage}
                />
                <ProjectCard
                projectTitle={'hypersonic thermal management'}
                projectLanguages={'Python, SolidWorks, Ansys Fluent'}
                projectInfo = {hypersonicText}
                imageSrc = {honeycombImage}
                />
                <ProjectCard
                projectTitle={'artificial neural network'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                projectInfo = {hypersonicText}
                imageSrc = {neuralnetworkImage}
                />
                <ProjectCard
                projectTitle={'satellite attitude control'}
                projectLanguages={'Matlab, Simulink'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectTitle={'aerospace eng. interactive learning site'}
                projectLanguages={'Placeholder'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectTitle={'rolls-royce design simulation'}
                projectLanguages={'Placeholder'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectTitle={'placeholder'}
                projectLanguages={'Placeholder'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectTitle={'placeholder'}
                projectLanguages={'Placeholder'}
                projectInfo = {hypersonicText}
                />
            </div>
        </div>
    );
};

export default Projects;
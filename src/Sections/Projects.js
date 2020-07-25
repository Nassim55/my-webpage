import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';

import marsroverImage from '../Images/marsrover.jpg';
import marsRoverAnnotatedImage from '../Images/marsroverAnnotated.jpg';
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';
import attitudeControlImage from '../Images/attitudeControl.jpg';
import turbineImage from '../Images/turbineNoBackground.jpg';
import wipImage from '../Images/WIP.jpg';

const Projects = () => {
    return (
        <div className="Projects">
            <SectionTitleGrouping sectionTitle={"Projects"}/>
            <div className="project-card-container">
                <ProjectCard 
                isMarsRover = {true}
                projectTitle={'autonomous mars rover'}
                projectLanguages={'SolidWorks, Matlab, LabView'}
                imageSrc = {marsroverImage}
                enlargedImageSrc = {marsRoverAnnotatedImage}
                />
                <ProjectCard
                isUav = {true}
                projectTitle={'unmanned aerial vehicle'}
                projectLanguages={'SolidWorks, Matlab'}
                imageSrc = {uavImage}
                enlargedImageSrc = {uavImage}
                />
                <ProjectCard
                isAerospaceSite = {true}
                projectTitle={'aerospace eng. interactive learning site'}
                projectLanguages={'React, Python, Django'}
                imageSrc = {wipImage}
                imageId = {'work-in-progress'}
                />
                <ProjectCard
                isHypersonic = {true}
                projectTitle={'hypersonic aircraft design'}
                projectLanguages={'Python, SolidWorks, Ansys Fluent'}
                imageSrc = {honeycombImage}
                enlargedImageSrc = {honeycombImage}
                />
                <ProjectCard
                projectTitle={'satellite attitude control'}
                projectLanguages={'Matlab, Simulink'}
                imageSrc = {attitudeControlImage}
                />
                <ProjectCard
                isHydroelectric = {true}
                projectTitle={'Hydroelectric Turbine'}
                projectLanguages={'SolidWorks'}
                imageSrc = {turbineImage}
                />
                <ProjectCard
                projectTitle={'artificial neural network'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                imageSrc = {neuralnetworkImage}
                enlargedImageSrc = {neuralnetworkImage}
                />
                <ProjectCard
                projectTitle={'rolls-royce design simulation'}
                projectLanguages={'Witness Simulation Modelling'}
                />
                <ProjectCard
                projectTitle={'Random RUn'}
                projectLanguages={'React Native'}
                imageSrc = {wipImage}
                imageId = {'work-in-progress'}
                />
            </div>
        </div>
    );
};

export default Projects;
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
                projectId = {'mars-rover'}
                isMarsRover = {true}
                projectTitle = {'autonomous mars rover'}
                projectLanguages = {'SolidWorks, Matlab, LabView'}
                imageSrc = {marsroverImage}
                enlargedImageSrc = {marsRoverAnnotatedImage}
                />
                <ProjectCard
                projectId = {'uav'}
                isUav = {true}
                projectTitle={'unmanned aerial vehicle'}
                projectLanguages={'SolidWorks, Matlab'}
                imageSrc = {uavImage}
                enlargedImageSrc = {uavImage}
                />
                <ProjectCard
                projectId = {'aerospace-site'}
                isAerospaceSite = {true}
                projectTitle={'aerospace eng. interactive site'}
                projectLanguages={'React, Python, Django'}
                imageSrc = {wipImage}
                imageId = {'work-in-progress'}
                />
                <ProjectCard
                projectId = {'hypersonic-design'}
                isHypersonic = {true}
                projectTitle={'hypersonic aircraft design'}
                projectLanguages={'Python, SolidWorks, Ansys Fluent'}
                imageSrc = {honeycombImage}
                enlargedImageSrc = {honeycombImage}
                />
                <ProjectCard
                projectId = {'satellite'}
                projectTitle={'satellite attitude control'}
                projectLanguages={'Matlab, Simulink'}
                imageSrc = {attitudeControlImage}
                />
                <ProjectCard
                projectId = {'hydroelectric-turbine'}
                isHydroelectric = {true}
                projectTitle={'Hydroelectric Turbine'}
                projectLanguages={'SolidWorks'}
                imageSrc = {turbineImage}
                />
                <ProjectCard
                projectId = {'neural-network'}
                projectTitle={'artificial neural network'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                imageSrc = {neuralnetworkImage}
                enlargedImageSrc = {neuralnetworkImage}
                />
                <ProjectCard
                projectId = {'rolls-royce'}
                projectTitle={'rolls-royce design simulation'}
                projectLanguages={'Witness Simulation Modelling'}
                />
                <ProjectCard
                projectId = {'random-run'}
                projectTitle={'Random Run'}
                projectLanguages={'React Native'}
                imageSrc = {wipImage}
                imageId = {'work-in-progress'}
                />
            </div>
        </div>
    );
};

export default Projects;
import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';

import RandomRunImage from '../Images/Random_Run_Image.png'; 
import marsroverImage from '../Images/marsrover.jpg';
import marsRoverAnnotatedImage from '../Images/marsroverAnnotated.jpg';
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';
import attitudeControlImage from '../Images/attitudeControl.jpg';
import turbineImage from '../Images/turbineNoBackground.jpg';
import rollsroyceImage from '../Images/rollsRoyce.JPG';
import wipImage from '../Images/WIP.jpg';

const Projects = () => {
    return (
        <div className="Projects">
            <div className='projects-container'>
                <SectionTitleGrouping sectionTitle={"Projects"}/>
                <div className="project-card-container">
                    <ProjectCard
                    projectId = {'random-run'}
                    projectIdFocus = {'random-run-focus'}
                    isRandomRun = {true}
                    projectTitle={'Random Run'}
                    projectLanguages={'React Native, Python, Django, PostgreSQL'}
                    imageSrc = {RandomRunImage}
                    />
                    <ProjectCard 
                    projectId = {'mars-rover'}
                    projectIdFocus = {'mars-rover-focus'}
                    isMarsRover = {true}
                    projectTitle = {'autonomous mars rover'}
                    projectLanguages = {'SolidWorks, Matlab, LabView'}
                    imageSrc = {marsroverImage}
                    enlargedImageSrc = {marsRoverAnnotatedImage}
                    />
                    <ProjectCard
                    projectId = {'uav'}
                    projectIdFocus = {'uav-focus'}
                    isUav = {true}
                    projectTitle={'unmanned aerial vehicle'}
                    projectLanguages={'SolidWorks, Matlab'}
                    imageSrc = {uavImage}
                    enlargedImageSrc = {uavImage}
                    />
                    <ProjectCard
                    projectId = {'aerospace-site'}
                    projectIdFocus = {'aerospace-site-focus'}
                    isAerospaceSite = {true}
                    projectTitle={'aerospace eng. interactive site'}
                    projectLanguages={'React, Python, Django'}
                    imageSrc = {wipImage}
                    imageId = {'work-in-progress'}
                    />
                    <ProjectCard
                    projectId = {'hypersonic-design'}
                    projectIdFocus = {'hypersonic-design-focus'}
                    isHypersonic = {true}
                    projectTitle={'hypersonic aircraft design'}
                    projectLanguages={'Python, SolidWorks, Ansys Fluent'}
                    imageSrc = {honeycombImage}
                    enlargedImageSrc = {honeycombImage}
                    />
                    <ProjectCard
                    projectId = {'satellite'}
                    projectIdFocus = {'satellite-focus'}
                    isSatellite = {true}
                    projectTitle={'satellite attitude control'}
                    projectLanguages={'Matlab, Simulink'}
                    imageSrc = {attitudeControlImage}
                    />
                    <ProjectCard
                    projectId = {'hydroelectric-turbine'}
                    projectIdFocus = {'hydroelectric-turbine-focus'}
                    isHydroelectric = {true}
                    projectTitle={'Hydroelectric Turbine'}
                    projectLanguages={'SolidWorks'}
                    imageSrc = {turbineImage}
                    />
                    <ProjectCard
                    projectId = {'neural-network'}
                    projectIdFocus = {'neural-network-focus'}
                    isSentimentAnalysis = {true}
                    projectTitle={'Sentiment Analysis NLP'}
                    projectLanguages={'Python, TensorFlow, Django, React'}
                    imageSrc = {neuralnetworkImage}
                    enlargedImageSrc = {neuralnetworkImage}
                    />
                    <ProjectCard
                    projectId = {'rolls-royce'}
                    projectIdFocus = {'rolls-royce-focus'}
                    isRollsRoyce = {true}
                    projectTitle={'rolls-royce design simulation'}
                    projectLanguages={'Witness Simulation Modelling'}
                    imageSrc = {rollsroyceImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
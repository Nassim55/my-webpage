import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';

import marsroverImage from '../Images/marsrover.jpg';
import marsRoverAnnotatedImage from '../Images/marsroverAnnotated.jpg';
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';

import marsroverVideo from '../Videos/mars_rover.mov';

import {uavText, hypersonicText, aerospaceText} from '../Components/projectTexts';

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
                enlargedImageSrc = {marsRoverAnnotatedImage}
                videoSrc = {marsroverVideo}
                isMarsRover = {true}
                />
                <ProjectCard
                projectTitle={'unmanned aerial vehicle'}
                projectLanguages={'SolidWorks, Matlab'}
                projectInfo = {uavText}
                imageSrc = {uavImage}
                enlargedImageSrc = {uavImage}
                />
                <ProjectCard
                projectTitle={'aerospace eng. interactive learning site'}
                projectLanguages={'Placeholder'}
                projectInfo = {aerospaceText}
                />
                <ProjectCard
                projectTitle={'hypersonic thermal management'}
                projectLanguages={'Python, SolidWorks, Ansys Fluent'}
                projectInfo = {hypersonicText}
                imageSrc = {honeycombImage}
                enlargedImageSrc = {honeycombImage}
                />
                <ProjectCard
                projectTitle={'artificial neural network'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                projectInfo = {hypersonicText}
                imageSrc = {neuralnetworkImage}
                enlargedImageSrc = {neuralnetworkImage}
                />
                <ProjectCard
                projectTitle={'satellite attitude control'}
                projectLanguages={'Matlab, Simulink'}
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
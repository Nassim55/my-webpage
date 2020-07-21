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
                className="project-card-page-2"
                projectClassName={'project-card-page-2'}
                projectTitle={'AUTONOMOUS MARS ROVER'}
                projectLanguages={'SolidWorks, Matlab, LabView'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                rotationDirection = {'180deg'}
                projectInfo = {hypersonicText}
                imageSrc = {marsroverImage}
                videoSrc = {marsroverVideo}
                isMarsRover = {true}
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
                <ProjectCard
                projectClassName={'project-card-page-2'}
                projectTitle={'SATELLITE ATTITUDE CONTROL'}
                projectLanguages={'Matlab, Simulink'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                rotationDirection = {'180deg'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectClassName={'project-card-page-2'}
                projectTitle={'ROLLS-ROYCE DESIGN SIMULATION'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                rotationDirection = {'180deg'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectClassName={'project-card-page-2'}
                projectTitle={'PLACEHOLDER'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                rotationDirection = {'180deg'}
                projectInfo = {hypersonicText}
                />
                <ProjectCard
                projectClassName={'project-card-page-2'}
                projectTitle={'PLACEHOLDER'}
                projectLanguages={'Python, TensorFlow, Django, React'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                rotationDirection = {'180deg'}
                projectInfo = {hypersonicText}
                />
            </div>
        </div>
    );
};

export default Projects;
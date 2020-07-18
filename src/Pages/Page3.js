import React from 'react';
import ProjectCard from '../Components/PageTwoComponents/ProjectCard';

import marsroverImage from '../Images/marsrover.jpg'; 
import uavImage from '../Images/uav.jpg';
import honeycombImage from '../Images/honeycombs.jpg';
import neuralnetworkImage from '../Images/neuralnetwork.svg';

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
            projectLanguages={'Matlab, SolidWorks'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            imageSrc = {marsroverImage}
            />
            <ProjectCard
            projectClassName={'project-card-page-2'}
            projectTitle={'UNMANNED AERIAL VEHICLE'}
            projectLanguages={'Python'}
            rotationDirection = {'180deg'}
            imageSrc = {uavImage}
            />
            <ProjectCard
            className="project-card-page-2"
            projectClassName={'project-card-page-2'}
            projectTitle={'HYPERSONIC THERMAL MANAGEMENT'}
            projectLanguages={'Python, SolidWorks, ANSYS Fluent'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            imageSrc = {honeycombImage}
            />
            <ProjectCard
            projectClassName={'project-card-page-2'}
            projectTitle={'ARTIFICIAL NEURAL NETWORK'}
            projectLanguages={'React, Python, TensorFlow, Django'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            imageSrc = {neuralnetworkImage}
            />
        </div>
    );
};

export default Page3;
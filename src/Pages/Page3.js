import React from 'react';
import ProjectCard from '../Components/PageTwoComponents/ProjectCard';

import marsroverImage from '../Images/marsrover.jpg'; 
import honeycombImage from '../Images/honeycombs.jpg';

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
            rotationDirection = {'180deg'}
            imageSrc = {marsroverImage}
            />
            <ProjectCard
            className="project-card-page-2"
            projectClassName={'project-card-page-2'}
            projectTitle={'HYPERSONIC WING DESIGN'}
            projectLanguages={'Python, SolidWorks, ANSYS Fluent'}
            rotationDirection = {'180deg'}
            imageSrc = {honeycombImage}
            />
            <ProjectCard
            projectClassName={'project-card-page-2'}
            projectTitle={'SENTIMENT ANALYSIS ARTIFICIAL NEURAL NETWORK'}
            projectLanguages={'React, Python, TensorFlow, Django'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            />
        </div>
    );
};

export default Page3;
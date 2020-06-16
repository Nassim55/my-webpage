import React from 'react';
import ProjectCard from '../Components/PageTwoComponents/ProjectCard';

const PageTwo = () => {
    return (
        <div className="page-2" id="page-2">
            <ProjectCard 
            projectId={'ml'}
            projectClassName={'project-card-page-2'}
            projectTitle={'SENTIMENT ANALYSIS'}
            projectLanguages={'React, Python, TensorFlow, Django'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            />
            <ProjectCard
            projectId={'todo'}
            projectClassName={'project-card-page-2'}
            projectTitle={'TODO LIST'}
            projectLanguages={'React'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            />
            <ProjectCard 
            projectId={'project-3'}
            projectClassName={'project-card-page-2'}
            projectTitle={'MARS ROVER'}
            projectLanguages={'Matlab, SolidWorks'}
            projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
            rotationDirection = {'180deg'}
            />
        </div>
    );
};

export default PageTwo;
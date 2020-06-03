import React from 'react';
import ProjectCard from '../Components/PageTwoComponents/ProjectCard';

const PageTwo = () => {
    return (
        <div className="page-2" id="page-2">
            <div className="page-content-container">
                <ProjectCard 
                projectClassName={'ml'}
                projectTitle={'SENTIMENT ANALYSIS'}
                projectLanguages={'React, Python, TensorFlow, Django'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                />
                <ProjectCard 
                projectClassName={'todo'}
                projectTitle={'TODO LIST'}
                projectLanguages={'React'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                />
                <ProjectCard 
                projectClassName={'project-3'}
                projectTitle={'PROJECT THREE'}
                projectLanguages={'React'}
                projectHref = {'https://goofy-perlman-2c3af1.netlify.app/'}
                />
            </div>
        </div>
    );
};

export default PageTwo;
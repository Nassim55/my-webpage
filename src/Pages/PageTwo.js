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
                />
                <ProjectCard 
                projectClassName={'todo'}
                projectTitle={'TODO LIST'}
                projectLanguages={'React'}
                />
            </div>
        </div>
    );
};

export default PageTwo;
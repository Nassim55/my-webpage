import React from 'react';

const paragraph1 = `Currently a work in progress, this project aims to be an interactive highly visual 
    problem solving based site aimed at aerospace engineering undergraduate students. The main focus of 
    this site will be to build an understanding of key aerospace engineering concepts in an intuitive way.`;

const AerospaceSiteMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
        </div>
    );
};

export default AerospaceSiteMoreInfo;
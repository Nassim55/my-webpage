import React from 'react';

const paragraph1 = `Currently a work in progress, this project is focused on developing an artificial 
    neural network to determine sentiment in text.`;

const SentimentAnalysisMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
        </div>
    );
};

export default SentimentAnalysisMoreInfo;
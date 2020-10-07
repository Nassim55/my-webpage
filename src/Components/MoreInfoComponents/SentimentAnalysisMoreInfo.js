import React from 'react';

const paragraph1 = `Currently a work in progress, this project is focused on developing an artificial 
    neural network to determine sentiment in text. Sentiment analysis has a number of applications that companies
    can leverage, one such application is the ability to easily route customer emails for high volume companies.
    If the sentiment in a customer email is negative, the email can  be routed to a highly trained advisor that
    deals with customer retention and complaints. Neutral and positive emails would be routed to more general staff.`;

const SentimentAnalysisMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
        </div>
    );
};

export default SentimentAnalysisMoreInfo;
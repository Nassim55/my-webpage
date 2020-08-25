import React from 'react';
import RandomRunExampleVideo from '../../Videos/RandomRunVideo.webm';

const paragraph1 = `In the current climate, running as a low-cost form of exercise is becoming increasingly popular.
    Likewise, the demand for high quality running applications such as Strava is following this trend. Among other
    reasons, running is popular due to its relative ease, low-cost, and cardiovascular benefits. Often, the same
    route will be ran daily due to either convenience, time constraints, or progress monitoring. However, running a
    similar know route every day can easily cause loss of interest after the initial increased fitness benefits diminish.`;

const paragraph2 = `Random Run will be a mobile application designed to solve this problem. Before starting a run, users
    will be able to input the number of miles they wish to run and further optional values such as the maximum radius
    from their current location or areas they wish to avoid. Random run will then return a randomised route to the
    user. By generating a randomised route the user is encouraged to explore new routes whilst still being able to run a
    known distance. The intention is that the randomised element of not knowing the exact route will add to the running
    experience. See the video below for an example of how the current version of this app works, note that this app is
    still in development and this example may not reflect the finalised production version:`;

const paragraph3 = `React Native is being used for development on the front-end. Python has been used on the back end 
    to develop the initial route finding algorithm and the subsequent route optimisation algorithm. The Python framework
    Flask has been used to connect client side requests to back-end algorithms. Mapbox API's have been implemented as
    opposed to Google Maps due to their cheaper API call cost. This makes sense from a business perspective should this
    app become popular once released on the app store.`;

const RandomRunMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <video className="project-information-video" src={RandomRunExampleVideo} controls></video>
            <p className="project-information-text">{paragraph3}</p>
        </div>
    );
};

export default RandomRunMoreInfo;
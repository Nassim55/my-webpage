import React from 'react';

const paragraph1 = `In the current climate, running as a low-cost form of exercise is becoming increasingly popular.
    Likewise, the demand for high quality running applications such as Strava is following this trend.`;

const paragraph2 = `Among other reasons, running is popular due to its relative ease, low-cost, and cardiovascular
    benefits. Often, the same route will be ran daily due to either convenience, time constraints, or progress
    monitoring. However, running a similar know route every day can easily cause loss of interest after the 
    initial increased fitness benefits diminish.`;

const paragraph3 = `Random Run will be a mobile application designed to solve this problem. Before starting a run, users
    will be able to input the number of miles they wish to run and further optional values such as the maximum radius
    from their current location or areas they wish to avoid. Random run will then generate a randomised route for the
    user, however the user will not be able to see the generated route. Instead, the user will be directed on which directions 
    to take vocally through their headphones. As such, the user is encouraged to explore new routes whilst still being 
    able to run a constant distance. Additionally, the randomised element of not knowing the exact route can add to
    the running experience.`;

const paragraph4 = `React Native will be used for front-end development. Django and Python are likely to be used for
    back-end development. Additionally API's such as the Google Maps platform and Google Geolocation will be utilised.`;

const RandomRunMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <p className="project-information-text">{paragraph3}</p>
            <p className="project-information-text">{paragraph4}</p>
        </div>
    );
};

export default RandomRunMoreInfo;
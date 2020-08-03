import React from 'react';

const paragraph1 = `Currently in the conceptual design and market research development phase, this project aims to be 
    an interactive, highly visual problem solving based site aimed at aerospace engineering undergraduate and postgraduate
    students. The main focus of this site will be to build an understanding of key aerospace engineering concepts in an
    intuitive way using an interactive problem solving .`;

const paragraph2 = `The current planned technologies that will be used to develop this project are React on the front-end
    and Python/Django on the back-end server. Additionally, by using React on the front-end, this opens up the future 
    possibility of developing a mobile app with a similar code base using React Native.`;

const AerospaceSiteMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
        </div>
    );
};

export default AerospaceSiteMoreInfo;
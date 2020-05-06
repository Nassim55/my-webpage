import React from 'react';
import Card from 'react-bootstrap/Card';
import IntroButton from '../Components/IntroButton';
import myImage from './me-circle-cropped.png';
import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import reactLogo from '../Images/react.svg';

const PageOne = () => {
    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">
                <div className="technologies-title">
                    Languages I've worked with
                </div>
                <div className="technologies-bar">
                    <img
                        className="javascript-logo"
                        src={javascriptLogo}
                        alt="JavaScript" />
                    <img
                        className="react-logo"
                        src={reactLogo}
                        alt="React" />
                    <img
                        className="html-logo"
                        src={htmlLogo}
                        alt="HTML" />
                    <img
                        className="css-logo"
                        src={cssLogo}
                        alt="CSS" />
                    <img
                        className="python-logo"
                        src={pythonLogo}
                        alt="Python" />
                    <img
                        className="javascript-logo"
                        src={javascriptLogo}
                        alt="JavaScript" />
                </div>
                <div className="top-container-page-1">
                    <div className="top-left-container-page-1">
                        "I'm a Graduate Aerospace Engineering student from the University
                        of Leeds. Passionate about building interesting new software.
                        Main focuses so far have been on front-end developemnt. Interested on
                        working on machine learning and AI developemnt projects.
                        CHeck out my projects on GitHub and Contact me (link) "
                    </div>
                    <div className="top-right-container-page-1">
                        <img
                            className="my-photo"
                            src={myImage}
                            alt="me"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;
import React from 'react';
import Card from 'react-bootstrap/Card';
import IntroButton from '../Components/IntroButton';
import myImage from './me-circle-cropped.png';
import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import reactLogo from '../Images/react.svg';
import SimpleSwiper from '../Components/SimpleSwiper';


const PageOne = () => {
    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">
                <div className="technologies-title">
                    Languages I've worked with
                </div>
                <SimpleSwiper />
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
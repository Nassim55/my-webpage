import React from 'react';
import Card from 'react-bootstrap/Card';
import IntroButton from '../Components/IntroButton';
import myImage from './me-circle-cropped.png';
import javascriptLogo from '../Images/JavaScript.png';
import pythonLogo from '../Images/Python.png';
import htmlLogo from '../Images/HTML.png';
import cssLogo from '../Images/CSS.png';

const PageOne = () => {
    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">
                <div className="top-container-page-1">
                    <div className="top-left-container-page-1">
                        <img
                            className="my-photo"
                            src={myImage}
                            alt="me"
                        />
                    </div>
                    <div className="top-right-container-page-1">
                        <div className="card-top-right-page-1">
                            <div className="technologies-left">
                                <img
                                    className="javascript-logo"
                                    src={javascriptLogo}
                                    alt="JavaScript" />
                                <p>JavaScript</p>
                                <img
                                    className="html-logo"
                                    src={htmlLogo}
                                    alt="HTML" />
                                <p>HTML</p>
                            </div>
                            <div className="technologies-right">
                                <img
                                    className="python-logo"
                                    src={pythonLogo}
                                    alt="Python" />
                                <p>Python</p>
                                <img
                                    className="css-logo"
                                    src={cssLogo}
                                    alt="CSS" />
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;
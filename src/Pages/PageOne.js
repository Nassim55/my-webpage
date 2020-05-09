import React from 'react';
import myImage from './me-circle-cropped.png';
import SimpleSwiper from '../Components/SimpleSwiper';


const PageOne = () => {
    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">

                <SimpleSwiper className="simple-swiper"/>
                <div className="top-container-page-1">

                    <div className="top-left-container-page-1">
                        <img
                            className="my-photo"
                            src={myImage}
                            alt="me"
                        />
                    </div>
                    <div className="top-right-container-page-1">
                        <p>
                            <span className="quotation-marks">"&nbsp;&nbsp;&nbsp;</span>
                            I'm a Graduate Aerospace Engineering student from the University
                            of Leeds. Passionate about building interesting new software.
                            <span className="quotation-marks">&nbsp;&nbsp;&nbsp;"</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;
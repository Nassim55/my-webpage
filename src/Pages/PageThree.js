import React from 'react';
import CarouselUseSprings from '../Components/PageOneComponents/CarouselUseSprings';

import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';

const PageThree = () => {
    return (
        <div
        className="page-3"
        id="page-3">
            <CarouselUseSprings 
            languageTitles={['JavaScript', 'Python', 'HTML', 'CSS']}
            languageLogos={[javascriptLogo, pythonLogo, htmlLogo,cssLogo]}
            />
        </div>
    );
};

export default PageThree;
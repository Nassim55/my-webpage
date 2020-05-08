import React from 'react';
import javascriptLogo from '../Images/javascript.svg';
import pythonLogo from '../Images/python.svg';
import htmlLogo from '../Images/html5.svg';
import cssLogo from '../Images/css3.svg';
import reactLogo from '../Images/react.svg';
import InfiniteCarousel from 'react-leaf-carousel';

const InfiniteCarouselTechnologies = () => {
    return (
        <InfiniteCarousel
            breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
            slidesSpacing={10}
            autoCycle={true}
        >
            <div>
                <img
                    className="javascript-logo"
                    src={javascriptLogo}
                    alt='JavaScript' />
            </div>
            <div>
                <img
                    className="react-logo"
                    src={reactLogo}
                    alt='React' />
            </div>
            <div>
                <img
                    className="html-logo"
                    src={htmlLogo}
                    alt='HTML 5' />
            </div>
            <div>
                <img
                    className="css-logo"
                    src={cssLogo}
                    alt='CSS 3' />
            </div>
            <div>
                <img
                    className="python-logo"
                    src={pythonLogo}
                    alt='Python' />
            </div>
        </InfiniteCarousel>
    );
};

export default InfiniteCarouselTechnologies;
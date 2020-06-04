import React from 'react';
import Carousel from '../Components/PageOneComponents/Carousel';
import PullRelease from '../Components/PageOneComponents/PullRelease';

const PageThree = () => {
    return (
        <div
        className="page-3"
        id="page-3">
            <PullRelease />
            <Carousel />
        </div>
    );
};

export default PageThree;
import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import StickyNavbar from './Components/StickyNavbar';
import IntroPage from './Pages/IntroPage';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import IntroButton from './Components/IntroButton';
import { useSpring, animated } from 'react-spring';

const App = () => {

    return (
        <div className="App">
            <IntroPage />
            <IntroButton />
            <StickyNavbar />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
        </div>
    );
}

export default App;

import React, { useState } from 'react';

import './App.css';
import 'antd/dist/antd.css';

//Page Styles
import './style/css/IntroPage.css';
import './style/css/Page2.css';
import './style/css/Page3.css';

//Component Styles
import './style/css/GenericButton.css'

import StickyNavbar from './Components/StickyNavbar';
import IntroPage from './Pages/IntroPage';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';

const App = () => {
    return (
        <div className="App">
            <IntroPage />
            <StickyNavbar />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
        </div>
    );
}

export default App;

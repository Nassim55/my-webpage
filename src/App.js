import React from 'react';
import './App.css';

// Page Components
import IntroPage from './Pages/IntroPage';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';

//Page Styles
import './style/css/IntroPage.css';
import './style/css/Page1.css';
import './style/css/Page2.css';
import './style/css/Page3.css';

//Component Styles
import './style/css/GenericButton.css'

const App = () => {
    return (
        <div className="App">
            <IntroPage />
            <PageOne />
            <PageTwo />
            <PageThree />
        </div>
    );
}

export default App;

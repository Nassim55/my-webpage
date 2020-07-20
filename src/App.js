import React from 'react';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

const App = () => {
    window.scrollTo(0,1);
    return (
        <div className="App">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    );
}

export default App;

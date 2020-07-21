import React from 'react';

import Intro from './Sections/Intro';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

const App = () => {
    return (
        <div className="App">
            <Intro />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;

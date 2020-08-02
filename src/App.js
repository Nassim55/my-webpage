import React from 'react';

import Intro from './Sections/Intro';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

const App = () => {
    return (
        <div className="App">
            <Intro />
            <div className='desktop-page'>
                <div className='container-about-projects-contact'>
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;

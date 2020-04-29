import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import StickyNavbar from './Components/StickyNavbar';
import IntroPage from './Pages/IntroPage';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'

const App = () => {
    return (
        <div className="App">
            <IntroPage />
            <div className="intro-bottom">
                <Link
                    activeClass="active"
                    to="page-1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <Button
                        className="entry-button"
                        color="primary"
                    >
                        <h3
                            className="entry-button-text"
                        >
                            View my work...
                        </h3>
                </Button>{' '}
                </Link>
            </div>
            <StickyNavbar />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import mlSarcasmProjectImage from '../ml-sarcasm.JPG';

const PageTwo = () => {
    const [isToggled1, setIsToggled1] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);
    const fade1 = useSpring({
        opacity: isToggled1 ? 1 : 0
    });
    const fade2 = useSpring({
        opacity: isToggled2 ? 1 : 0
    });

    return (
        <div className="page-2" id="page-2">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">  
                <div
                className="project-container"
                id="ml-sarcasm-project-container"
                onClick={() => setIsToggled1(!isToggled1)} >
                    <animated.p 
                    className="project-title"
                    style={fade1}>
                        Machine Learning Sarcasm Software
                    </animated.p>
                    <animated.p 
                    className="project-languages"
                    style={fade1}>
                        React, Python, TensorFlow, Django
                    </animated.p>
                    <animated.div
                    className="intro-button"
                    style={fade1}>
                        <a
                        href="https://goofy-perlman-2c3af1.netlify.app/"
                        target="_blank">
                            Hello
                        </a>
                    </animated.div>
                </div>
                <div
                className="project-container"
                onClick={() => setIsToggled2(!isToggled2)} >
                    <animated.p 
                    className="project-title"
                    style={fade2}>
                        To Do List
                    </animated.p>
                    <animated.p 
                    className="project-languages"
                    style={fade2}>
                        React
                    </animated.p>
                </div>



                <a
                    className="link-todoList"
                    href="https://epic-lichterman-75a3e1.netlify.app/"
                    target="_blank">
                To Do List
                </a>
            </div> 
        </div>
    );
};

export default PageTwo;
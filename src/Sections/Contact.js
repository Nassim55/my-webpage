import React from 'react';
import { SocialIcon } from 'react-social-icons';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';


const Contact = () => {
    return (
        <div className="Contact">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <SectionTitleGrouping sectionTitle={"Contact"}/>
            <div className="social-icons-container">
                <SocialIcon
                className="social-icons"
                url="https://www.linkedin.com/in/nassim-chenouf-2b7845135/"
                fgColor="#ffffff"
                bgColor="#F24E4E" />
                <SocialIcon
                className="social-icons"
                url="https://github.com/Nassim55"
                fgColor="#ffffff"
                bgColor="#F24E4E" />
                <SocialIcon
                className="social-icons"
                url="mailto:nassim.chenouf@outlook.com"
                fgColor="#ffffff"
                bgColor="#F24E4E" />
            </div>
        </div>
    );
};

export default Contact;
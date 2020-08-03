import React from 'react';
import { SocialIcon } from 'react-social-icons';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';


const Contact = () => {
    return (
        <div className="Contact">
            <div className="social-icons-container">
                <SocialIcon
                className="social-icons"
                url="mailto:nassim.chenouf@outlook.com"
                fgColor="#ffffff"
                bgColor="#F24E4E"
                style={{ height: 35, width: 35 }}/>
                <SocialIcon
                className="social-icons"
                url="https://www.linkedin.com/in/nassim-chenouf-2b7845135/"
                fgColor="#ffffff"
                bgColor="#F24E4E"
                style={{ height: 35, width: 35 }}/>
                <SocialIcon
                className="social-icons"
                url="https://github.com/Nassim55"
                fgColor="#ffffff"
                bgColor="#F24E4E"
                style={{ height: 35, width: 35 }}/>
            </div>
        </div>
    );
};

export default Contact;
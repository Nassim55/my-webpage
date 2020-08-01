import React from 'react';
import { SocialIcon } from 'react-social-icons';
import SectionTitleGrouping from '../Components/SectionTitleGrouping';


const Contact = () => {
    return (
        <div className="Contact">
            <SectionTitleGrouping sectionTitle={"Contact"}/>
            <div className="social-icons-container">
                <SocialIcon
                className="social-icons"
                url="mailto:nassim.chenouf@outlook.com"
                bgColor="#ffffff"
                fgColor="#F24E4E" />
                <SocialIcon
                className="social-icons"
                url="https://www.linkedin.com/in/nassim-chenouf-2b7845135/"
                bgColor="#ffffff"
                fgColor="#F24E4E" />
                <SocialIcon
                className="social-icons"
                url="https://github.com/Nassim55"
                bgColor="#ffffff"
                fgColor="#F24E4E" />
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const SectionTitleGrouping = (props) => {
    return (
        <div className="SectionTitleGrouping">
            <div className="section-title">
                {props.sectionTitle}
            </div>
            <div className="section-title-underline"></div> 
        </div>
    );
};

export default SectionTitleGrouping;
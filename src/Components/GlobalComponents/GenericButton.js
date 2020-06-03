import React from 'react';

const GenericButton = () => {
    const onMouseEnterIntroButton = () => {
        document.querySelector('.generic-button-text').style.color = '#252934';
        document.querySelector('.generic-button').style.backgroundColor = '#BFC0C0';
    };

    const onMouseLeaveIntroButton = () => {
        document.querySelector('.generic-button-text').style.color = '#BFC0C0';
        document.querySelector('.generic-button').style.backgroundColor = '#252934';
    };

    return (
        <div className="generic-button-container">
            <div 
            className="generic-button"
            onMouseEnter={onMouseEnterIntroButton}
            onMouseLeave={onMouseLeaveIntroButton}>
                <a className="generic-button-text">
                    VIEW MY WORK
                </a>
            </div>
        </div>
    );
};

export default GenericButton;
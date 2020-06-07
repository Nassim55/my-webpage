import React from 'react';

const GenericButton = (props) => {
    const onMouseEnterIntroButton = () => {
        document.querySelector('.generic-button-text').style.color = '#252934';
        document.querySelector('.generic-button').style.backgroundColor = '#BFC0C0';
    };

    const onMouseLeaveIntroButton = () => {
        document.querySelector('.generic-button-text').style.color = '#BFC0C0';
        document.querySelector('.generic-button').style.backgroundColor = '#252934';
    };

    const styleGenericButtonText = {
        color: props.textColour
    };

    const styleGenericButtonContainer = {
        borderColor: props.borderColour,
        backgroundColor: props.backgroundColour
    };

    return (
        <div className="generic-button-container">
            <div 
            className="generic-button"
            onMouseEnter={onMouseEnterIntroButton}
            onMouseLeave={onMouseLeaveIntroButton} 
            style={styleGenericButtonContainer}>
                <a 
                className="generic-button-text"
                href={props.href}
                target="_blank"
                style={styleGenericButtonText}>
                    {props.text}
                </a>
            </div>
        </div>
    );
};

export default GenericButton;
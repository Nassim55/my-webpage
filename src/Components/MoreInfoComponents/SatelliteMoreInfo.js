import React from 'react';
import satelliteImage from '../../Images/attitudeControl.jpg';

const paragraph1 = `Attitude control theory is used by engineers to determine the position of a satellite in three
    dimensional space. Attitude control systems are critical in the development of satellites, where even small errors
    can compound resulting in significant deviation from the intended orbit.` 

const paragraph2 = `An attitude control system is comprised of three main components: sensors, actuators, and a 
    control algorithm. On-board sensors, such as a gyroscope, are used to record the current attitude of the satellite.
    Data from the sensors are then fed into the control algorithm. The control algorithm output activates the actuators
    based on the desired attitude. Thrusters containing compressed gas are commonly used actuators.`;

const paragraph3 = `The focus of this project was on the control algorithm aspect of the attitude control system. 
    Matlab and Simulink were chosen as the software to implement this algorithm due to their proven suitability for this 
    problem in industry.`;

const paragraph4 = `One of the control systems implemented in this project is known as a B-Dot controller. B-Dot
    controllers are commonly used on miniature satellites such as a CubeSat as they only rely on data from one sensor,
    the magnetometer. Shown below is the Simulink implementation of the B-Dot controller de-tumbling algorithm. Note that
    Quarternion mathematics were employed to avoid the effect of 'Gimbal Lock' that is possible when using the more
    human readable Euler angles.`;


const SatelliteMoreInfo = () => {
    return (
        <div className="project-information-container">
            <p className="project-information-text">{paragraph1}</p>
            <p className="project-information-text">{paragraph2}</p>
            <p className="project-information-text">{paragraph3}</p>
            <p className="project-information-text">{paragraph4}</p>
            <img className="project-information-image-rectangle" src={satelliteImage} />
        </div>
    );
};

export default SatelliteMoreInfo;
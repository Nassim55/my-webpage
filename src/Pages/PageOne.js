import React from 'react';
import myImage from './me-circle-cropped.png';
import Card from 'react-bootstrap/Card';
import IntroButton from '../Components/IntroButton';

const PageOne = () => {
    return (
        <div className="page-1" id="page-1">
            <div className="page-1-top-div"></div>
            <div className="container-page-1">
                <div className="technologies-page-1">
                    <div>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="top-container-page-1">
                    <div className="top-left-container-page-1">
                        <img
                            className="my-photo"
                            src={myImage}
                            alt="me"
                        />
                    </div>
                    <div className="top-right-container-page-1">
                        <div className="card-top-right-page-1">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at. Sodales ut eu sem integer vitae justo eget magna. Quam viverra orci sagittis eu volutpat. Eu feugiat pretium nibh ipsum consequat nisl vel. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Amet cursus sit amet dictum sit amet justo donec. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Dolor sed viverra ipsum nunc aliquet. Aenean et tortor at risus viverra adipiscing at in tellus. Faucibus scelerisque eleifend donec pretium. Velit scelerisque in dictum non. Facilisis magna etiam tempor orci. Amet purus gravida quis blandit.

                                Ornare lectus sit amet est placerat. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Erat velit scelerisque in dictum. Nunc consequat interdum varius sit amet mattis. Ullamcorper eget nulla facilisi etiam. Pretium nibh ipsum consequat nisl. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Integer quis auctor elit sed vulputate. Turpis egestas integer eget aliquet. Vivamus arcu felis bibendum ut. Mattis enim ut tellus elementum sagittis vitae et leo. Dui accumsan sit amet nulla. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Consequat interdum varius sit amet mattis vulputate enim nulla.
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;
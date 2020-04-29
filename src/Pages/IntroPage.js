import React from 'react';
import { Link } from "react-scroll";
import { Button } from 'react-mdl';

const IntroPage = () => {
    return (
        <div
            className="intro-page"
            id="intro-page">
            <h1 className="nassim-introduction">
                Hello I'm Nassim, welcome to my Developer Portfolio
                </h1>
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
                    color="primary">
                    View my work...
                    </Button>{' '}
            </Link>
        </div>
    );
};

export default IntroPage;
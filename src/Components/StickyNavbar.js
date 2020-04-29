import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

const StickyNavbar = () => {
    return (
        <Navbar
            className="sticky-navbar"
            expand="lg"
            variant="light"
            bg="light"
            sticky="top">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="page-2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Page 2
                            </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="page-3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Page 3
                            </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="page-4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Page 4
                            </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default StickyNavbar;
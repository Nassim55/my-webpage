import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";
import '../App.css';


const StickyNavbar = () => {
    return (
        <Navbar
            className="sticky-navbar"
            id="sticky-navbar-id"
            expand="lg"
            variant="light"
            bg="light"
            sticky="top">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link
                        id="sticky-nav-links-id-1">
                        <Link
                            activeClass="active"
                            to="page-1"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            About
                            </Link>
                    </Nav.Link>
                    <Nav.Link
                        id="sticky-nav-links-id-2">
                        <Link
                            activeClass="active"
                            to="page-2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            Projects
                            </Link>
                    </Nav.Link>
                    <Nav.Link
                        id="sticky-nav-links-id-3">
                        <Link
                            activeClass="active"
                            to="page-3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            Blog
                            </Link>
                    </Nav.Link>
                    <Nav.Link
                        id="sticky-nav-links-id-4">
                        <Link
                            activeClass="active"
                            to="page-4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            Contact
                            </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default StickyNavbar;
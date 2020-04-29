import React, { useState } from 'react';
import { Link } from "react-scroll";

const AboutNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            className="about-nav-bar"
            color="light"
            light expand="md"
            sticky="top">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink>
                            <Link
                                activeClass="active"
                                to="blue"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Blue
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link
                                activeClass="active"
                                to="yellow"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Yellow
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link
                                activeClass="active"
                                to="magenta"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Magenta
                            </Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default AboutNavbar;
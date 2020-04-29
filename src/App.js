import React from 'react';
import './App.css';
import { Button } from 'react-mdl';
import 'antd/dist/antd.css';
import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <div
                className="red"
                id="red">
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
            <Navbar
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
            <div
                className="page-1"
                id="page-1">
            </div>
            <div
                className="page-2"
                id="page-2">
            </div>
            <div
                className="page-3"
                id="page-3">
            </div>
            <div
                className="page-4"
                id="page-4">
            </div>
        </div>
    );
}

export default App;

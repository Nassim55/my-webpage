import React from 'react';


const Navbar = () => {
    const toggleNavbar = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active');
    };

    return (
        <nav className="Navbar">
            <div className="toggle-button" onClick={toggleNavbar} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
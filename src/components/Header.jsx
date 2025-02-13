import React from "react";
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="header-content">
                <nav className="navbar">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="intro">
                    <h1>I'm a Web Developer</h1>
                    <h1>Mirab Nasir</h1>
                    <p>Pursuing Software Engineering | Founder & Brand Manager at Scintillant | Passionate Web Development Enthusiast</p>
                </div>
            </div>
        </header>
    );
}

export default Header;

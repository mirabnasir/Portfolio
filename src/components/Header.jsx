
import React, { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header" id="home">

            {/* Background Overlay */}
            <div className="header-overlay"></div>

            {/* Navbar */}
            <nav className="navbar">

                <a href="#home" className="logo" onClick={closeMenu}>
                    MN<span>.</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`menu-btn ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>

            {/* Mobile Sidebar */}
            <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>

                <div className="sidebar-header">
                    <span>Menu</span>

                    <button
                        className="close-btn"
                        onClick={closeMenu}
                        aria-label="Close navigation"
                    >
                        ×
                    </button>
                </div>

                <ul>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#experience" onClick={closeMenu}>
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#project" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#education" onClick={closeMenu}>
                            Education
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>

            </aside>

            {/* Overlay for Mobile Sidebar */}
            {menuOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Hero */}
            <div className="hero">

                <div className="hero-content">

                    <p className="hello">Hello, I'm</p>

                    <h1>Mirab Nasir</h1>

                    <h2>Software Engineer</h2>

                    <p className="intro">
                        I build responsive and user-friendly web applications
                        with modern web technologies.
                    </p>

                    <a href="#project" className="hero-btn">
                        View My Work
                    </a>

                </div>

            </div>

        </header>
    );
}

export default Header;


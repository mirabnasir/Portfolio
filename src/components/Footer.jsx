
import React from 'react';
import './Footer.css';

import {
    SiGithub,
    SiGmail,
    SiLinkedin
} from 'react-icons/si';

import {
    FaPhoneAlt
} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                {/* ================= BRAND ================= */}

                <div className="brand">

                    <h1>Web Developer</h1>

                    <p>
                        Minimal & Creative Portfolio/CV/Biodata Solution
                        in One Platform.
                    </p>

                </div>


                {/* ================= CONTACT INFO ================= */}

                <div className="contact-info">

                    {/* EMAIL */}

                    <div className="contact-item">

                        <div className="contact-heading">
                            <SiGmail className="contact-icon gmail-icon" />
                            <h3>Sent Mail</h3>
                        </div>

                        <a href="mailto:mirabnasir443@gmail.com">
                            <p>mirabnasir443@gmail.com</p>
                        </a>

                    </div>


                    {/* PHONE */}

                    <div className="contact-item">

                        <div className="contact-heading">
                            <FaPhoneAlt className="contact-icon phone-icon" />
                            <h3>Make Call</h3>
                        </div>

                        <a href="tel:+923366401518">
                            <p>+92 336 6401518</p>
                        </a>

                    </div>


                    {/* LINKEDIN */}

                    <div className="contact-item">

                        <div className="contact-heading">
                            <SiLinkedin className="contact-icon linkedin-icon" />
                            <h3>Get in Touch</h3>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/mirab-nasir"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>LinkedIn - Mirab Nasir</p>
                        </a>

                    </div>


                    {/* GITHUB */}

                    <div className="contact-item">

                        <div className="contact-heading">
                            <SiGithub className="contact-icon github-icon" />
                            <h3>GitHub</h3>
                        </div>

                        <a
                            href="https://github.com/mirabnasir"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>github.com/mirabnasir</p>
                        </a>

                    </div>

                </div>


                {/* ================= COPYRIGHT ================= */}

                <p className="date">
                    Copyright &copy; {new Date().getFullYear()} Mirab Nasir.
                    All rights reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;


import React from 'react';
import './Footer.css';
import { SiGithub, SiGmail, SiLinkedin} from 'react-icons/si';
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="brand">
                    <h1>Web Developer</h1>
                    <p>Minimal & Creative Portfolio/CV/Biodata Solution in One Platform.</p>
                </div>
                <div className="social-icons">
                <a href="mailto:mirabnasir443@gmail.com">
                      <SiGmail size={24} color="#D14836" />
                </a>
                <a href="https://www.linkedin.com/in/mirab-nasir" target="_blank" rel="noopener noreferrer">
                     <SiLinkedin size={24} color="#0077B5" />
                </a>

                <a href="https://github.com/mirabnasir" target="_blank" rel="noopener noreferrer">
                     <SiGithub size={24} color="#181717" />
                </a>

                </div>
                <div className="intro">
                    <p>I’m a web developer, focus only on my work.</p>
                </div>
                <div className="contact-info">
                    <div className="email">
                        <h3>Sent Mail</h3>
                        <a href="mailto:mirabnasir443@gmail.com">
                        <p>mirabnasir443@gmail.com</p>
                        </a>
                    </div>
                    <div className="phone">
                        <h3>Make Call</h3>
                        <p>+92 3366401518</p>
                    </div>
                    <div className="address">
                        <h3>Get in Touch</h3>
                        <a href="https://www.linkedin.com/in/mirab-nasir" target="_blank" rel="noopener noreferrer">
                        <p>LinkIn Mirab Nasir</p>
                         </a>
                        
                    </div>

                </div>
                <p className='date'> Copyright &copy; {new Date().getFullYear()} ThemePure. All rights reserved. </p>
            </div>
        </footer>
    );
}

export default Footer
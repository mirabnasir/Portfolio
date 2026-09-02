
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about">

            <div className="about-content">

                <p className="section-label">ABOUT ME</p>

                <h1>
                    Building Practical Solutions Through Code
                </h1>

                <p className="about-text">
                    I am a Software Engineer with a strong interest in
                    full-stack web development. I enjoy building responsive,
                    user-friendly and reliable web applications that solve
                    real-world problems.
                </p>

                <p className="about-text">
                    Through academic and personal projects, I have gained
                    hands-on experience in developing frontend interfaces,
                    backend APIs and database-driven applications. I am
                    continuously improving my skills and exploring better
                    ways to build clean and maintainable software.
                </p>

                <div className="about-highlights">

                    <div className="highlight">
                        <h3>01</h3>
                        <p>Problem Solving</p>
                    </div>

                    <div className="highlight">
                        <h3>02</h3>
                        <p>Web Development</p>
                    </div>

                    <div className="highlight">
                        <h3>03</h3>
                        <p>Continuous Learning</p>
                    </div>

                </div>

                <div className="about-button">
                    <a
                        href="https://mirabnasir.github.io/cv/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View My CV
                    </a>
                </div>

            </div>

        </section>
    );
}

export default About;


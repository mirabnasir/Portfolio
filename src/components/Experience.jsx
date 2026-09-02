
import React from "react";
import "./Experience.css";

import techohubLogo from "../assets/techohub-logo.png";
import cyranixLogo from "../assets/cyranix-logo.webp";

// Certificate images
import nsctCertificate from "../assets/nsct-certificate.jpeg";
import greatstackCertificate from "../assets/greatstack-certificate.jpeg";

function Experience() {
    return (
        <section className="experience" id="experience">

            {/* ================= EXPERIENCE HEADING ================= */}

            <div className="experience-heading">

                <p className="section-label">
                    MY EXPERIENCE
                </p>

                <h1>
                    Experience
                </h1>

                <p>
                    Practical experience gained through internships and
                    hands-on development projects.
                </p>

            </div>


            {/* ================= EXPERIENCE CARDS ================= */}

            <div className="experience-container">

                {/* ================= CYRANIX ================= */}

                <div className="experience-card">

                    <div className="experience-top">

                        <img
                            src={cyranixLogo}
                            alt="Cyranix LLC logo"
                            className="company-logo"
                        />

                        <div className="experience-info">

                            <h2>
                                Backend Development Intern
                            </h2>

                            <a
                                href="https://www.cyranixllc.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="company-name"
                            >
                                Cyranix LLC ↗
                            </a>

                            <span className="experience-date">
                                September 2025 - January 2026
                            </span>

                        </div>

                    </div>

                    <p className="experience-description">
                        Worked with GraphQL APIs to design efficient queries
                        and mutations, enabling structured and scalable data
                        fetching for web applications.
                    </p>

                </div>


                {/* ================= TECHOHUB ================= */}

                <div className="experience-card">

                    <div className="experience-top">

                        <img
                            src={techohubLogo}
                            alt="TechoHub logo"
                            className="company-logo"
                        />

                        <div className="experience-info">

                            <h2>
                                Frontend Development Intern
                            </h2>

                            <a
                                href="https://www.techohub.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="company-name"
                            >
                                TechoHub ↗
                            </a>

                            <span className="experience-date">
                                July 2024 - October 2024
                            </span>

                        </div>

                    </div>

                    <p className="experience-description">
                        Enhanced front-end development expertise in React.js
                        and JavaScript by developing dynamic user interfaces
                        and implementing responsive designs.
                    </p>

                </div>

            </div>


            {/* ================= CERTIFICATIONS HEADING ================= */}

            <div className="certifications-heading">

                <p className="section-label">
                    MY CERTIFICATIONS
                </p>

                <h1>
                    Certifications
                </h1>

                <p>
                    Certifications and achievements that reflect my technical
                    knowledge, skills, and continuous learning.
                </p>

            </div>


            {/* ================= CERTIFICATION CARDS ================= */}

            <div className="experience-container certifications-container">

                {/* ================= NSCT ================= */}

                <div className="experience-card certificate-card">

                    <div className="certificate-content">

                        <span className="certificate-label">
                            CERTIFICATION
                        </span>

                        <h2>
                            National Skills Competency Test
                        </h2>

                        <span className="experience-date">
                           April 04, 2026
                        </span>

                        <p className="experience-description">
                            Successfully completed the National Skills
                            Competency Test conducted by the Higher Education
                            Commission (HEC), demonstrating technical
                            competency, problem-solving ability, and
                            professional skills.
                        </p>

                        <a
                            href={nsctCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-link"
                        >
                            View Certificate ↗
                        </a>

                    </div>

                </div>


                {/* ================= GREATSTACK ================= */}

                <div className="experience-card certificate-card">

                    <div className="certificate-content">

                        <span className="certificate-label">
                            CERTIFICATION
                        </span>

                        <h2>
                            Full Stack Development Project  GreatStack
                        </h2>

                        <span className="experience-date">
                           October 13 , 2024
                        </span>

                        <p className="experience-description">
                            Successfully completed a practical full-stack
                            development project with GreatStack, gaining
                            hands-on experience in building modern web
                            applications and applying full-stack development
                            concepts.
                        </p>

                        <a
                            href={greatstackCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-link"
                        >
                            View Certificate ↗
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;


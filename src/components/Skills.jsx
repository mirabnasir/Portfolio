
import React, { useState } from "react";
import "./Skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaUsers,
    FaComments,
    FaClock,
    FaPenNib,
    FaLightbulb,
    FaServer
} from "react-icons/fa";

import {
    SiCplusplus,
    SiCsharp,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiGraphql
} from "react-icons/si";

function Skills() {

    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardNumber) => {
        setActiveCard(
            activeCard === cardNumber ? null : cardNumber
        );
    };

    return (
        <section className="skills" id="skills">

            {/* ================= HEADING ================= */}

            <div className="skills-heading">

                <p className="section-label">
                    MY SKILLS
                </p>

                <h1>
                    Skills & Technologies
                </h1>

                <p>
                    A combination of technical knowledge, development tools
                    and professional skills developed through academic and
                    practical projects.
                </p>

            </div>


            {/* ================= 4 CARDS ================= */}

            <div className="skills-container">


                {/* ================= CARD 1 ================= */}

                <div
                    className={`skill-card ${
                        activeCard === 1 ? "active" : ""
                    }`}
                    onClick={() => handleCardClick(1)}
                >

                    <div className="card-number">
                        01
                    </div>

                    <h2>
                        Programming & Core Concepts
                    </h2>

                    <p className="card-description">
                        Programming languages and fundamental concepts used
                        for problem solving and software development.
                    </p>

                    <div className="skill-list">

                        <div className="skill-item">
                            <SiCplusplus className="cpp-icon" />
                            <span>C / C++</span>
                        </div>

                        <div className="skill-item">
                            <SiCsharp className="csharp-icon" />
                            <span>C#</span>
                        </div>

                        <div className="skill-item">
                            <span className="java-icon">
                                J
                            </span>
                            <span>Java</span>
                        </div>

                        <div className="skill-item">
                            <span className="oop-icon">
                                OOP
                            </span>
                            <span>OOP</span>
                        </div>

                    </div>

                </div>


                {/* ================= CARD 2 ================= */}

                <div
                    className={`skill-card ${
                        activeCard === 2 ? "active" : ""
                    }`}
                    onClick={() => handleCardClick(2)}
                >

                    <div className="card-number">
                        02
                    </div>

                    <h2>
                        Web Development
                    </h2>

                    <p className="card-description">
                        Building responsive and interactive web interfaces
                        using modern frontend technologies.
                    </p>

                    <div className="skill-list">

                        <div className="skill-item">
                            <FaHtml5 className="html-icon" />
                            <span>HTML / CSS</span>
                        </div>

                        <div className="skill-item">
                            <FaJsSquare className="js-icon" />
                            <span>JavaScript</span>
                        </div>

                        <div className="skill-item">
                            <SiReact className="react-icon" />
                            <span>React.js</span>
                        </div>

                        <div className="skill-item">
                            <FaBootstrap className="bootstrap-icon" />
                            <span>Bootstrap</span>
                        </div>

                        <div className="skill-item">
                            <SiTailwindcss className="tailwind-icon" />
                            <span>Tailwind CSS</span>
                        </div>

                    </div>

                </div>


                {/* ================= CARD 3 ================= */}

                <div
                    className={`skill-card ${
                        activeCard === 3 ? "active" : ""
                    }`}
                    onClick={() => handleCardClick(3)}
                >

                    <div className="card-number">
                        03
                    </div>

                    <h2>
                        Backend & Databases
                    </h2>

                    <p className="card-description">
                        Developing server-side applications, APIs and
                        working with relational and NoSQL databases.
                    </p>

                    <div className="skill-list">

                        <div className="skill-item">
                            <SiNodedotjs className="node-icon" />
                            <span>Node.js</span>
                        </div>

                        <div className="skill-item">
                            <SiExpress className="express-icon" />
                            <span>Express.js</span>
                        </div>

                        <div className="skill-item">
                            <SiMongodb className="mongo-icon" />
                            <span>MongoDB</span>
                        </div>

                        <div className="skill-item">
                            <SiMysql className="mysql-icon" />
                            <span>MySQL</span>
                        </div>

                        <div className="skill-item">
                            <SiGraphql className="graphql-icon" />
                            <span>GraphQL</span>
                        </div>
                        <div className="skill-item">
                           <FaServer className="api-icon" />
                           <span>REST APIs</span>
                        </div>
                    </div>

                </div>


                {/* ================= CARD 4 ================= */}

                <div
                    className={`skill-card ${
                        activeCard === 4 ? "active" : ""
                    }`}
                    onClick={() => handleCardClick(4)}
                >

                    <div className="card-number">
                        04
                    </div>

                    <h2>
                        Tools & Professional Skills
                    </h2>

                    <p className="card-description">
                        Development tools and interpersonal skills that
                        support effective collaboration and productivity.
                    </p>

                    <div className="skill-list">

                        <div className="skill-item">
                            <FaGitAlt className="git-icon" />
                            <span>Git / GitHub</span>
                        </div>

                        <div className="skill-item">
                            <span className="ms-icon">
                                MS
                            </span>
                            <span>MS Office</span>
                        </div>

                        <div className="skill-item">
                            <FaComments className="communication-icon" />
                            <span>Communication</span>
                        </div>

                        <div className="skill-item">
                            <FaUsers className="team-icon" />
                            <span>Teamwork</span>
                        </div>

                        <div className="skill-item">
                            <FaLightbulb className="problem-icon" />
                            <span>Problem Solving</span>
                        </div>

                        <div className="skill-item">
                            <FaClock className="time-icon" />
                            <span>Time Management</span>
                        </div>

                        <div className="skill-item">
                            <FaPenNib className="writing-icon" />
                            <span>Content Writing</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;


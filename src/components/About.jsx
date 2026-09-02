
import React from "react";
import "./About.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaGithub,
} from "react-icons/fa";

import {
  SiReact,
  SiCplusplus,
  SiCsharp,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

function About() {
  return (
    <div className="about">

      <h1>Designing With Passion While Exploring The World</h1>

      <div className="list">
        <ol>
          <li>
            Development of thorough SRS documents for semester projects,
            guaranteeing precise and defined software requirements and
            enhancing the efficiency of the development process.
          </li>

          <li>
            Developed a Java-based Library Management System incorporating
            advanced OOP principles for streamlined operations.
          </li>

          <li>
            Completed C++ projects and implemented various data structures
            and algorithms for practical applications. Developed web projects
            using HTML.
          </li>

          <li>
            Crafted responsive layouts and stylish designs, showcasing
            proficiency in structuring content and applying CSS properties
            effectively. These projects enhanced my web development skills.
          </li>
        </ol>

        <div className="about-buttons">
          <a
            href="https://mirabnasir.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View My CV</button>
          </a>
        </div>
      </div>

      <div className="service-container">

        {/* Web Development */}
        <div className="service">
          <h2>Web Development & Front-End Development</h2>

          <p>
            Crafting visually stunning and responsive web pages that engage
            users across all devices.
          </p>

          <ul>
            <li>
              <FaHtml5 color="#E34F26" /> HTML5
            </li>

            <li>
              <FaCss3Alt color="#1572B6" /> CSS3
            </li>

            <li>
              <FaJsSquare color="#F7DF1E" /> JavaScript
            </li>

            <li>
              <FaMobileAlt color="#28A745" /> Responsive Design
            </li>
          </ul>
        </div>

        {/* Programming & Backend */}
        <div className="service">
          <h2>Programming Languages & Backend</h2>

          <p>
            Working with versatile programming languages and backend
            technologies for efficient development.
          </p>

          <ul>
            <li>
              <SiCplusplus color="#00599C" /> C++
            </li>

            <li>
              <SiCsharp color="#239120" /> C#
            </li>

            <li>
              <SiNodedotjs color="#83CD29" /> Node.js (Basic)
            </li>

            <li>
              <SiMongodb color="#47A248" /> MongoDB (Basic)
            </li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="service">
          <h2>Version Control & Deployment</h2>

          <p>
            Ensuring smooth development processes with industry-standard
            tools.
          </p>

          <ul>
            <li>
              <FaGithub color="#181717" /> Git & GitHub
            </li>

            <li>
              <SiReact color="#61DAFB" /> React
            </li>

            <li>
              <FaServer color="#6C757D" /> API Integration
            </li>

            <li>
              <FaRocket color="#FF4500" /> Performance Optimization
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;


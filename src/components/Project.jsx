
import React from "react";
import "./Project.css";

import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import picture3 from "../assets/Picture3.png";
import stockInsight from "../assets/stock-insight.jpg";
import Servicay from "../assets/servicay.png";
import boutiqueBilling from "../assets/boutique.png";
import taskManager from "../assets/taskmanagerPic.png";
import websiteLogo from "../assets/website-logo.jpg";
import unileverLogo from "../assets/unilever-logo.png";
import qrCode from "../assets/qrcode-img.png";
import weatherImage from "../assets/weather-imgg.png";

// Add these two images in your assets folder
//import stockInsight from "../assets/stockInsight.png";
//import boutiqueBilling from "../assets/boutiqueBilling.png";

function Project() {
    return (
        <section className="project" id="projects">

            {/* ================= HEADING ================= */}

            <div className="project-heading">
                <p className="section-label">MY PROJECTS</p>

                <h1>Projects & Work</h1>

                <p>
                    A selection of projects that demonstrate my experience in
                    frontend development, full-stack applications, responsive
                    design, and practical problem solving.
                </p>
            </div>


            {/* ================= FEATURED PROJECTS ================= */}

            <div className="projects-container">

                {/* Stock Insight */}

                <div className="project-card featured-project">

                    <div className="project-image">
                    <img
                            src={stockInsight}
                            alt="Stock Insight Project"
                     />
                    </div>

                    <div className="project-content">

                        <span className="project-category">
                            Final Year Project
                        </span>

                        <h2>Stock Insights</h2>

                        <div className="tech-tags">
                            <span>MERN Stack</span>
                            <span>TailwindCSS</span>
                            <span>RAG</span>
                            <span>AI Insights</span>
                        </div>

                        <p>
                            A full-stack inventory management and POS system
                            designed to help businesses manage products,
                            sales, purchases, stock levels, and business
                            insights through a centralized platform.
                        </p>
                        <div className="project-button">
                            <a
                                href="https://stock-insight-fe-production.up.railway.app/auth/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Project
                            </a>
                        </div>
                    </div>

                </div>

{/* ================= SERVICAY / TAP A DOOR ================= */}

<div className="project-card featured-project">

    <div className="project-image">
       
        <img
            src={Servicay}
            alt="Servicay Tap a Door"
        />
       
    </div>

    <div className="project-content">

        <span className="project-category">
            Full Stack Application
        </span>

        <h2>Servicay – Tap a Door</h2>

        <div className="tech-tags">
           
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>GraphQL</span>
        </div>

        <p>
            A service-based web application designed to connect customers
            with service providers through a convenient and user-friendly
            platform. The system supports service management, structured
            data handling, and efficient backend communication.
        </p>
        <div className="project-button">
                            <a
                                href="https://servicay-frontend-production.up.railway.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Project
                            </a>
                        </div>
    </div>

</div>
                {/* Boutique Billing System */}

                <div className="project-card featured-project">

                    <div className="project-image">
                         <img
                            src={boutiqueBilling}
                            alt="Boutique Billing System"
                        /> 
                    </div>

                    <div className="project-content">

                        <span className="project-category">
                            Full Stack Application
                        </span>

                        <h2>Boutique Billing System</h2>

                        <div className="tech-tags">
                            <span>React.js</span>
                            <span>Responsive Design</span>
                            <span>MongoDB Atlas</span>
                        </div>

                        <p>
                            A simple and user-friendly billing system for
                            boutiques, supporting customized bill creation,
                            customer records, payment tracking, bill history,
                            and business profit management.
                        </p>

                    </div>

                </div>


           

               


                {/* ================= E-COMMERCE ================= */}

                <div className="project-card">

                    <div className="project-image">
                        <img
                            src={websiteLogo}
                            alt="E-Commerce Website"
                        />
                    </div>

                    <div className="project-content">

                        <span className="project-category">
                            Frontend Project
                        </span>

                        <h2>E-Commerce Website</h2>

                        <div className="tech-tags">
                            <span>React.js</span>
                            <span>NodeJS</span>
                            <span>JavaScript</span>
                        </div>

                        <p>
                            A responsive e-commerce website featuring product
                            browsing, interactive cart functionality, smooth
                            navigation, and a user-friendly shopping
                            experience.
                        </p>

                        <div className="project-button">
                            <a
                                href="https://scintillant.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Website
                            </a>
                        </div>

                    </div>

                </div>



                {/* ================= UNILEVER ================= */}

                <div className="project-card">

                    <div className="project-image">
                        <img
                            src={unileverLogo}
                            alt="Unilever Website Clone"
                        />
                    </div>

                    <div className="project-content">

                        <span className="project-category">
                            Website Clone
                        </span>

                        <h2>Unilever Website Clone</h2>

                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Static Website</span>
                        </div>

                        <p>
                            A responsive website clone inspired by Unilever,
                            focusing on modern layout structure, responsive
                            design, visual consistency, and user experience.
                        </p>

                        <div className="project-button">
                            <a
                                href="https://unilever-theta.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Website
                            </a>
                        </div>

                    </div>

                </div>
 {/* ================= WEATHER ================= */}

 <div className="project-card">

<div className="project-image">
    <img
        src={weatherImage}
        alt="Weather App"
    />
</div>

<div className="project-content">

    <span className="project-category">
        React Application
    </span>

    <h2>Weather App</h2>

    <div className="tech-tags">
        <span>React.js</span>
        <span>API</span>
    </div>

    <p>
        A responsive weather application that provides
        real-time weather information for different
        locations through API integration.
    </p>

    <div className="project-button">
        <a
            href="https://weather-app--wine.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
        >
            View Project
        </a>
    </div>

</div>

</div>
            </div>


            {/* ================= OLD SCREENSHOTS ================= */}

            <div className="additional-projects">

                <h2>More Work</h2>

                <div className="additional-images">

                    <div>
                        <img src={picture1} alt="Project preview" />
                    </div>

                    <div>
                        <img src={picture2} alt="Project preview" />
                    </div>

                    <div>
                        <img src={picture3} alt="Project preview" />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Project;

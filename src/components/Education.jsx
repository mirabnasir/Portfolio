
import React from "react";
import "./Education.css";

function Education() {
    return (
        <section className="education" id="education">

            <div className="education-heading">
                <p className="section-label">MY EDUCATION</p>

                <h1>Education</h1>

                <p>
                    My academic background in software engineering and
                    technology.
                </p>
            </div>


            <div className="education-container">

                <div className="education-card">

                    <div className="education-icon">
                        🎓
                    </div>

                    <div className="education-content">

                        <span className="education-year">
                            2022 – 2026
                        </span>

                        <h2>
                            Bachelor of Science in Software Engineering
                        </h2>

                        <h3>
                            IISAT University
                        </h3>

                        <p>
                            Studied software engineering with a focus on
                            web development, software design, databases,
                            and modern application development.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;


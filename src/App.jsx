import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;

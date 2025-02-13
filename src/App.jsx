import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;

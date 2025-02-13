import React from "react";
import './Project.css';
import picture1 from '../assets/Picture1.png';
import picture2 from '../assets/Picture2.png';
import picture3 from '../assets/Picture3.png';
import game1 from '../assets/tictac.png';
import game2 from '../assets/rockpaper.png';
import taskManager from '../assets/taskmanagerPic.png';
import websiteLogo from '../assets/website-logo.jpg';
import unileverLogo from '../assets/unilever-logo.png';
import qrCode from '../assets/qrcode-img.png';
import weatherImage from '../assets/weather_img.jpg';


function Project(){
    return(

<div className="project">
            <h1>Here are my Projects</h1>
            <p>I specialize in creating responsive and user-friendly websites using Bootstrap. My design approach emphasizes efficiency and aesthetics, ensuring each site is not only visually engaging but also highly functional across all devices.</p>
            <div className="projects-container">
              <div className="project1">
                <img  src={picture1}></img>
             </div>
            
             <div className="project1">
                <img  src={picture2}></img>
             </div>
             <div className="project1">
                <img  src={picture3}></img>
             </div>
            </div>
            <h1> I have made some projects and games using HTML, CSS and JavaScript.</h1>
    <div className="service-containers">
       <div class="service-box">
         <div class="service-img">
            <img src={game1}></img>
         </div>
         <div class="service-title">
          <h2> Tic-Tac-Toe</h2>
         </div>
         <div class="service-desc">
           <p>Play this classic two-player game where you aim to align three marks in a row, column, or diagonal. Built with HTML, CSS, and JavaScript for a smooth experience.</p>
         </div>
         <div class="call-to-action">
            <a href="https://mirabnasir.github.io/tic-tac-toe-game/" target="-blank" rel="noopener noreferrer"> Play Game</a>
            <a href="https://github.com/mirabnasir/tic-tac-toe-game" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={game2}></img>
         </div>
         <div class="service-title">
          <h2> Rock-Paper-Scissors</h2>
         </div>
         <div class="service-desc">
           <p>Challenge the computer in this fun game where rock beats scissors, scissors cuts paper, and paper covers rock. Built with HTML, CSS, and JavaScript.</p>
         </div>
         <div class="call-to-action">
            <a href="https://mirabnasir.github.io/rock-paper-scissors-game/" target="-blank" rel="noopener noreferrer"> Play Game</a>
            <a href="https://github.com/mirabnasir/rock-paper-scissors-game" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={taskManager}></img>
         </div>
         <div class="service-title">
          <h2>Task Manager</h2>
         </div>
         <div class="service-desc">
           <p>A simple yet effective Task Manager built with React. Manage your tasks efficiently with features like adding, editing, and deleting tasks.</p>
         </div>
         <div class="call-to-action">
            <a href="https://task-manager-taupe-mu.vercel.app/" target="-blank" rel="noopener noreferrer"> View Project</a>
            <a href="https://github.com/mirabnasir/Task-Manager" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
       <div className="service-box">
                    <div className="service-img">
                        <img src={weatherImage} alt="Weather App"></img>
                    </div>
                    <div className="service-title">
                        <h2>Weather App</h2>
                    </div>
                    <div className="service-desc">
                        <p>A weather forecasting web application built with React, providing real-time weather updates for any location. Features a clean UI and responsive design for an optimal user experience.</p>
                    </div>
                    <div className="call-to-action">
                        <a href="https://weather-app--wine.vercel.app" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mirabnasir/Weather-App" target="_blank" rel="noopener noreferrer">Check Repository</a>
                    </div>
                </div>
       <div class="service-box">
         <div class="service-img">
            <img src={websiteLogo}></img>
         </div>
         <div class="service-title">
          <h2> E-Commerce Website</h2>
         </div>
         <div class="service-desc">
           <p>A fully responsive eCommerce website built with React, offering seamless navigation and a smooth shopping experience with an interactive cart.</p>
         </div>
         <div class="call-to-action">
             <a href="https://scintillant.vercel.app/" target="-blank" rel="noopener noreferrer"> View Website</a>
            <a href="https://github.com/mirabnasir/Ecommerce_Website" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={qrCode}></img>
         </div>
         <div class="service-title">
          <h2> QR Code Generator</h2>
         </div>
         <div class="service-desc">
           <p>A React-based QR code generator that allows users to quickly create QR codes. Optimized for performance and ease of use.</p>
         </div>
         <div class="call-to-action">
            <a href="https://qr-code-generator-ten-pi.vercel.app/" target="-blank" rel="noopener noreferrer"> View Project</a>
            <a href="https://github.com/mirabnasir/QRCode-Generator" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={unileverLogo}></img>
         </div>
         <div class="service-title">
          <h2>Unilever Website Clone</h2>
         </div>
         <div class="service-desc">
           <p>A Unilever-inspired website clone, designed with modern web technologies for high performance, mobile responsiveness, and fast loading speeds.</p>
         </div>
         <div class="call-to-action">
            <a href="https://unilever-theta.vercel.app/" target="-blank" rel="noopener noreferrer"> View Website</a>
            <a href="https://github.com/mirabnasir/Unilever" target="-blank" rel="noopener noreferrer"> Check Repository</a>
          </div>
       </div>
    </div>
</div>
    );
}
export default Project

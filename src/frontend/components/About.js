import React from "react";
import "../css/About.css";
import stud from "../images/about1.jpg";
import StatsCounter from "./Stat";
import Why from "./Why";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-image slide-in-left">
            <img src={stud} alt="About Amplemind" />
          </div>
          
          <div className="about-content slide-in-right">
            <h3 className="section-subtitle">About Us</h3>
            <h2 className="section-title">
              Building Future <span>IT Professionals</span>
            </h2>
            <p>
              Amplemind Institute is a modern IT training institute focused on
              practical learning and industry-ready skills. We help students build
              strong technical knowledge through real-world projects and expert
              mentorship.
            </p>
            
            <div className="about-points">
              <div className="point-item">✔ Practical Learning</div>
              <div className="point-item">✔ Live Projects</div>
              <div className="point-item">✔ Expert Trainers</div>
              <div className="point-item">✔ Placement Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Tech Marquee */}
      <div className="tech-marquee">
        <div className="marquee-content">
          <span>JAVA</span>
          <span>FULL STACK</span>
          <span>WEB DEVELOPMENT</span>
          <span>PYTHON</span>
          <span>DATA SCIENCE</span>
          <span>DATA ANALYTICS</span>
          <span>UI/UX DESIGN</span>
          {/* Duplicated for seamless loop */}
          <span>JAVA</span>
          <span>FULL STACK</span>
          <span>WEB DEVELOPMENT</span>
          <span>PYTHON</span>
          <span>DATA SCIENCE</span>
          <span>DATA ANALYTICS</span>
          <span>UI/UX DESIGN</span>
        </div>
      </div>

      <StatsCounter />
      <Why />
    </>
  );
}

export default About;
import React from "react";
import "../css/About.css";
import code from "../images/about2.jpg";

function Why() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-content slide-up">
          <h2>
            Why <span>Choose Us</span>
          </h2>
          
          <div className="why-box">
            <h3>Experienced Trainers</h3>
            <div className="progress">
              <div className="progress-bar p1"></div>
            </div>
            <div className="progress-value">95%</div>
          </div>
          
          <div className="why-box">
            <h3>Practical Learning</h3>
            <div className="progress">
              <div className="progress-bar p2"></div>
            </div>
            <div className="progress-value">90%</div>
          </div>
          
          <div className="why-box">
            <h3>Placement Support</h3>
            <div className="progress">
              <div className="progress-bar p3"></div>
            </div>
            <div className="progress-value">85%</div>
          </div>
          
          <div className="why-box">
            <h3>Student Satisfaction</h3>
            <div className="progress">
              <div className="progress-bar p4"></div>
            </div>
            <div className="progress-value">98%</div>
          </div>
        </div>

        <div className="why-image slide-up">
          <img src={code} alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
}

export default Why;
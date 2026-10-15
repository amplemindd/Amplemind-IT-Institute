import React from "react";
import "../css/Courses.css";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

function CourseCard({ id, title, description }) {
  return (
    <div className="service-card">
      <div className="icon-box">
        <img src={icon} alt={title} className="card-icon" />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <Link to={`/courses/${id}`} className="explore-btn">
        Learn More <span>➔</span>
      </Link>
    </div>
  );
}

export default CourseCard;
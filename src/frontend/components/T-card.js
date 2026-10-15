import React from "react";
import "../css/Testimonial.css";

function TestimonialCard({ name, course, review }) {
  // '&mouth=smile' add kiya hai taaki saare avatars simply smile karein
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=eef0ff&mouth=smile`;

  return (
    <div className="testimonial-card">
      {/* Background quote icon */}
      <div className="quote-icon">“</div>
      
      <div className="stars">★★★★★</div>

      <p className="review-text">{review}</p>

      <div className="client">
        {/* Normal client-img class use ki hai */}
        <img src={avatarUrl} alt={name} className="client-img" />

        <div className="client-info">
          <h3>{name}</h3>
          <span>{course || "Student"}</span> 
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
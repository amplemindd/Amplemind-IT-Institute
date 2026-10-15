import React from "react";
import "../css/Contact.css";
import call from "../images/contact.png";
import mail from "../images/mail.png";
import pin from "../images/location.png";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We will get back to you soon.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Section Title */}
        <div className="section-title slide-up">
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>We'd love to hear from you. Drop us a message or visit our office.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-cards">
          <div className="c-card slide-up">
            <div className="c-icon">
              <img src={call} alt="Call Us" />
            </div>
            <h3>Call Us</h3>
            <p>+91 9552211561</p>
          </div>

          <div className="c-card slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="c-icon">
              <img src={mail} alt="Email Us" />
            </div>
            <h3>Email Us</h3>
            <p>contact@amplemind.in</p>
          </div>

          <div className="c-card slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="c-icon">
              <img src={pin} alt="Location" />
            </div>
            <h3>Visit Us</h3>
            <p>08, Near Zudio, Gurudev Nagar, Nagpur</p>
          </div>
        </div>

        {/* Form and Map Wrapper */}
        <div className="contact-wrapper">
          
          {/* Left Side: Map */}
          <div className="map-container slide-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.565277772216!2d79.11869927449916!3d21.129890884298835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c708d48753cd%3A0xa6f78bb0c556e8d3!2sAmplemind!5e0!3m2!1sen!2sin!4v1778681257717!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Amplemind Office Location"
            ></iframe>
          </div>

          {/* Right Side: Exact Match Form */}
          <div className="form-container slide-left">
            <div className="form-header">
              <h3>Book A Free Enquiry</h3>
              <p>Fill out the form below and our team will contact you shortly.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              
              {/* Row 1: Connected Inputs */}
              <div className="input-group-row">
                <input type="text" placeholder="Your Name" className="left-input" required />
                <input type="email" placeholder="Your Email" className="right-input" required />
              </div>
              
              {/* Row 2: Connected Inputs */}
              <div className="input-group-row">
                <input type="tel" placeholder="Mobile Number" className="left-input" required />
                <input type="text" placeholder="Course / Subject" className="right-input" required />
              </div>
              
              {/* Message Box */}
              <textarea placeholder="Write your message here..." rows="5" required></textarea>
              
              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Send Message <span className="arrow">➔</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
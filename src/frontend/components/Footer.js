import React from "react";
import "../css/Footer.css";
import logo from "../images/A-Logo.jpeg";
import fb from "../images/facebook.webp";
import ig from "../images/insta.png";
import li from "../images/linkedin.webp";
import yt from "../images/youtube.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-col company-info">
          <img src={logo} alt="Amplemind Logo" className="footer-logo" />
          <p>
            Empowering careers through industry-focused IT training and
            certification programs.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/100092625685076/" target="_blank" rel="noreferrer">
              <img src={fb} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/amplemind_/" target="_blank" rel="noreferrer">
              <img src={ig} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/company/amplemindtechnologies" target="_blank" rel="noreferrer">
              <img src={li} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://youtube.com/@amplemind?si=orfm4lgIQNUyl36o" target="_blank" rel="noreferrer">
              <img src={yt} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Popular Courses */}
        <div className="footer-col">
          <h2>Popular Courses</h2>
          <ul className="footer-links">
            <li><a href="/courses">Full Stack Development</a></li>
            <li><a href="/courses">Java Development</a></li>
            <li><a href="/courses">Python Programming</a></li>
            <li><a href="/courses">Salesforce</a></li>
            <li><a href="/courses">SAP</a></li>
            <li><a href="/courses">Data Analytics</a></li>
            <li><a href="/courses">Data Science</a></li>
            <li><a href="/courses">DevOps</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/testimonial">Testimonials</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-col contact-info">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span className="contact-label">Address:</span>
              <span className="contact-text">08, Near Zudio, Gurudev Nagar, Nagpur</span>
            </li>
            <li>
              <span className="contact-label">Phone:</span>
              <span className="contact-text">+91 9552211561</span>
            </li>
            <li>
              <span className="contact-label">Email:</span>
              <span className="contact-text">contact@amplemind.in</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>© 2026 Amplemind. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
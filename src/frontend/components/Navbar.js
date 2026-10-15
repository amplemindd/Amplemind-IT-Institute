import React, { useState } from "react";
import '../css/Navbar.css';
import { Link, useLocation } from "react-router-dom"; 
import logo1 from '../images/Logo_New.png';

function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // To track active route

  // Function to close menu when a link is clicked on mobile
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div id="n-main">
        <div id="n-sub1">
          <Link to="/Home" onClick={closeMenu}>
            <img src={logo1} id="logo1" alt="Amplemind Logo" />
          </Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div id="menu-btn" onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </div>
        
        <div id="n-sub2" className={open ? "show" : ""}>
          <nav>
            <Link to={'/Home'} onClick={closeMenu} className={location.pathname === '/Home' ? 'active' : ''}>HOME</Link>
            <Link to={'/About'} onClick={closeMenu} className={location.pathname === '/About' ? 'active' : ''}>ABOUT</Link>
            <Link to={'/Courses'} onClick={closeMenu} className={location.pathname.includes('/Courses') ? 'active' : ''}>COURSES</Link> 
            <Link to={'/Contact'} onClick={closeMenu} className={location.pathname === '/Contact' ? 'active' : ''}>CONTACT</Link>
            <Link to={'/Testimonial'} onClick={closeMenu} className={location.pathname === '/Testimonial' ? 'active' : ''}>TESTIMONIALS</Link>
          </nav>
        </div>    
      </div>
    </>
  );
}

export default Nav;
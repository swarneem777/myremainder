import React from 'react';
import logo from './logo/calendar.png'; // Relative path from Navbar.js

const Navbar = () => {
  return (
    <nav>
      <div className="left-menu">
        <img src={logo} alt="Logo" className="logo" /> {/* Your logo */}
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </div>
      <div className="right-menu">
        <button className="login-signup-btn">Login/Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;

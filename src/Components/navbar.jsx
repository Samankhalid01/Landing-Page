import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/features" className="active">
            Features
          </Link>
        </li>
        <li>
          <Link to="/services" className="active">
            Services
          </Link>
        </li>
        <li>
          <Link to="/subscribe" className="active">
            Subscribe
          </Link>
        </li>
      </ul>
      {/* Additional navigation items */}
    </nav>
  );
}

export default Navbar;

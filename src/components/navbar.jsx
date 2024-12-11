import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaBars } from 'react-icons/fa';

import '../styles/navbar.css'; // Your custom CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the menu open or closed
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Closes the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink
        to="home"
        end
        className="navbar-brand"
        onClick={handleLinkClick}
      >
        Home
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        >
        <FaBars color="white" size={24} />
        </button>

      <div
        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="resume"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={handleLinkClick}
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={handleLinkClick}
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={handleLinkClick}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="recommendations"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={handleLinkClick}
            >
              Recommendations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

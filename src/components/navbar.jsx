import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink 
                        to="home"  // Relative path within /app
                        end 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
            <ul className="right-links">
                <li>
                    <NavLink 
                        to="resume"  // Relative path within /app
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="about"  // Relative path within /app
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="projects"  // Relative path within /app
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="contact"  // Relative path within /app
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

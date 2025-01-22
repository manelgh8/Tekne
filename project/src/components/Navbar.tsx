import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logt.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo}
                alt="TEKNE"
                className="h-10 w-17 object-contain"
              /> 
              <span className="text-xl font-semibold text-gray-900">EKNE </span>
            </NavLink>
          </div>
 
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
 
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
            <NavLink to="/goals" className="nav-link">
              Goals
            </NavLink>
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/inscriptions" className="nav-link">
              Inscriptions
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 pb-3">
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
            <NavLink to="/goals" className="nav-link">
              Goals
            </NavLink>
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/inscriptions" className="nav-link">
              Inscriptions
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

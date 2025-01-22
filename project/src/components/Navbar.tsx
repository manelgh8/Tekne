import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '~/assets/logt.png';

const Navbar = () => {
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
              <span className=" text-xl font-semibold text-gray-900">EKNE </span>
            </NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
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

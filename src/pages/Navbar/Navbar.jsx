import React from 'react'
import './../.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">To Do List</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarText" 
            aria-controls="navbarText" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  } 
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  } 
                  to="/details"
                >
                  Details
                </NavLink>
                <NavLink 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  } 
                  to="/tasklist"
                >
                My List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
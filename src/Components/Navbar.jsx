import React from 'react';
import logo from '../images/logo.png'; // Replace with your logo path


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        {/* Logo on the left */}
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="ms-2">NonStop</span> {/* Optional: Add text next to the logo */}
        </a>

        

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links on the right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto pushes links to the right */}
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="/">
              <b>
                Home
              </b>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/profile">
              <b>
                Profile
              </b>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/about">
              <b>
                About
              </b>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/contact">
              <b>
                Contact
              </b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
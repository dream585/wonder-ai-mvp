import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h4 className='mb-0'>LOGO</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-secondary px-4 mx-4"
                href="/register"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
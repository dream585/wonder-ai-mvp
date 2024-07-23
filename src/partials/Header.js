import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const role = props.role;

  const navHtml = (role) => {
    switch (role) {
      case "guest":
        return (
          <>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-secondary px-4 mx-4"
                href="/register"
              >
                Signup
              </a>
            </li>
          </>
        );
      case "client":
        return (
          <>
            <li className="nav-item">
              <a className="nav-link" href="/chat">
                Messages
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/job-posting">
                Post a Job
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/job-list">
                Job List
              </a>
            </li>
          </>
        );
      case "freelancer":
        return (
          <>
           <li className="nav-item">
              <a className="nav-link" href="/chat">
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>
          </>
        );
        break;
      default:
        return (
          <>
            
          </>
        );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img width="96" src="/images/logo.png" />
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
          <ul className="navbar-nav ms-auto">{navHtml(role)}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

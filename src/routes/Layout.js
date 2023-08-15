import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from '../images/logo.png'

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src = {Logo} alt="Logo" style={{ width: 40,height:40}} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Graph">
                Graph
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Simple">
                Simple
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Scientific">
                Scientific
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tempreture">
                Temperature
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Unit">
                Unit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Programming">
                Programming
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <div className="container mt-4">{children}</div>
      <footer className="bg-light text-center py-3">
        <p>&copy; {new Date().getFullYear()} Smart Calc </p>
      </footer>
    </div>
  );
};

export default Layout;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const getstLink = () => (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </Fragment>
  );
  const authLinks = () => (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={logout}>
          Log Out
        </a>
      </li>
    </Fragment>
  );
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {isAuthenticated ? authLinks() : getstLink()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);

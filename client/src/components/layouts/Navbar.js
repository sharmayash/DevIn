import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            DevConnector
          </Link>
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/developers">Developers</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
          <ul className="sidenav blue-grey darken-4" id="mobile-demo">
            <li>
              <Link to="/developers" className="white-text">
                Developers
              </Link>
            </li>
            <li>
              <Link to="/login" className="white-text">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="white-text">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;

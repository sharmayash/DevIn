import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper container">
          <a href="!#" className="brand-logo">
            DevConnector
          </a>
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="Developers.html">Developers</a>
            </li>
            <li>
              <a href="Login.html">Login</a>
            </li>
            <li>
              <a href="register.html">Sign up</a>
            </li>
          </ul>
          <ul className="sidenav blue-grey darken-4" id="mobile-demo">
            <li>
              <a href="Developers.html" className="white-text">
                Developers
              </a>
            </li>
            <li>
              <a href="Login.html" className="white-text">
                Login
              </a>
            </li>
            <li>
              <a href="register.html" className="white-text">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;

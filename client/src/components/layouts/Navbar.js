import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onlogOutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logOutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="!#" onClick={this.onlogOutClick.bind(this)}>
            Log Out
          </a>
        </li>
        <li>
          <img
            className="circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "50px", marginTop: "6px" }}
            title="You must have a gravatar connected to your email to display an image"
          />
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    );

    const sideAuthLinks = (
      <ul className="sidenav blue-grey darken-4" id="mobile-demo">
        <li className="center section">
          <img
            className="circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "100px" }}
            title="You must have a gravatar connected to your email to display an image"
          />
        </li>
        <li>
          <Link to="/developers" className="white-text">
            Developers
          </Link>
        </li>
        <li>
          <a
            href="!#"
            onClick={this.onlogOutClick.bind(this)}
            className="white-text"
          >
            Log Out
          </a>
        </li>
      </ul>
    );

    const sideGuestLinks = (
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
    );

    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            DevConnector
          </Link>
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          {isAuthenticated ? authLinks : guestLinks}
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/developers">Developers</Link>
            </li>
          </ul>
          {isAuthenticated ? sideAuthLinks : sideGuestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser, clearCurrentProfile }
)(Navbar);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="container">
            <div className="row">
              <div className="col s12 center white-text">
                <h1>Developer Connector</h1>
                <p>
                  Create a Devloper Profile/portfolio, share posts and get help
                  from other developers .
                </p>
                <Link to="/register" className="btn blue">
                  Sign up
                </Link>
                &nbsp;&nbsp;
                <Link to="/login" className="btn white black-text">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

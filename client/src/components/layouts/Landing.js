import React, { Component } from "react";

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
                <a href="!#" className="btn blue">Sign up</a>&nbsp;&nbsp;
                <a href="!#" className="btn white black-text">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

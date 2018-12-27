import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    return (
      <div className="login">
        <div className="container center">
          <h3>Log In</h3>
          <div className="row">
            <form
              onSubmit={this.onSubmit}
              method="POST"
              className="col s12 m12 l12"
            >
              <div className="card z-depth-5 blue-grey darken-4">
                <div className="card-content white-text">
                  <div className="row section">
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="validate"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="row section">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="validate"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row section">
                    <div className="card-action">
                      <button
                        className="btn waves-effect waves-light z-depth-5 hoverable blue-grey darken-2"
                        type="submit"
                        name="action"
                      >
                        Log In
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

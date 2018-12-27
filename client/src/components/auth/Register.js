import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/auth/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container center">
          <h3>Sign Up</h3>
          <p>Create Your DevConnector Account.</p>
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
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        className={classnames({
                          validate: errors.name
                        })}
                        placeholder="Name"
                      />
                      {errors.name && (
                        <span
                          className="helper-text red-text"
                          //   data-error="wrong"
                          //   data-success="right"
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className={classnames({
                          validate: errors.email
                        })}
                        placeholder="Email Address"
                      />
                      {errors.email && (
                        <span
                          className="helper-text red-text"
                          //   data-error="wrong"
                          //   data-success="right"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className={classnames({
                          validate: errors.password
                        })}
                        placeholder="Password"
                      />
                      {errors.password && (
                        <span
                          className="helper-text red-text"
                          //   data-error="wrong"
                          //   data-success="right"
                        >
                          {errors.password}
                        </span>
                      )}
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="password2"
                        type="password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        className={classnames({
                          validate: errors.password2
                        })}
                        placeholder="Confirm Password"
                      />
                      {errors.password2 && (
                        <span
                          className="helper-text red-text"
                          //   data-error="wrong"
                          //   data-success="right"
                        >
                          {errors.password2}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn waves-effect waves-light z-depth-5 hoverable blue-grey darken-2"
                      type="submit"
                      name="action"
                    >
                      Sign Up
                      <i className="material-icons right">send</i>
                    </button>
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
export default Register;

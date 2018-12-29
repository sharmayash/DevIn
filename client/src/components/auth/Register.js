import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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

    this.props.registerUser(newUser, this.props.history);
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

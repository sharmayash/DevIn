import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

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
                  </div>
                  <div className="row section">
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

Login.proptypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

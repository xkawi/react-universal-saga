import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  getEmailValue() {
    return this.refs.email.value;
  }

  getPasswordValue() {
    return this.refs.password.value;
  }

  handleSubmit() {
    this.props.loginUser(this.getEmailValue(), this.getPasswordValue());
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    if (this.props.isAuthenticated === true) {
      return (
        <div>
          <p>Authenticated!</p>
          <input onClick={this.handleLogout} type="submit" value="Logout" />
        </div>
      );
    }

    return (
      <div>
        <br />
        <input type="text" ref="email" placeholder="Email" /><p />
        <input type="password" ref="password" placeholder="Password" /><p />
        <input onClick={this.handleSubmit} type="submit" value="Login" /><p />
        <p>Not login yet</p>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

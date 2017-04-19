import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import { loginUser } from '../actions/index';

class Login extends Component {

  constructor(props) {
    super(props);

    const redirectRoute = this.props.location.query.next || '/';
    this.state = {
      username:  '',
      password: '',
      redirectTo: redirectRoute
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(user, this.state.redirectTo);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value })
  }

  handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Log In</h2>
          <form onSubmit={this.login}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.handleUsername} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handlePassword} />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>
        </div>
      </div>
    );
  }

}

reactMixin(Login.prototype, LinkedStateMixin);

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { loginUser })(Login);

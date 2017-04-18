import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { login } from '../actions/index';

class Login extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    const user = {
      username: $('#username').val(),
      password: $('#password').val()
    }
    this.props.login(user);
    hashHistory.push('/?status=success');
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Log In</h2>
          <form onSubmit={this.login}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    authActions: state.authActions.authActions
  }
}

export default connect(mapStateToProps, { login })(Login);

import React, { Component } from 'react';

class SignIn extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Sign In</h2>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;

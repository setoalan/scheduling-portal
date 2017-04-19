import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/index';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.props.logoutUser();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Log Out</h2>
          <div className="alert alert-success" role="alert">
            You successfully logged out.
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(Logout);

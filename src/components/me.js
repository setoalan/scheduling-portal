import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { fetchUser } from '../actions/index';

class Me extends Component {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1>Me Page</h1>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    patients: state.patients.patients,
    authenticated: state.authenticated.authenticated
  }
}

export default connect(mapStateToProps, { fetchUser })(Me);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { fetchPatients } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.fetchPatients();
  }

  render() {
    console.log(this.props.patients);
    return (
      <Row>
        <Col xs={12}>
          <h1>Home</h1>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { patients: state.patients.all }
}

export default connect(mapStateToProps, { fetchPatients })(Home);

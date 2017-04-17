import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'react-bootstrap';

import { fetchPatients } from '../actions/index';

class Users extends Component {

  componentWillMount() {
    this.props.fetchPatients();
  }

  renderPatients() {
    return this.props.patients.map((patient) => {
      return (
        <tr key={patient._id}>
          <td>{patient.name}</td>
          <td>{patient.age}</td>
          <td>{patient.emailAddress}</td>
          <td>{patient.mailingAddress}</td>
          <td>{patient.phoneNumber}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email Address</th>
                <th>Mailing Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {this.renderPatients()}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { patients: state.patients.patients }
}

export default connect(mapStateToProps, { fetchPatients })(Users);

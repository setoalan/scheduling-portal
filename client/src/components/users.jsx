import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
          <td><Link to={'/user/'+patient._id}><button type="button" className="btn btn-info">View</button></Link></td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Patients</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email Address</th>
                <th>Mailing Address</th>
                <th>Phone Number</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {this.renderPatients()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients.patients
  }
}

export default connect(mapStateToProps, { fetchPatients })(Users);

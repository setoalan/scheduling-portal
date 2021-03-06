import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { fetchPatients } from '../actions/index';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  componentWillMount() {
    this.props.fetchPatients();
  }

  renderPatients() {
    return this.props.patients
    .filter((patient) => { // search feature
      if (this.state.term === '') return true;
      return (patient.name.toLowerCase().includes(this.state.term.toLowerCase()));
    })
    .map((patient) => {
      return (
        <tr key={patient._id}>
          <td>{patient.name}</td>
          <td>{patient.age}</td>
          <td>{patient.emailAddress}</td>
          <td>{patient.mailingAddress}</td>
          <td>{patient.phoneNumber}</td>
          <td><Link to={'/user/' + patient._id}><button type="button" className="btn btn-info btn-xs">View</button></Link></td>
        </tr>
      )
    });
  }

  onInputChange(term) {
    this.setState({ term });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Patients</h2>
          <div className="form-group">
            <input
              type="text"
              onChange={event => this.onInputChange(event.target.value)}
              className="form-control"placeholder="Search"
              value={this.state.term} />
          </div>
          <div className="table-responsive">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients.patients,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchPatients })(Users);

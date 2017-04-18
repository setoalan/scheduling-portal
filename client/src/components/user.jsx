import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPatient } from '../actions/index';

class User extends Component {

  componentWillMount() {
    this.props.fetchPatient(this.props.params.user_id);
  }

  renderAppointments() {
    return this.props.patient.appointments.map((appointment) => {
      return (
        <tr key={appointment._id}>
          <td>{appointment.date}</td>
          <td>{appointment.subject}</td>
          <td>{appointment.message}</td>
          <td>{appointment.doctor.name}</td>
          <td>{appointment.patient.name}</td>
          <td>{appointment.status}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>{this.props.patient.name}</h2>
          <h4>Age <small>{this.props.patient.age}</small></h4>
          <h4>Email Address <small>{this.props.patient.emailAddress}</small></h4>
          <h4>Mailing Address <small>{this.props.patient.mailingAddress}</small></h4>
          <h4>Phone Number <small>{this.props.patient.phoneNumber}</small></h4>
          <h4>Appointments</h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderAppointments()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient
  }
}

export default connect(mapStateToProps, { fetchPatient })(User);

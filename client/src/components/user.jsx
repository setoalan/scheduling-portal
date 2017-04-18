import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchPatient, updateAppointment } from '../actions/index';

class User extends Component {

  constructor(props) {
    super(props);

    this.updateStatus = this.updateStatus.bind(this);
    this.isOldDate = this.isOldDate.bind(this);
  }

  componentWillMount() {
    this.props.fetchPatient(this.props.params.user_id);
  }

  updateStatus(status, appointment) {
    appointment.status = status;
    this.props.updateAppointment(appointment);
  }

  isOldDate(date) {
    return moment(date) < moment.now();
  }

  renderAppointments() {
    return this.props.patient.appointments.map((appointment) => {
      return (
        <tr key={appointment._id} className={(this.isOldDate(appointment.date)) ? 'table-disabled': ''}>
          <td>{appointment.date}</td>
          <td>{appointment.subject}</td>
          <td>{appointment.message}</td>
          <td>{appointment.doctor.name}</td>
          <td>{appointment.patient.name}</td>
          <td>
            <div className="btn-group" role="group">
              <button
                type="button"
                onClick={() => this.updateStatus('active', appointment)}
                className={"btn btn-success btn-xs" + (appointment.status === 'active' ? ' active' : '')}>
                Active
              </button>
              <button
                type="button"
                onClick={() => this.updateStatus('pending', appointment)}
                className={"btn btn-info btn-xs" + (appointment.status === 'pending' ? ' active' : '')}>
                Pending
              </button>
              <button
                type="button"
                onClick={() => this.updateStatus('cancel', appointment)}
                className={"btn btn-danger btn-xs" + (appointment.status === 'cancel' ? ' active' : '')}>
                Cancel
              </button>
            </div>
          </td>
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
          <table className="table table-hover">
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
    appointment: state.appointment.appointment,
    patient: state.patient.patient
  }
}

export default connect(mapStateToProps, { fetchPatient, updateAppointment })(User);

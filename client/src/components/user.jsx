import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchPatient, updateAppointment, uploadFile } from '../actions/index';

class User extends Component {

  constructor(props) {
    super(props);

    this.updateStatusClick = this.updateStatusClick.bind(this);
    this.cancelAppointmentDoctor= this.cancelAppointmentDoctor.bind(this);
    this.isOldDate = this.isOldDate.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillMount() {
    this.setState({ appointment: {} });

    if (this.props.params.userId === 'me') {
      if (this.props.auth.isAuthenticated) {
        this.props.fetchPatient(this.props.auth._id);
      } else {
        hashHistory.push('/users/login');
      }
    } else {
      this.props.fetchPatient(this.props.params.userId);
    }
  }

  componentWillUpdate() {
    if (this.props.location.pathname === '/user/me' && this.props.location.action === 'PUSH') {
      this.props.fetchPatient(this.props.auth._id);
    }
  }

  updateStatusClick(status, appointment) {
    if (this.props.auth.doctor) {
      this.setState({ appointment });
      if (status != appointment.status) {
        if (status === 'cancel') {
          appointment.status = status;
          this.props.updateAppointment(appointment);
        }
      }
    } else {
      if (status != appointment.status) {
        if (status === 'cancel') {
          appointment.status = status;
          this.props.updateAppointment(appointment);
        }
      }
    }
  }

  updateStatusButton(status, appointment) {
    if (status === 'active') {
      if (appointment.status === 'active') {
        return ' btn-success disabled';
      } else if (appointment.status === 'pending' && this.props.auth.doctor) {
        if (this.props.auth.doctor) {
          return '';
        } else {
          return ' disabled';
        }
      }
      return ' disabled';
    } else {
      if (appointment.status === 'cancel') {
        return ' btn-danger disabled';
      } else {
        return '';
      }
    }
  }

cancelAppointmentDoctor() {
  this.state.appointment.message = $('#message').val();
  this.state.appointment.status = 'cancel';
  this.props.updateAppointment(this.state.appointment);
  $('#doctorModal').modal('hide');
}

  isOldDate(date) {
    return moment(date) < moment.now();
  }

  uploadFile() {
    this.props.uploadFile();
  }

  renderAppointments() {
    return this.props.patient.appointments.map((appointment) => {
      const date = moment(appointment.date).format('M/D/YY HH:mm');
      return (
        <tr key={appointment._id} className={(this.isOldDate(appointment.date)) ? 'table-disabled': ''}>
          <td className="td-date">{date}</td>
          <td>{appointment.subject}</td>
          <td>{appointment.message}</td>
          <td>{appointment.doctor.name}</td>
          <td>{appointment.patient.name}</td>
          <td>
            <div className="btn-group" role="group">
              <button
                type="button"
                onClick={() => this.updateStatusClick('active', appointment)}
                className={"btn btn-default btn-xs" + (this.updateStatusButton('active', appointment))}>
                Active
              </button>
              <button
                type="button"
                className={"btn btn-default btn-xs disabled" + (appointment.status === 'pending' ? ' btn-info' : '')}>
                Pending
              </button>
              <button
                type="button"
                onClick={() => this.updateStatusClick('cancel', appointment)}
                className={"btn btn-default btn-xs" + (this.updateStatusButton('cancel', appointment))}
                data-toggle="modal"
                data-target={(this.props.auth.doctor) ? '#doctorModal' : ''}>
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
          <div className="modal fade" id="doctorModal" tabIndex="-1" role="dialog" aria-labelledby="doctorModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Explanation for Cancelation</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="3" className="form-control" id="message" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger" onClick={() => this.cancelAppointmentDoctor()}>Update/Cancel Appointment</button>
                </div>
              </div>
            </div>
          </div>
          <h2 id="name">{this.props.patient.name}</h2>
          {
            this.props.location.pathname !== '/user/me' &&
            <Link to={'/user/' + this.props.patient._id + "/appointment"}>
              <button type="button" className="btn btn-info">
                Make Appointment with Patient
              </button>
            </Link>
          }
          {
            this.props.location.pathname === '/user/me' &&
            !this.props.auth.doctor &&
            <Link to={'/user/' + this.props.patient._id + "/appointment"}>
              <button type="button" className="btn btn-info">
                Make Appointment
              </button>
            </Link>
          }
          <h4>Age <small>{this.props.patient.age}</small></h4>
          <h4>Email Address <small>{this.props.patient.emailAddress}</small></h4>
          <h4>Mailing Address <small>{this.props.patient.mailingAddress}</small></h4>
          <h4>Phone Number <small>{this.props.patient.phoneNumber}</small></h4>
          <h4>Appointments</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Doc's Message</th>
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
          <form>
            <div className="form-group">
              <h4>Upload file</h4>
              <div className="file-group">
                <button
                  type="submit"
                  onClick={() => this.uploadFile()}
                  className="btn btn-primary btn-xs">Upload</button>
                <input type="file" id="file" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointment.appointment,
    patient: state.patient.patient,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchPatient, updateAppointment, uploadFile })(User);

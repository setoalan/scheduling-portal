import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';

import { fetchDoctors, createAppointment } from '../actions/index';
import '../../dist/css/react-datetime.css';

class Appointment extends Component {

  constructor(props) {
    super(props);

    this.makeAppointment = this.makeAppointment.bind(this);
  }

  componentWillMount() {
    this.props.fetchDoctors();
  }

  makeAppointment(e) {
    e.preventDefault();
    const appointment = {
      date: $('.date input').val(),
      subject: $('#subject').val(),
      patient: $('#patient').val(),
      doctor: $('#doctor').val(),
    }
    this.props.createAppointment(appointment);
    hashHistory.push('/?status=success');
  }

  renderDoctors() {
    return this.props.doctors.map((doctor) => {
      return <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Make Appointment</h2>
          <form onSubmit={this.makeAppointment}>
            <div className="form-group">
              <label>Date and Time</label>
              <Datetime
                className="date"
                isValidDate={(date) => date.isAfter(Datetime.moment().subtract(1, 'day'))} />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="form-group">
              <label>Doctor</label>
              <select className="form-control" id="doctor">
                {this.renderDoctors()}
              </select>
            </div>
            <div className="form-group hidden">
              <input type="text" className="form-control" id="patient" value={this.props.params.userId} readOnly />
            </div>
            <button type="submit" className="btn btn-primary">Request Appointment</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors.doctors,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchDoctors, createAppointment })(Appointment);

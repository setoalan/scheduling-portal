import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';

import { createAppointment } from '../actions/index';
import '../../dist/css/react-datetime.css';

class Appointment extends Component {

  constructor(props) {
    super(props);

    this.makeAppointment = this.makeAppointment.bind(this);
  }

  makeAppointment(e) {
    e.preventDefault();
    const appointment = {
      date: $('.date input').val(),
      subject: $('#subject').val(),
      message: $('#message').val(),
      patient: $('#patient').val(),
      doctor: $('#doctor').val(),
    }
    this.props.createAppointment(appointment);
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
              <label>Message</label>
              <textarea rows="3" className="form-control" id="message" />
            </div>
            <div className="form-group hidden">
              <input type="text" className="form-control" id="patient" value="58f3a7bfb8ae7415fed4c526"/>
            </div>
            <div className="form-group hidden">
              <input type="text" className="form-control" id="doctor" value="58f3a7f5b8ae7415fed4c528" />
            </div>
            <button type="submit" className="btn btn-primary">Request Appointment</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { createAppointment })(Appointment);

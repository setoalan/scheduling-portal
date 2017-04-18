import React, { Component } from 'react';

class User extends Component {

  renderAppointments() {
    return this.props.appointments.map((appointment) => {
      return (
        <tr key={appointment._id}>
          <td>{appointment.date}</td>
          <td>{appointment.subject}</td>
          <td>{appointment.message}</td>
          <td>{appointment.doctor}</td>
          <td>{appointment.patient}</td>
          <td>{appointment.status}</td>
        </tr>
      )
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>User</h2>
          <h5>Name</h5>
          <h5>Age</h5>
          <h5>Email Address</h5>
          <h5>Mailing Address</h5>
          <h5>Phone Number</h5>
          <h5>Appointments</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {false && this.renderAppointments()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;

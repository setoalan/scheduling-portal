import React, { Component } from 'react';
import Datetime from 'react-datetime';

import '../../dist/css/react-datetime.css';

class Appointments extends Component {

  isValidDate(date) {

  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Make Appointment</h2>
          <form>
            <div className="form-group">
              <label>Date and Time</label>
              <Datetime
                isValidDate={(date) => date.isAfter(Datetime.moment().subtract(1, 'day'))}
                name="date" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" name="subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="3" className="form-control" name="message" />
            </div>
            <div className="form-group hidden">
              <input type="text" className="form-control" name="patient" />
            </div>
            <div className="form-group hidden">
              <input type="text" className="form-control" placeholder="token" />
            </div>
            <button type="submit" className="btn btn-primary">Request Appointment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Appointments;

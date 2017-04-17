import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { logIn } from '../actions/index';

class Login extends Component {

  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
  }

  logIn(e) {
    e.preventDefault();
    this.props.logIn();
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form onSubmit={this.logIn}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                name="password"
              />
            </FormGroup>
            <Button
              bsStyle="primary"
              type="submit">
              Log in
            </Button>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { patients: state.patients.patients }
}

export default connect(mapStateToProps, { logIn })(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { logIn } from '../actions/index';

class Login extends Component {
  logIn(e) {
    e.preventDefault();
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    this.props.logIn(username, password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated !== undefined) {
      if (nextProps.authenticated.doctor) {
        browserHistory.push('/users');
      } else {
        browserHistory.push('/');
      }
    }
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form onSubmit={this.logIn.bind(this)}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                name="username"
                ref="username"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                name="password"
                ref="password"
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
  return { authenticated: state.authenticated.authenticated }
}

export default connect(mapStateToProps, { logIn })(Login);

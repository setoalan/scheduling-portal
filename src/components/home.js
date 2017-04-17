import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Link to={'users/login'}>
            <Button bsStyle="primary">Log In</Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Home;

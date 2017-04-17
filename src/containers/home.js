import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          This is the homepage.
        </Col>
      </Row>
    );
  }
}

export default Home;

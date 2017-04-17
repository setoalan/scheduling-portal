import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1>Tempus Code Challenge</h1>
          <hr />
        </Col>
      </Row>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from '../containers/header';

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
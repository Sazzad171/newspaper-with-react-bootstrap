import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import LatestNews from './right_column_items/LatestNews';

class FullRightCol extends Component {
  render() {
    return (
        <Col lg="4" md="3">
          <LatestNews/>
        </Col>
    );
  }
}

export default FullRightCol;

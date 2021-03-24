import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import AllCategoryTab from './left_colum_items/AllCategoryTab';

class FullLeftCol extends Component {
  render() {
    return (
        <Col lg="8">
            <AllCategoryTab/>
        </Col>
    );
  }
}

export default FullLeftCol;

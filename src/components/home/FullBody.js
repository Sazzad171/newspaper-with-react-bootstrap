import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import FullLeftCol from './full_body/FullLeftCol';
import FullRightCol from './full_body/FullRighCol';

class FullBody extends Component {
  render() {
    return (
      <section>
          <Container fluid>
            <Row>
                <FullLeftCol/>
                <FullRightCol/>
            </Row>
          </Container>
      </section>
    );
  }
}

export default FullBody;

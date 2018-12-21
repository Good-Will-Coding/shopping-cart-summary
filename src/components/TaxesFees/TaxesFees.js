import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
      <Col md={6}><p>Est. taxes & fees (Based on NNY O9N)</p></Col>
      <Col md={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    )
  }
}

export default TaxesFees;
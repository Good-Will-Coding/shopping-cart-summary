import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://media.4rgos.it/i/Argos/8086923_R_Z001A?$Web$&$DefaultPDP410$"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Asus C202 11.6 Inch Celeron 2GB 16GB Chromebook - Blue/White
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">
                        {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}> Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;

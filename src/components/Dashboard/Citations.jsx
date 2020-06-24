import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Citations extends Component {
  render() {
    return (
      <Row className="p-3">
        <Col>
          <h2 className="text-left">Citations du jours</h2>
          <p className="text-left">
            Le bonheur n'est pas toujours dans un ciel éternellement bleu, mais
            dans les choses les plus simples de la vie.
          </p>
          <p className="text-left">--Confucius</p>
        </Col>
      </Row>
    );
  }
}

export default Citations;

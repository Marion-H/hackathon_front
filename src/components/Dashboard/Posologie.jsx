import React from "react";
import { Table, Container, Row, Col } from "reactstrap";

const MyTable = (props) => {
  return (
    <Container>
      <Row>
        <Col
          xs={{ size: "12", offset: 0 }}
          sm={{ size: "12", offset: 0 }}
          md={{ size: "8", offset: 2 }}
          lg={{ size: "8", offset: 2 }}
        >
          <Table bordered>
            <thead>
              <td>Nom</td>
              <td>Posologie</td>
            </thead>
            <tbody>
              <td>Diabete</td>
              <td>
                La dose d'insuline conseillée au départ est de 8 unités, à
                augmenter par coup de deux unités à intervalle de 24 à 72 heures
                en fonction des glycémies à jeun du lendemain. Le but visé étant
                des glycémies idéalement entre 4,5 et 6 mmol/l, dans tous les
                cas ne dépassant pas 7 mmol/l.
              </td>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable;

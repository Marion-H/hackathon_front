import React from "react";
import { Table, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Styles from "./rewards.module.css";

const MyTable = (props) => {
  return (
    <Container style={{ marginTop: 15 }}>
      <Link className={Styles.linkStyle} to="/dashboard">
        <FaArrowCircleLeft />
      </Link>{" "}
      <Row>
        <Col
          xs={{ size: "12", offset: 0 }}
          sm={{ size: "12", offset: 0 }}
          md={{ size: "8", offset: 2 }}
          lg={{ size: "8", offset: 2 }}
        >
          <Col>
            <h2 className="text-center">Prescription</h2>
            <p className="text-left"></p>
          </Col>
          <Table bordered>
            <thead>
              <td>
                <tr>Nom</tr>
              </td>
              <td>
                <tr>Posologie</tr>
              </td>
            </thead>
            <tbody>
              <td>
                <tr>doliprane</tr>
              </td>
              <td>
                <tr>
                  La dose d'insuline conseillée au départ est de 8 unités, à
                  augmenter par coup de deux unités à intervalle de 24 à 72
                  heures en fonction des glycémies à jeun du lendemain. Le but
                  visé étant des glycémies idéalement entre 4,5 et 6 mmol/l,
                  dans tous les cas ne dépassant pas 7 mmol/l.
                </tr>
              </td>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable;

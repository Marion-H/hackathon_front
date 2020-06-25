import React from "react";
import {
  Progress,
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function Birthday() {
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Il rest moins de la moitié!
      </h6>
      <Progress animated color="info" value={70} />
      <Fade right>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel age avez vous?
            </h3>
          </Col>
        </Row>
        <FormGroup>
          <Label for="date">Entrez votre date de naissance</Label>
          <Input type="date" name="date"></Input>
        </FormGroup>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <Redirect to="/pathologie">
              <button className={style.validate}>Validez</button>
            </Redirect>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

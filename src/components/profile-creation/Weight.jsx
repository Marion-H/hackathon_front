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
import { Link } from "react-router-dom";

import Zoom from "react-reveal/Zoom";
import style from "./Sex.module.css";

export default function Weight() {
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Encore un petit effort.
      </h6>
      <Progress animated color="warning" value={40} />
      <Row>
        <Col>
          <Zoom>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel est votre poids?
            </h3>
          </Zoom>
        </Col>
      </Row>
      <FormGroup>
        <Label for="weight">Entrez votre poids</Label>
        <Input type="number" name="weight"></Input>
      </FormGroup>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
          <Link to="/age">
            <button className={style.validate}>Validez</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

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

export default function Birthday() {
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Il rest moins de la moitié!
      </h6>
      <Progress animated color="info" value={70} />
      <Row>
        <Col>
          <Zoom>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel age avez vous?
            </h3>
          </Zoom>
        </Col>
      </Row>
      <FormGroup>
        <Label for="date">Entrez votre date de naissance</Label>
        <Input type="date" name="date"></Input>
      </FormGroup>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
          <Link to="/pathologie">
            <button className={style.validate}>Validez</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useState } from "react";
import {
  Progress,
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function Birthday() {
  const [canGoNext, setcanGoNext] = useState(false);
  if (canGoNext) {
    return <Redirect to="/pathologie" />;
  }
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <h6 style={{ textAlign: "center"}}>
            Il reste moins de la moitié!
          </h6>
          <Progress animated color="info" value={70} />
          <Fade right>
            <Container>
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
                    <button className={style.validate}>Validez</button>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

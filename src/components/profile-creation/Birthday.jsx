import React, { useState } from "react";
import Axios from "axios";
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
  const [canGoNext, setCanGoNext] = useState(false);
  const [date, setDate] = useState();

  const putDate = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}`, {
        birthday: date,
      });
      setCanGoNext(true);
    } catch (err) {
      console.log(err);
    }
  };
  if (canGoNext) {
    return <Redirect to="/pathologie" />;
  }
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Il rest moins de la moitié!
      </h6>
      <Progress animated color="info" value={60} />
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
          <Input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          ></Input>
        </FormGroup>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <button className={style.validate} onClick={putDate}>
              Validez
            </button>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

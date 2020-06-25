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

import Zoom from "react-reveal/Zoom";
import style from "./Sex.module.css";
import Axios from "axios";

export default function Weight() {
  const [weight, setWeight] = useState("");

  const [nextPage, setNextPage] = useState("");

  const putWeight = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}`, {
        weight,
      });
      setNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (nextPage) {
    return <Redirect to="/date" />;
  }

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
        <Input
          type="number"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Kg"
        />
      </FormGroup>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
          <button onClick={putWeight} className={style.validate}>
            Validez
          </button>
        </Col>
      </Row>
    </Container>
  );
}

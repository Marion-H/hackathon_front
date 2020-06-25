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
import styles from "./profile.module.css";
import logo_simple from "../../img/logo_squicker.svg";

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
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={{ size: 2, offset: 5 }}>
          <img width="40%" src={logo_simple} alt="logo squicker" />
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <h6 style={{ textAlign: "center" }}>Il reste moins de la moitié!</h6>
          <Progress
            className={styles.progressBar}
            animated
            color="info"
            value={60}
          />

          <Fade right>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center", margin: "20%" }}>
                  Quel age avez vous ?
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
            <Row className="my-5">
              <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                <button className={style.generalButton} onClick={putDate}>
                  Validez
                </button>
              </Col>
            </Row>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

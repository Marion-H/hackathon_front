import React, { useState } from "react";
import Fade from "react-reveal/Fade";
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

import Axios from "axios";
import style from "../../profile-creation/Sex.module.css";
import styles from "./healthBook.module.css";
import logo_simple from "../../../img/logo_squicker.svg";

export default function HealthBookWeight(props) {
  const [weight, setWeight] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putWeight = async (e) => {
    e.preventDefault();
    try {
      const DataUuid = window.sessionStorage.getItem("DataUuid");
      await Axios.put(`http://localhost:8000/dailyDatas/${DataUuid}`, {
        weight,
      });
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}/click`);
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/HealthBookMood" />;
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
          <Fade>
            <Container style={{ marginTop: "20px" }}>
              <Progress
                className={styles.progressBar}
                animated
                color="danger"
                value={30}
              />
              <Fade right>
                <Row>
                  <Col>
                    <h3 style={{ textAlign: "center", margin: "20%" }}>
                      Quel est votre poids?
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="weight">Entrez votre poids</Label>
                      <Input
                        type="number"
                        name="weight"
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Kg"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="m-4">
                  <Col>
                    <button
                      onClick={putWeight}
                      className={styles.generalButton}
                    >
                      Validez
                    </button>
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

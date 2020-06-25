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
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/" />;
  }

  return (
    <Fade>
      <Container style={{ marginTop: "20px" }}>
        <Progress animated color="danger" value={30} />
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
          <Row>
            <Col>
              <button onClick={putWeight} className={style.validate}>
                Validez
              </button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Fade>
  );
}

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

export default function HealthBook(props) {
  const [bloodSugar, setBloodSugar] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putBloodSugar = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      const res = await Axios.post(`http://localhost:8000/dailyDatas`, {
        bloodSugar,
        PatientUuid: uuid,
      });
      await Axios.put(`http://localhost:8000/patients/${uuid}/click`)
      window.sessionStorage.setItem("DataUuid", res.data.uuid);
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/HealthBookWeight" />;
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <Progress animated color="danger" value={10} />

          <Fade right>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center", margin: "20%" }}>
                  Quel votre taux de glycemie?
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="weight">Entrez votre taux de glycémie</Label>
                  <Input
                    type="number"
                    name="weight"
                    onChange={(e) => setBloodSugar(e.target.value)}
                    placeholder="g/L"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                <button onClick={putBloodSugar} className={style.validate}>
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

import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Progress, Row, Col, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import style from "../profile-creation/Sex.module.css";

export default function Dashboard(props) {
  const [bloodSugar, setBloodSugar] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putSex = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      await Axios.post(`http://localhost:8000/dailyDatas`, {
        bloodSugar,
        PatientUuid: uuid,
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
            <Col
              xs={{ size: "3", offset: 0 }}
              sm={{ size: "3", offset: 0 }}
              md={{ size: "3", offset: 0 }}
              lg={{ size: "3", offset: 0 }}
            >
              <button
                onClick={() => setBloodSugar(1)}
                className={bloodSugar === 1 ? style.buttonOn : style.buttonOff}
              >{`Moins de 1.00 <`}</button>
            </Col>
            <Col>
              <button
                onClick={() => setBloodSugar(2)}
                className={bloodSugar === 2 ? style.buttonOn : style.buttonOff}
              >{`Entre 1.00 et 1.10`}</button>
            </Col>
            <Col>
              <button
                onClick={() => setBloodSugar(3)}
                className={bloodSugar === 3 ? style.buttonOn : style.buttonOff}
              >{`Entre 1.10 et 1.20`}</button>
            </Col>
            <Col>
              <button
                onClick={() => setBloodSugar(4)}
                className={bloodSugar === 4 ? style.buttonOn : style.buttonOff}
              >{`Entre 1.20 et 1.30`}</button>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
              <button onClick={putSex} className={style.validate}>
                Validez
              </button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Fade>
  );
}

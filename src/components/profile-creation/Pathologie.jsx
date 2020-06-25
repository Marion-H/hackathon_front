import React, { useState } from "react";
import { Progress, Row, Col, Container } from "reactstrap";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default function Pathologie() {
  const [pathology, setPathology] = useState("");

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putPathology = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}`, {
        pathology,
      });
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/doc-select" />;
  }

  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Ca y est, plus que celle la
      </h6>
      <Progress animated color="success" value={100} />
      <Fade right>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel pathologie avez vous?
            </h3>
          </Col>
        </Row>

        <button
          style={{ width: "45%", marginRight: "5vw" }}
          onClick={() => setPathology("Diabete")}
          className={pathology === "Diabete" ? style.buttonOn : style.buttonOff}
        >
          Diabète
        </button>

        <button
          style={{ width: "45%", marginRight: "5vw" }}
          onClick={() => setPathology("Hypertension")}
          className={
            pathology === "Hypertension" ? style.buttonOn : style.buttonOff
          }
        >
          Hypertension
        </button>

        <button
          style={{ width: "45%", marginRight: "5vw" }}
          onClick={() => setPathology("Apnée du sommeil")}
          className={
            pathology === "Apnée du sommeil" ? style.buttonOn : style.buttonOff
          }
        >
          Apnée du sommeil
        </button>

        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <button onClick={putPathology} className={style.validate}>
              Validez
            </button>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

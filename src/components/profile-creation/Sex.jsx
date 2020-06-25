import React, { useState } from "react";
import { Progress, Row, Col, Container } from "reactstrap";
import style from "./Sex.module.css";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Fade } from "react-reveal";

export default function Sex() {
  const [gender, setGender] = useState("");

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putSex = async (e) => {
    e.preventDefault();
    try {
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}`, {
        gender,
      });
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/weight" />;
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <h6 style={{ textAlign: "center" }}>Cela ne sera pas long.</h6>
          <Progress animated color="danger" value={10} />
          <Fade right>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center", margin: "100px 0" }}>
                  Quel votre sexe?
                </h3>
              </Col>
            </Row>
            <Row>
              <Col lg={{ size: 6, offset: 0 }}>
                <button
                  style={{ width: "100%" }}
                  onClick={() => setGender("Homme")}
                  className={
                    gender === "Homme" ? style.buttonOn : style.buttonOff
                  }
                >
                  Homme
                </button>
              </Col>

              <Col lg={{ size: 6, offset: 0 }}>
                <button
                  style={{ width: "100%" }}
                  onClick={() => setGender("Femme")}
                  className={
                    gender === "Femme" ? style.buttonOn : style.buttonOff
                  }
                >
                  Femme
                </button>
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
        </Col>
      </Row>
    </Container>
  );
}

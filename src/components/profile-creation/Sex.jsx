import React, { useState } from "react";
import { Progress, Row, Col, Container } from "reactstrap";
import style from "./Sex.module.css";
import { Redirect } from "react-router-dom";
import { Fade } from "react-reveal";
import Axios from "axios";

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
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Cela ne sera pas long.
      </h6>
      <Progress animated color="danger" value={10} />
      <Fade right>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel votre sexe?
            </h3>
          </Col>
        </Row>

        <button
          style={{ width: "45%", marginRight: "5vw" }}
          onClick={() => setGender("Homme")}
          className={(gender=== "Homme") ? style.buttonOn : style.buttonOff}
        >
          Homme
        </button>
        <button
          style={{ width: "45%" }}
          onClick={() => setGender("Femme")}
          className={(gender==="Femme") ? style.buttonOn : style.buttonOff }
        >
          Femme
        </button>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <button onClick={putSex} className={style.validate}>
              Validez
            </button>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

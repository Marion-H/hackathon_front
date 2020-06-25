import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Progress, Row, Col, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import { GiBanana } from "react-icons/gi";
import { GiBananaBunch } from "react-icons/gi";
import { GiBananaPeeled } from "react-icons/gi";

import Axios from "axios";
import style from "../../profile-creation/Sex.module.css";

export default function HealthBookAppetite(props) {
  const [appetite, setAppetite] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putAppetite = async (e) => {
    e.preventDefault();
    try {
      const DataUuid = window.sessionStorage.getItem("DataUuid");
      await Axios.put(`http://localhost:8000/dailyDatas/${DataUuid}`, {
        appetite,
      });
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}/click`)
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fade>
      <Container style={{ marginTop: "20px" }}>
        <Progress animated color="danger" value={50} />
        <Fade right>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center", margin: "20%" }}>
                Avez-vous de l'appétit aujourd'hui ?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {appetite === 1 ? (
                <GiBanana
                  size={80}
                  onClick={() => setAppetite(1)}
                  color={"red"}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <GiBanana
                  size={80}
                  onClick={() => setAppetite(1)}
                  color={"red"}
                />
              )}
            </Col>{" "}
            <Col>
              {appetite === 2 ? (
                <GiBananaPeeled
                  onClick={() => setAppetite(2)}
                  size={80}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <GiBananaPeeled onClick={() => setAppetite(2)} size={80} />
              )}
            </Col>
            <Col>
              {appetite === 3 ? (
                <GiBananaBunch
                  onClick={() => setAppetite(3)}
                  size={73}
                  color={"green"}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <GiBananaBunch
                  onClick={() => setAppetite(3)}
                  size={73}
                  color={"green"}
                />
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <button onClick={putAppetite} className={style.validate}>
                Validez
              </button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Fade>
  );
}

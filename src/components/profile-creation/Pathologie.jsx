import React, { useState } from "react";
import { Progress, Row, Col, Container } from "reactstrap";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./profile.module.css";
import logo_simple from "../../img/logo_squicker.svg";

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
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={{ size: 2, offset: 5 }}>
          <img width="40%" src={logo_simple} alt="logo squicker" />
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <h6 style={{ textAlign: "center" }}>Ca y est, plus que celle la</h6>
          <Progress
            className={styles.progressBar}
            animated
            color="success"
            value={100}
          />

          <Fade right>
            <Container>
              <Fade right>
                <Row>
                  <Col>
                    <h3 style={{ textAlign: "center", margin: "5%" }}>
                      Quel pathologie avez vous?
                    </h3>
                  </Col>
                </Row>

                <Col lg={{ size: 12, offset: 0 }}>
                  <button
                    style={{ width: "80%", padding: "10px 30px" }}
                    onClick={() => setPathology("Diabete")}
                    className={
                      pathology === "Diabete" ? style.buttonOn : style.buttonOff
                    }
                  >
                    Diabète
                  </button>
                </Col>
                <Col lg={{ size: 12, offset: 0 }}>
                  <button
                    style={{
                      width: "80%",
                      marginTop: "20px",
                      padding: "10px 30px",
                    }}
                    onClick={() => setPathology("Hypertension")}
                    className={
                      pathology === "Hypertension"
                        ? style.buttonOn
                        : style.buttonOff
                    }
                  >
                    Hypertension
                  </button>
                </Col>

                <Col lg={{ size: 12, offset: 0 }}>
                  <button
                    style={{
                      width: "80%",
                      marginTop: "20px",
                      padding: "10px 30px",
                    }}
                    onClick={() => setPathology("Apnée du sommeil")}
                    className={
                      pathology === "Apnée du sommeil"
                        ? style.buttonOn
                        : style.buttonOff
                    }
                  >
                    Apnée du sommeil
                  </button>
                </Col>

                <Row className="my-5">
                  <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                    <button
                      onClick={putPathology}
                      className={style.generalButton}
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

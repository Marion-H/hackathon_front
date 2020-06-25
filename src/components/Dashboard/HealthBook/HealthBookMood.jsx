import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { IoMdSad } from "react-icons/io";
import { RiEmotionNormalLine } from "react-icons/ri";
import { FiSmile } from "react-icons/fi";
import { Progress, Row, Col, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import style from "../../profile-creation/Sex.module.css";

export default function HealthBookMood(props) {
  const [mood, setMood] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putMood = async (e) => {
    e.preventDefault();
    try {
      const DataUuid = window.sessionStorage.getItem("DataUuid");
      await Axios.put(`http://localhost:8000/dailyDatas/${DataUuid}`, {
        mood,
      });
      const uuid = window.localStorage.getItem("uuid");
      await Axios.put(`http://localhost:8000/patients/${uuid}/click`)
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/healthBookAppetite" />;
  }

  return (
    <Fade>
      <Container style={{ marginTop: "20px" }}>
        <Progress animated color="danger" value={50} />
        <Fade right>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center", margin: "20%" }}>
                Quel est votre humeur aujourd'hui ?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {mood === 1 ? (
                <IoMdSad
                  size={80}
                  onClick={() => setMood(1)}
                  color={"red"}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <IoMdSad size={80} onClick={() => setMood(1)} color={"red"} />
              )}
            </Col>{" "}
            <Col>
              {mood === 2 ? (
                <RiEmotionNormalLine
                  onClick={() => setMood(2)}
                  size={80}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <RiEmotionNormalLine onClick={() => setMood(2)} size={80} />
              )}
            </Col>
            <Col>
              {mood === 3 ? (
                <FiSmile
                  onClick={() => setMood(3)}
                  size={73}
                  color={"green"}
                  style={{ opacity: "0.5", border: "solid" }}
                />
              ) : (
                <FiSmile onClick={() => setMood(3)} size={73} color={"green"} />
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <button onClick={putMood} className={style.validate}>
                Validez
              </button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Fade>
  );
}

import React, { useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Citations from "./Citations";
import Fade from "react-reveal/Fade";
import styles from "./dashboard.module.css";
import stylesReward from "./rewards.module.css";

import DoctorData from "./DoctorData";
import { Link } from "react-router-dom";

import illuReward from "../../img/recompense1.svg";

export default function Dashboard(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Fade>
      <Container>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <Link to="./healthBook">
              <Card
                onClick={toggle}
                className="mt-3"
                style={{
                  background: "red",
                  height: "200px",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              ></Card>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "6", offset: 0 }}
            sm={{ size: "6", offset: 0 }}
            md={{ size: "4", offset: 2 }}
            lg={{ size: "4", offset: 2 }}
          >
            <Link to="/rewards">
              <Card
                className="mt-3"
                style={{
                  height: "200px",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              >
                <img src={illuReward} alt="illustration récompenses" />
              </Card>
            </Link>
          </Col>
          <Col
            xs={{ size: "6", offset: 0 }}
            sm={{ size: "6", offset: 0 }}
            md={{ size: "4", offset: 0 }}
            lg={{ size: "4", offset: 0 }}
          >
            <Card
              className="mt-3"
              style={{
                background: "yellow",

                height: "200px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            ></Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <Card className={`${styles.citationCard} mt-3`}>
              <Citations />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <Card
              className="mt-3"
              style={{
                background: "lightgrey",
                height: "200px",
                cursor: "pointer",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <DoctorData />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Citations from "./Citations";
import Fade from "react-reveal/Fade";
import styles from "./dashboard.module.css";

import DoctorData from "./DoctorData";
import { Link } from "react-router-dom";

import illuReward from "../../img/recompense1.svg";
import Axios from "axios";

export default function Dashboard(props) {
  const [modal, setModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  // const { className } = props;
  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = async () => {
    try {
      const uuid = window.localStorage.getItem("uuid");
      const res = await Axios.get(`http://localhost:8000/patients/${uuid}`);
      setDatas(res.data);
      setisLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => setModal(!modal);
  return (
    <Fade>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Container>
          <Row>
            <Col
              xs={{ size: "12", offset: 0 }}
              sm={{ size: "12", offset: 0 }}
              md={{ size: "8", offset: 2 }}
              lg={{ size: "8", offset: 2 }}
            >
              <Link className={styles.cardLink} to="./healthBook">
                <Card
                  onClick={toggle}
                  className="mt-3 p-4"
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  <Row>
                    <h2>Ma pathologie : {datas.pathology}</h2>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <h3>Humeur du jour</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{datas.dailyDatas[0].mood}</Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <h3>Taux de glycémie</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{datas.dailyDatas[0].bloodSugar}</Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <h3>Weight</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{datas.dailyDatas[0].weight}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
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
      )}
    </Fade>
  );
}

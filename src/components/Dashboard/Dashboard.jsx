import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Progress,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import Citations from "./Citations";
import Fade from "react-reveal/Fade";
import styles from "./dashboard.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DoctorData from "./DoctorData";
import { Link } from "react-router-dom";

import illuCheck from "../../img/check.svg";
import illuPosologie from "../../img/posologie.svg";
import illuReward from "../../img/recompenseDash.svg";

import Axios from "axios";
import { IoMdSad } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { RiEmotionNormalLine } from "react-icons/ri";

export default function Dashboard(props) {
  const [modal, setModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [getDoc, setgetDoc] = useState([]);
  const DataUuid = window.sessionStorage.getItem("DataUuid");
  const [score, setScore] = useState(0);

  // const { className } = props;
  useEffect(() => {
    getInfos();
    if (datas.score === 4) {
      return toast("Wow so easy !");
    }
  }, []);

  const getInfos = async () => {
    try {
      const uuid = window.localStorage.getItem("uuid");
      const res = await Axios.get(`http://localhost:8000/patients/${uuid}`);
      setDatas(res.data);
      const docUuid = res.data.DoctorUuid;
      console.log("docUuid ", docUuid);

      // const doc = await Axios.get(`http://localhost:8000/doctors/${docUuid}`);
      // setgetDoc(doc.data);
      // console.log("key 2 ", doc.data);

      // if (datas.score === 1) {
      //   setScore(25);
      // } else if (datas.score === 2) {
      //   setScore(50);
      // } else if (datas.score === 3) {
      //   setScore(75);
      // } else if (datas.score === 4) {
      //   setScore(100);
      // }

      setisLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => setModal(!modal);
  const notify = () => toast("Wow so easy !");
  return (
    <Fade>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Container>
          {" "}
          <ToastContainer />
          <Row>
            <Col lg={{ size: "8", offset: 2 }}>
              <Row>
                <Col>
                  <p>
                    <span className={styles.spanTexteDash}>
                      Bonjour {datas.firstname},
                    </span>
                    <br />
                    vous trouverez ici vos résultats envoyer à votre medecin
                    traitant Dr {}
                  </p>
                </Col>
                <Col className="align-self-center">
                  <Progress animated color="warning" value={datas.score * 25} />
                </Col>
              </Row>
            </Col>
          </Row>
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
                  className={DataUuid ? styles.cardStyle1 : styles.cardStyle2}
                >
                  {DataUuid ? (
                    <div className="p-2">
                      <Row>
                        <Col lg={{ size: 3, offset: 9 }}>
                          <img src={illuCheck} alt="illustration check" />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="align-self-center">
                          <Row>
                            <Col className="justify-align-center ">
                              <h3>Humeur du jour</h3>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="justify-align-center ">
                              {datas.dailyDatas[0].mood === 1 ? (
                                <IoMdSad
                                  size={60}
                                  color={"red"}
                                  style={{ opacity: "0.5", border: "solid" }}
                                />
                              ) : datas.dailyDatas[0].mood === 2 ? (
                                <RiEmotionNormalLine
                                  size={60}
                                  color={"orange"}
                                  style={{ opacity: "0.5", border: "solid" }}
                                />
                              ) : (
                                <FiSmile size={60} color={"#0596DE"} />
                              )}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="align-self-center">
                          <Row>
                            <Col className="justify-align-center ">
                              <h3>Taux de glycémie</h3>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center">
                              <p className={styles.dailyData}>
                                {datas.dailyDatas[0].bloodSugar}
                                <span className={styles.kg}>g/L</span>
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="align-self-center">
                          <Row>
                            <Col>
                              <h3>Weight</h3>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center">
                              <p className={styles.dailyData}>
                                {datas.dailyDatas[0].weight}
                                <span className={styles.kg}>kg</span>
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  ) : (
                    <Row>
                      <Col>
                        <p className={styles.paragrapheRed}>
                          Cliquez pour envoyer vos données !
                        </p>
                      </Col>
                    </Row>
                  )}
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
                  className={`${styles.cardStyle1} ${styles.cardReward} justify-content-center mt-3`}
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
              <Link to="/posologie">
                <Card
                  className={`${styles.cardReward} ${styles.cardStyle1} mt-3`}
                >
                  <img src={illuPosologie} alt="illustration posologie" />
                </Card>
              </Link>
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
                className={`${styles.citationCard} ${styles.cardStyle1} mt-3`}
              >
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
                className={`${styles.cardStyle1} ${styles.cardDoctor} mt-3`}
              >
                <DoctorData getDoc={getDoc} />
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Fade>
  );
}

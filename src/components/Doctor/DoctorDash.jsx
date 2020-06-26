import React, { useState, useEffect } from "react";
import {
  Fade,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Table,
  Card,
} from "reactstrap";
import Axios from "axios";
import styles from "../Dashboard/dashboard.module.css";

export default function DoctorDash() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [uuid, setisuuid] = useState("c7092571-68b0-449b-af2d-05ed22a627dc");

  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = async () => {
    try {
      const res = await Axios.get(`http://localhost:8000/dailyDatas`);
      setDatas(res.data);
      setisLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fade>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Container>
          {/* <Row>
            {datas
              // .filter(
              //   (patient) =>
              //     patient.DoctorUuid ===
              //       "c7092571-68b0-449b-af2d-05ed22a627dc" &&
              //     patient.dailyDatas[2]
              // )
              .map((data) => (
                <Col lg={{ size: 12, offset: 0 }}>
                  <Jumbotron>
                    <h1 className="display-3">
                      {data.lastname} {data.firstname}
                    </h1>
                    <h3 className="display-3">{data.pathology}</h3>

                    <Table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>bloodSugar</th>
                          <th>weight</th>
                          <th>mood</th>
                          <th>appetite</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>{patient.dailyDatas[0].bloodSugar}</td>
                          <td>{patient.dailyDatas[0].weight}</td>
                          <td>{patient.dailyDatas[0].mood}</td>
                          <td>{patient.dailyDatas[0].appetite}</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>{patient.dailyDatas[1].bloodSugar}</td>
                          <td>{patient.dailyDatas[1].weight}</td>
                          <td>{patient.dailyDatas[1].mood}</td>
                          <td>{patient.dailyDatas[1].appetite}</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>{patient.dailyDatas[2].bloodSugar}</td>
                          <td>{patient.dailyDatas[2].weight}</td>
                          <td>{patient.dailyDatas[2].mood}</td>
                          <td>{patient.dailyDatas[2].appetite}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Jumbotron>
                </Col>
              ))}
          </Row> */}
          {datas.map((data) => (
            <Row>
              <Col
                xs={{ size: "12", offset: 0 }}
                sm={{ size: "12", offset: 0 }}
                md={{ size: "12", offset: 0 }}
                lg={{ size: "12", offset: 0 }}
              >
                <Card
                  className={`${styles.citationCard} ${styles.cardStyle1} mt-3`}
                  style={{ height: "280px" }}
                >
                  <h2>{data.Patient.firstname}</h2>
                  <hr />
                  <Row>
                    <Col>
                      {" "}
                      <h6>
                        <span>bloodSugar</span> {data.bloodSugar}
                      </h6>
                      <h6>
                        <span>weight:</span> {data.weight}
                      </h6>
                      <h6>
                        <span>mood: </span> {data.mood}
                      </h6>
                      <h6>
                        <span>appetite:</span> {data.appetite}
                      </h6>
                    </Col>
                    <Col>
                      <h6>
                        <span>Date:</span> {data.createdAt.substring(0, 10)}
                      </h6>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      )}
    </Fade>
  );
}

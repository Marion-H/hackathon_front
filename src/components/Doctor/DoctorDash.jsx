import React, { useState, useEffect } from "react";
import {
  Fade,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Table,
} from "reactstrap";
import Axios from "axios";

export default function DoctorDash() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [uuid, setisuuid] = useState("c7092571-68b0-449b-af2d-05ed22a627dc");

  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = async () => {
    try {
      const res = await Axios.get(`http://localhost:8000/patients`);
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
          <Row>
            {datas
              .filter(
                (patient) =>
                  patient.DoctorUuid ===
                    "c7092571-68b0-449b-af2d-05ed22a627dc" &&
                  patient.dailyDatas[2]
              )
              .map((patient) => (
                <Col lg={{ size: 12, offset: 0 }}>
                  <Jumbotron>
                    <h1 className="display-3">
                      {patient.lastname} {patient.firstname}
                    </h1>
                    <h3 className="display-3">{patient.pathology}</h3>

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
          </Row>
        </Container>
      )}
    </Fade>
  );
}

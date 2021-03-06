import React, { useEffect, useState } from "react";
import axios from "axios";
import { Progress, Row, Col, Container, FormGroup } from "reactstrap";
import { Redirect } from "react-router-dom";

import styles from "./profile.module.css";
import logo_simple from "../../img/logo_squicker.svg";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function DocSelect() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [canGoNext, setcanGoNext] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState();

  const getDocs = async () => {
    try {
      const docs = await axios.get("http://localhost:8000/doctors");
      setDoctors(docs.data);
    } catch (error) {
      alert("something went wrong");
    } finally {
      setisLoading(false);
    }
  };

  const postDoc = async () => {
    try {
      const patientUUID = window.localStorage.getItem("uuid");

      await axios.put(`http://localhost:8000/patients/${patientUUID}`, {
        DoctorUuid: selectedDoc,
      });
      setcanGoNext(true);
      console.log(selectedDoc);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  if (canGoNext) {
    return <Redirect to="/dashboard" />;
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
          <h6 style={{ textAlign: "center" }}>Apres ca c'est fini!</h6>
          <Progress
            className={styles.progressBar}
            animated
            color="success"
            value={100}
          />

          <Fade right>
            <Container>
              {isLoading ? (
                <p>Loading</p>
              ) : (
                <>
                  <Fade right>
                    <Row>
                      <Col>
                        <h3 style={{ textAlign: "center", margin: "20%" }}>
                          Selectionnez votre médecin traitant.
                        </h3>
                      </Col>
                    </Row>
                    <FormGroup>
                      <select
                        value={selectedDoc}
                        onClick={(e) => setSelectedDoc(e.target.value)}
                      >
                        {doctors.map((doc) => (
                          <option value={doc.uuid}>
                            {doc.firstname} {doc.lastname}
                          </option>
                        ))}
                      </select>
                    </FormGroup>
                    <Row className="my-4">
                      <Col
                        xs={{ size: 6, offset: 3 }}
                        md={{ size: 8, offset: 2 }}
                      >
                        <button
                          className={style.generalButton}
                          onClick={postDoc}
                        >
                          Validez
                        </button>
                      </Col>
                    </Row>
                  </Fade>
                </>
              )}
            </Container>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Progress,
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function DocSelect() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  //   const [patient, setpatient] = useState("");
  const [selectedDoc, setselectedDoc] = useState("");
  const [hasADoc, sethasADoc] = useState(false);

  const getDocs = async () => {
    try {
      const docs = await axios.get("http://localhost:8000/doctors");
      setDoctors(docs.data);
      console.log(docs);
    } catch (error) {
      console.log(doctors);

      alert("something went wrong");
    } finally {
      setisLoading(false);
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setselectedDoc(e.target.value);
  };

  const postDoc = () => {
    const patientUUID = window.localStorage.getItem("uuid");
    if (selectedDoc) {
      axios.put(`http://localhost:8000/patients/${patientUUID}`, {
        selectedDoc,
      });
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h6 style={{ textAlign: "center", margin: 15 }}>
            Apres ca c'est fini!
          </h6>
          <Progress animated color="success" value={100} />
          <Fade right>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center", margin: "20%" }}>
                  Selectionnez votre médecin traitant.
                </h3>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                {doctors.map((doc) => (
                  <option onChange={(e) => handleSelect(e)}>
                    {doc.firstname}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Row>
              <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                <Redirect to="/dashboard">
                  <button className={style.validate}>Validez</button>
                </Redirect>
              </Col>
            </Row>
          </Fade>
        </>
      )}
    </Container>
  );
}

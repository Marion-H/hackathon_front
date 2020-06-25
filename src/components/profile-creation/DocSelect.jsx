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
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function DocSelect() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setisLoading] = useState(true);
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
                  <option>{doc.firstname}</option>
                ))}
              </Input>
            </FormGroup>
            <Row>
              <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                <Link to="/pathologie">
                  <button className={style.validate}>Validez</button>
                </Link>
              </Col>
            </Row>
          </Fade>
        </>
      )}
    </Container>
  );
}

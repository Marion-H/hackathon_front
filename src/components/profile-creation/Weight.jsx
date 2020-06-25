import React, { useState } from "react";
import {
  Progress,
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Fade } from "react-reveal";
import style from "./Sex.module.css";
import { Redirect } from "react-router-dom";

export default function Weight() {
  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);
  const [weight, setWeight] = useState("");

  // const putWeight = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const uuid = window.localStorage.getItem("uuid");
  //     await Axios.put(`http://localhost:8000/patients/${uuid}`, {
  //       gender,
  //     });
  //     setCanGoToNextPage(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // if (CanGoToNextPage) {
  //   return <Redirect to="/age" />;
  // }
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Encore un petit effort.
      </h6>
      <Progress animated color="warning" value={40} />
      <Fade right>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel est votre poids?
            </h3>
          </Col>
        </Row>
        <FormGroup>
          <Label for="weight">Entrez votre poids</Label>
          <Input type="number" name="weight"></Input>
        </FormGroup>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <Redirect to="age">
              <button className={style.validate}>Validez</button>
            </Redirect>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

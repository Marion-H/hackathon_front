import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Squirrel from "../img/logo_squicker_fond.png";
import style from "./Connexion.module.css";
import Axios from "axios";
import { Fade } from "react-reveal";

import styles from "./onboarding/onboarding.module.css";

export default function Connexion() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const postPatient = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8000/patients", {
        lastname,
        firstname,
      });
      localStorage.setItem("uuid", res.data.uuid);
    } catch (err) {
      console.log(err);
    } finally {
      setCanGoToNextPage(true);
    }
  };

  if (CanGoToNextPage && window.localStorage.getItem("uuid")) {
    return <Redirect to="/sex" />;
  }
  return (
    <Fade right>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <img
              width="30%"
              className={style.logo}
              src={Squirrel}
              alt="logo Squicker"
              style={{ marginBottom: "20px" }}
            />
            <h2>Enregistrez-vous</h2>
            <p>
              Bonjour, ne vous en faites pas, vous enregistrez ne prendra que
              <b>quelques secondes</b>.
            </p>
            <Form onSubmit={postPatient}>
              <FormGroup>
                <Label style={{ marginTop: "10px" }} for="Nom">
                  Nom
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="votre nom"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ marginTop: "10px" }} for="Prenom">
                  Prenom
                </Label>
                <Input
                  type="text"
                  name="name"
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="votre prenom"
                />
              </FormGroup>
              <button
                style={{ marginTop: "10px" }}
                className={styles.generalButton}
              >
                S'ENREGISTRER
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

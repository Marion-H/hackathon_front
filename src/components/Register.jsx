import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import Squirrel from "../img/logo_squicker_fond.png";
import style from "./Connexion.module.css";
import Axios from "axios";
import { Fade } from "react-reveal";

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
      <Container>
        <img className={style.logo} src={Squirrel} alt="logo Squicker" />
        <h1>Enregistrez-vous</h1>
        <p>
          Bonjour, j'espère que vous allez bien aujourd'hui? Ne vous en faites
          pas, vous enregistrez ne prendra que quelques secondes.
        </p>
        <Form onSubmit={postPatient}>
          <FormGroup>
            <Label for="Nom">Nom</Label>
            <Input
              type="text"
              name="name"
              placeholder="votre nom"
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Prenom">Prenom</Label>
            <Input
              type="text"
              name="name"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="votre prenom"
            />
          </FormGroup>
          <button className="generalButton">S'ENREGISTRER</button>
        </Form>
      </Container>
    </Fade>
  );
}

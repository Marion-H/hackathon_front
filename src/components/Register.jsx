import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import Squirrel from "../img/logo_squicker_fond.png";
import style from "./Connexion.module.css";

export default function Connexion() {
  return (
    <Container>
      <img className={style.logo} src={Squirrel} alt="logo Squicker" />
      <h1>Enregistrez-vous</h1>
      <p>
        Bonjour, j'espère que vous allez bien aujourd'hui? Ne vous en faites
        pas, vous enregistrez ne prendra que quelques secondes.
      </p>
      <Form>
        <FormGroup>
          <Label for="Nom">Nom</Label>
          <Input type="text" name="name" id="Nom" placeholder="votre nom" />
        </FormGroup>
        <FormGroup>
          <Label for="Prenom">Prenom</Label>
          <Input
            type="text"
            name="name"
            id="Prenom"
            placeholder="votre prenom"
          />
        </FormGroup>
        <button className="generalButton">S'ENREGISTRER</button>
      </Form>
    </Container>
  );
}

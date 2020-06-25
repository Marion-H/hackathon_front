import React, { useState } from "react";
import Fade from "react-reveal/Fade";
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
import { GiBanana } from 'react-icons/gi';
import { GiBananaBunch } from 'react-icons/gi';
import { GiBananaPeeled } from 'react-icons/gi';

import Axios from "axios";
import style from "../../profile-creation/Sex.module.css";

export default function HealthBookAppetite(props) {
  const [appetite, setAppetite] = useState(0);

  const [CanGoToNextPage, setCanGoToNextPage] = useState(false);

  const putAppetite = async (e) => {
    e.preventDefault();
    try {
        const DataUuid = window.sessionStorage.getItem("DataUuid");
      await Axios.put(`http://localhost:8000/dailyDatas/${DataUuid}`, {
        appetite,
      })
      setCanGoToNextPage(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (CanGoToNextPage) {
    return <Redirect to="/HealthBookWeight" />;
  }

  return (
    <Fade>
      <Container style={{ marginTop: "20px" }}>
        <Progress animated color="danger" value={10} />
        <Fade right>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center", margin: "20%" }}>
                Quel votre taux de glycemie?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="weight">Avez-vous de l'appétit aujourd'hui ?</Label>
                <GiBanana size={70}/>
                <GiBananaPeeled size={70} />
                <GiBananaBunch size={70} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
              <button onClick={putAppetite} className={style.validate}>
                Validez
              </button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Fade>
  );
}

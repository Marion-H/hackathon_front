import React from "react";
import { Container, Row, Col } from "reactstrap";
import illuPres from "../../img/presentation.svg";
import { Fade } from "react-reveal";

import styles from "./onboarding.module.css";
import { Link } from "react-router-dom";

export default function OnboardingPres() {
  return (
    <Fade >
      <Container style={{marginTop: "30px"}}>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <img src={illuPres} alt="illustration présentation" />
            <h2 className={`${styles.titreDeux} mt-3`}>Etape 1</h2>
            <p className="my-5">
              Squicker, c'est ton <b>application santé</b> qui va faciliter ton
              quotidien !<br />
              Un coaching sur mesure !
            </p>
            <Link to="/etapeDeux" className={styles.generalButton}>
              Démarrer
            </Link>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

import React from "react";
import { Container, Row, Col } from "reactstrap";
import illuDash from "../../img/dashboard.svg";

import styles from "./onboarding.module.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function OnboardingDash() {
  return (
    <Fade right>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Row>
              <Col>
                <img src={illuDash} alt="illustration étape deux" />
                <h2 className={`${styles.titreDeux} mt-3`}>Etape 2</h2>
                <p className="my-5">
                  Suis tes analyses aux quotidiens grâce à ton dashboard et
                  envois tes résultats à ton docteur quotidiennement.
                </p>
              </Col>
            </Row>
            <Row>
             
              <Col>
                <Link to="/" className={styles.lienSimple}>
                  Retour
                </Link>
              </Col>
              <Col>
                <Link to="/etapeTrois" className={styles.generalButton}>
                  Continuer
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

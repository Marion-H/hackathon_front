import React from "react";
import { Container, Row, Col } from "reactstrap";
import illuDash from "../../img/dashboard.svg";

import styles from "./onboarding.module.css";
import { Link } from "react-router-dom";

export default function OnboardingDash() {
  return (
    <Container>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <img src={illuDash} alt="illustration étape deux" />
          <h2 className={`${styles.titreDeux} mt-3`}>Etape 2</h2>
          <p className="my-5">
            Suis tes analyses aux quotidiens grâce à ton dashboard et envois tes
            résultats à ton docteur quotidiennement.
          </p>
          <Link to="/etapeTrois" className={styles.generalButton}>
            Continuer
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

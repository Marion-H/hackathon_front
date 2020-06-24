import React from "react";
import { Container, Row, Col } from "reactstrap";
import illuRewards from "../../img/recompense1.svg";

import styles from "./onboarding.module.css";
import { Link } from "react-router-dom";

export default function OnboardingRecompense() {
  return (
    <Container>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <img src={illuRewards} alt="illustration récompences" />
          <h2 className={`${styles.titreDeux} mt-3`}>Etape 1</h2>
          <p className="my-5">
            Plus ton suivis sera régulier plus tu accumulera des points et
            bénéficira de remise sur tes activités et magasins favoris.
          </p>
          <Link to="/connexion" className={styles.generalButton}>
            Créer un compte
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

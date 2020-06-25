import React from "react";
import { Container, Row, Col } from "reactstrap";
import illuRewards from "../../img/recompense1.svg";

import styles from "./onboarding.module.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function OnboardingRecompense() {
  return (
    <Fade right>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Row>
              <Col>
                <img src={illuRewards} alt="illustration récompences" />
                <h2 className={`${styles.titreDeux} mt-3`}>Etape 3</h2>
                <p className="my-5">
                  Plus ton suivis sera régulier plus tu accumulera des points et
                  bénéficira de remise sur tes activités et magasins favoris.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/etapeDeux" className={styles.lienSimple}>
                  Retour
                </Link>
              </Col>
              <Col>
                <Link to="/connexion" className={styles.generalButton}>
                  Créer un compte
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

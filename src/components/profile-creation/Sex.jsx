import React, { useState } from "react";
import { Progress, Row, Col, Container } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import style from "./Sex.module.css";
import { Link } from "react-router-dom";

export default function Sex() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Cela ne sera pas long.
      </h6>
      <Progress animated color="danger" value={10} />
      <Row>
        <Col>
          <Zoom>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel votre sexe?
            </h3>
          </Zoom>
        </Col>
      </Row>

      <button
        style={{ width: "45%", marginRight: "5vw" }}
        onClick={() => setToggle(!toggle)}
        className={toggle ? style.buttonOn : style.buttonOff}
      >
        Homme
      </button>
      <button
        style={{ width: "45%" }}
        onClick={() => setToggle(!toggle)}
        className={toggle ? style.buttonOff : style.buttonOn}
      >
        Femme
      </button>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
          <Link to="/weight">
            <button className={style.validate}>Validez</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

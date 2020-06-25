import React from "react";
import { Row, Col } from "reactstrap";
import Raoult from "../../img/Raoult-crop.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import style from "./dashboard.module.css";

export default function DoctorData() {
  return (
    <Row>
      <Col xs={{ size: 3 }}>
        <img
          style={{ borderRadius: 1000, marginTop: "50%" }}
          src={Raoult}
          alt="photo du praticien"
          width="90%"
        />
      </Col>
      <Col xs={{ size: 6 }}>
        <h3 style={{ marginTop: 15 }}>Dr. Raoul</h3>

        <p style={{ marginTop: 15 }}>
          2 allée des cocquelicots, MARSEILLE XXXXX{" "}
        </p>
      </Col>
      <Col xs={{ size: 3 }}>
        <button className={style.phone}>
          <AiOutlinePhone size={40} />
        </button>
      </Col>
    </Row>
  );
}

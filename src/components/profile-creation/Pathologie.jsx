import React, { useState } from "react";
import {
  Progress,
  Row,
  Col,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import Fade from "react-reveal/Fade";
import style from "./Sex.module.css";

export default function Pathologie() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [desease, setDesease] = useState("Selectionnez votre pathologie");

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Container>
      <h6 style={{ textAlign: "center", margin: 15 }}>
        Ca y est, plus que celle la
      </h6>
      <Progress animated color="success" value={100} />
      <Fade right>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", margin: "20%" }}>
              Quel pathologie avez vous?
            </h3>
          </Col>
        </Row>

        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          color="danger"
          size="lg"
          direction="up"
        >
          <DropdownToggle caret>{desease}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setDesease("Diabète")}>
              Diabète
            </DropdownItem>
            <DropdownItem onClick={() => setDesease("Hypertension")}>
              Hypertension
            </DropdownItem>
            <DropdownItem onClick={() => setDesease("Apnée du sommeil")}>
              Apnée du sommeil
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <Redirect to="/doc-select">
              <button className={style.validate}>Validez</button>
            </Redirect>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

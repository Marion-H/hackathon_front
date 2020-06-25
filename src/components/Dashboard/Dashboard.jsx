import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Citations from "./Citations";
import Zoom from "react-reveal/Zoom";
import styles from "./dashboard.module.css";
import stylesReward from "./rewards.module.css";

import DoctorData from "./DoctorData";

import illuReward from "../../img/recompense1.svg";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  const [modal, setModal] = useState(false);
  const { className } = props;

  const toggle = () => setModal(!modal);
  return (
    <Zoom left>
      <Container>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <div>
              <Card
                onClick={toggle}
                className="mt-3"
                style={{
                  background: "red",
                  height: "200px",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              ></Card>

              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Carnet de Santé</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Valider
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Annulé
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "6", offset: 0 }}
            sm={{ size: "6", offset: 0 }}
            md={{ size: "4", offset: 2 }}
            lg={{ size: "4", offset: 2 }}
          >
            <Link to="/rewards">
              <Card
                className="mt-3"
                style={{
                  height: "200px",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              >
                <img src={illuReward} alt="illustration récompenses" />
              </Card>
            </Link>
          </Col>
          <Col
            xs={{ size: "6", offset: 0 }}
            sm={{ size: "6", offset: 0 }}
            md={{ size: "4", offset: 0 }}
            lg={{ size: "4", offset: 0 }}
          >
            <Card
              className="mt-3"
              style={{
                background: "yellow",

                height: "200px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            ></Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <Card className={`${styles.citationCard} mt-3`}>
              <Citations />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "12", offset: 0 }}
            sm={{ size: "12", offset: 0 }}
            md={{ size: "8", offset: 2 }}
            lg={{ size: "8", offset: 2 }}
          >
            <Card
              className="mt-3"
              style={{
                background: "lightblue",
                height: "200px",
                cursor: "pointer",
                borderRadius: "10px",

                marginBottom: "20px",
              }}
            >
              <DoctorData />
            </Card>
          </Col>
        </Row>
      </Container>
    </Zoom>
  );
}

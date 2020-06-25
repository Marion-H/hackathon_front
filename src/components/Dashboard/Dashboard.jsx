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
import DoctorData from "./DoctorData";
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
            <Link to="./healthBook">
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
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "6", offset: 0 }}
            sm={{ size: "6", offset: 0 }}
            md={{ size: "4", offset: 2 }}
            lg={{ size: "4", offset: 2 }}
          >
            <Card className={`${styles.citationCard} mt-3`}></Card>
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
            <Card
              className="mt-3"
              style={{
                background: "orange",
                height: "200px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
              {" "}
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

import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col
          xs={{ size: "12", offset: 0 }}
          sm={{ size: "12", offset: 0 }}
          md={{ size: "8", offset: 2 }}
          lg={{ size: "8", offset: 2 }}
        >
          <Card
            style={{
              background: "orange",
              height: "200px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          ></Card>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: "6", offset: 0 }}
          sm={{ size: "6", offset: 0 }}
          md={{ size: "4", offset: 2 }}
          lg={{ size: "4", offset: 2 }}
        >
          <Card
            style={{
              background: "orange",

              height: "200px",
              cursor: "pointer",
              borderRadius: "10px",

              marginTop: "15px",
            }}
          ></Card>
        </Col>
        <Col
          xs={{ size: "6", offset: 0 }}
          sm={{ size: "6", offset: 0 }}
          md={{ size: "4", offset: 0 }}
          lg={{ size: "4", offset: 0 }}
        >
          <Card
            style={{
              background: "orange",

              height: "200px",
              cursor: "pointer",
              borderRadius: "10px",

              marginTop: "15px",
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
            style={{
              background: "orange",
              marginTop: "15px",
              height: "200px",
              cursor: "pointer",
              borderRadius: "10px",

              marginBottom: "20px",
            }}
          ></Card>
        </Col>
      </Row>
    </Container>
  );
}

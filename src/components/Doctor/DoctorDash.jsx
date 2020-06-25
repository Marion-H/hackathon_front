import React, { useState, useEffect } from "react";
import { Fade, Container, Row, Col, Jumbotron, Button } from "reactstrap";
import Axios from "axios";

export default function DoctorDash() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [uuid, setisuuid] = useState("2ebb0d4c-5c9d-4f3a-9bb1-77aee20ad3f6");

  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = async () => {
    try {
      const uuid = "9b31e212-8f62-4b85-8b36-89b2bd069d27";
      const res = await Axios.get(`http://localhost:8000/patients`);
      setDatas(res.data);
      setisLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fade>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Container>
          <Row>
            {datas
              .filter(
                (patient) =>
                  patient.DoctorUuid === "2ebb0d4c-5c9d-4f3a-9bb1-77aee20ad3f6"
              )
              .map((patient) => (
                <Jumbotron>
                  <h1 className="display-3">{patient.lastname}</h1>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              ))}
          </Row>
        </Container>
      )}
    </Fade>
  );
}

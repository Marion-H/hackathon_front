import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";

import Styles from "./rewards.module.css";

import img_recompense from "../../img/spa_recompense.jpeg";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "axios";

const Rewards = () => {
  const [isLoading, setisLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    getInfos();
    getDisabled(datas)
  });

  const getInfos = async () => {
    try {
      const uuid = window.localStorage.getItem("uuid");
      const res = await Axios.get(`http://localhost:8000/patients/${uuid}`);
      setDatas(res.data.score);
      setisLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getDisabled= (scorePatient) =>{
    if (scorePatient === 4){
      setIsDisabled(false)
    }
  }

  
  return (
    <div>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <Row>
                <Col>
                  <Link className={Styles.linkStyle} to="/dashboard">
                    <FaArrowCircleLeft />
                  </Link>
                  <h2>Vos récompenses</h2>
                </Col>
              </Row>
              <Row className="justify-content-center m-5">
                <p>
                  Votre assiduité vous permettra de developper des récompenses !
                </p>
              </Row>
              <Row className="bg-light my-3">
                <Col>
                  <img width="100%" src={img_recompense} alt="Photo spa" />
                </Col>
                <Col className="align-self-center">
                  <Container>
                    <h3>Spa Dune & eau</h3>
                    <p className="lead">
                      -10% sur ton entrée au spa de labenne, venez profiter d'un
                      moment de détente !
                    </p>
                    {isDisabled ? (
                      <button disabled className={Styles.generalButtonDisabled}>
                        Utiliser le coupon
                      </button>
                    ) : (
                      <button className={Styles.generalButton}>
                        Utiliser le coupon
                      </button>
                    )}
                    
                  </Container>
                </Col>
              </Row>
              <Row className="bg-light my-3">
                <Col>
                  <img width="100%" src={img_recompense} alt="spa"/>
                </Col>
                <Col className="align-self-center">
                  <Container>
                    <h3>Spa Dune & eau</h3>
                    <p className="lead">
                      -10% sur ton entrée au spa de labenne, venez profiter d'un
                      moment de détente !
                    </p>
                    <button disabled className={Styles.generalButtonDisabled}>
                      Utiliser le coupon
                    </button>
                  </Container>
                </Col>
              </Row>
              <Row className="bg-light my-3">
                <Col>
                  <img width="100%" src={img_recompense} alt="Photo spa" />
                </Col>
                <Col className="align-self-center">
                  <Container>
                    <h3>Spa Dune & eau</h3>
                    <p className="lead">
                      -10% sur ton entrée au spa de labenne, venez profiter d'un
                      moment de détente !
                    </p>
                    <button disabled className={Styles.generalButtonDisabled}>
                      Utiliser le coupon
                    </button>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Rewards;

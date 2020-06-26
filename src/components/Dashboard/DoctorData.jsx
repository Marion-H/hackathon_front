import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Cabinet from "../../img/cabinetmedicalseignosse2018-3.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import style from "./dashboard.module.css";

export default function DoctorData(props) {
  const { className, getDoc } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <div onClick={toggle}>
        <h1 className={style.titleH1}>Votre médecin généraliste</h1>

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Infos générales</ModalHeader>
          <ModalBody>
            <img
              className={style.imgDoc}
              src={Cabinet}
              alt="image du praticien"
            />
            <p>
              {getDoc.firstname} {getDoc.lastname}
              <br />
              Ouvert de 8h à 20h <br />
              {getDoc.adress} {getDoc.city}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Appelez
              <AiOutlinePhone size={40} />
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  );
}

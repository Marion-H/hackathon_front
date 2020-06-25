import React, { useState, useEffect } from "react";
import axios from "axios";
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
  // const [getPatient, setgetPatient] = useState();
  // const [getDoc, setgetDoc] = useState();
  // const [isLoading, setisLoading] = useState(true);

  // const getDocInfo = async () => {
  //   try {
  //     const uuid = window.localStorage.getItem("uuid");
  //     const patient = await axios.get(`http://localhost:8000/patients/${uuid}`);
  //     setgetPatient(patient);
  //     console.log("key 1 ", getPatient);

  //     const docUuid = getPatient.data.DoctorUuid;
  //     const doc = await axios.get(`http://localhost:8000/patients/${docUuid}`);
  //     setgetDoc(doc.data);
  //     console.log("key 2 ", docUuid);

  //     setisLoading(false);
  //   } catch (error) {
  //     alert("Something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   getDocInfo();
  // }, []);

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
              Ouvert de Xh à XXh <br />
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

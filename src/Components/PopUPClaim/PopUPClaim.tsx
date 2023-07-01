import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BtnFinalizar } from "../btnDapp/btnDapp";
import {
  Navigate,
  useNavigate,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";

function PopUPClaim() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const BtnToPop = (btndata: any) => {
    setShow(!show);

    navigate("/");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Finalizar partida!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BtnFinalizar BtnToPop={BtnToPop}></BtnFinalizar>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export { PopUPClaim };

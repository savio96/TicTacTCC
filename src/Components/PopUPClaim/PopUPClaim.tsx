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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const BtnToPop = (btndata: any) => {
    setShow(!show);
    console.log("cheguei aqui");
    navigate("/");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Jogo
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Finalizar partida!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { PopUPClaim };

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BtnDepositCoin } from "../btnDapp/btnDapp";
import {
  Navigate,
  useNavigate,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";

function PopUPDeposit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const BtnToPop = (btndata: any) => {
    setShow(!show);
    console.log("cheguei aqui");
    navigate("/jogo");
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
          <Modal.Title>Deposite a moeda!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BtnDepositCoin BtnToPop={BtnToPop}></BtnDepositCoin>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export { PopUPDeposit };

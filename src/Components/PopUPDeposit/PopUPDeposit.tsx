import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BtnDepositCoin } from "../btnDapp/btnDapp";
import { UserContext } from "../UserInfo/UserInfo";
import {
  Navigate,
  useNavigate,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";

function PopUPDeposit() {
  const [show, setShow] = useState(false);
  let { wallet } = useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (wallet != "") {
      setShow(true);
    } else {
      alert("Por favor conectar sua carteira.");
    }
  };
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

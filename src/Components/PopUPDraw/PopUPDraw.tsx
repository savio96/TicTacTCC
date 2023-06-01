import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MatchContext } from "../MatchInfo/MatchInfo";
import {
  Navigate,
  useNavigate,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";

function PopUPDraw() {
  let { empate, changeEmpate } = useContext(MatchContext);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/");
    changeEmpate(0);
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Empate!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { PopUPDraw };

// src/Components/WelcomePopup.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcomeShown");
    if (!hasSeenPopup) {
      setShow(true);
      sessionStorage.setItem("welcomeShown", "true");
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      className="text-center"
    >
      <Modal.Body style={{ background: "#000", color: "#fff" }}>
        <img
          src="/zeeshop-logo.png"
          alt="Zeeshop Logo"
          style={{ height: "80px", marginBottom: "20px" }}
        />
        <h2 className="fw-bold">Welcome to Zeeshop</h2>
        <p className="mt-2">Your one-stop shop for everything you love!</p>
        <Button
          variant="light"
          className="mt-3 fw-semibold"
          onClick={handleClose}
        >
          Continue
        </Button>
      </Modal.Body>
    </Modal>
  );
}

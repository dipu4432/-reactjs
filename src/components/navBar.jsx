import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AppointmentForm from "./appointmentForm";
import CallbackForm from "./callBackForm";
import "./navBar.css";

function NavBar() {
  const [show, setShow] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  return (
    <>
      {/* <Navbar bg="light" expand="lg" className="py-3 shadow-sm" fixed="top"> */}
      <Navbar bg="light" expand="lg" className="py-4 shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand className="fw-bold fs-6">
            Tiwari Nursing Home
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-mobile">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            <Button
              style={{
                backgroundColor: "#3B82A0",
                border: "none",
                padding: "8px 16px",
                fontWeight: "500",
                marginRight: "10px",
              }}
              onClick={() => setShowCallback(true)}
            >
              Request a Callback
            </Button>

            {/* Button */}
            <Button
              style={{
                backgroundColor: "#28a745",
                border: "none",
                padding: "8px 16px",
                fontWeight: "500",
              }}
              onClick={() => setShow(true)}
            >
              Book Appointment
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Modal OUTSIDE Navbar */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm onSuccess={() => setShow(false)} />
        </Modal.Body>
      </Modal>

      <Modal show={showCallback} onHide={() => setShowCallback(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request a Callback</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CallbackForm onSuccess={() => setShowCallback(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;

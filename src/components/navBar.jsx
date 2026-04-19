import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import AppointmentForm from "./appointmentForm";
import CallbackForm from "./callBackForm";
import "./navBar.css";
import logo from "../assets/llogoo.png";
import { Link } from "react-router-dom";

function NavBar() {
  // Modal states
  const [show, setShow] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  // Phone number from .env file
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="py-2 shadow-sm">
        <Container>

          {/* Logo */}
          <Navbar.Brand
            as={Link}
            to="/#home"
            className="d-flex align-items-center"
          >
            <img
              src={logo}
              alt="Tiwari Nursing Home"
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Content */}
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Navigation Links */}
            <Nav className="mx-auto nav-mobile">
              <Nav.Link as={Link} to="/#home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/#about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/#services">
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/#gallery">
                Gallery
              </Nav.Link>

              <Nav.Link as={Link} to="/#reviews">
                Reviews
              </Nav.Link>

              <Nav.Link as={Link} to="/#contact">
                Contact
              </Nav.Link>
            </Nav>

            {/* Right Side Buttons */}
            <div className="d-flex gap-2 nav-btn-group">

              {/* Call Doctor Button */}
              <Button
                style={{
                  backgroundColor: "#3B82A0",
                  border: "none",
                  padding: "8px 16px",
                  fontWeight: "500",
                }}
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                <FaPhoneAlt className="me-2" />
                Call Doctor
              </Button>

              {/* Book Appointment Button */}
              {/* <Button
                style={{
                  backgroundColor: "#28a745",
                  border: "none",
                  padding: "8px 16px",
                  fontWeight: "500",
                }}
                onClick={() => setShow(true)}
              >
                Book Appointment
              </Button> */}

              {/* Request Callback Button */}
              {/* <Button
                style={{
                  backgroundColor: "#0d6efd",
                  border: "none",
                  padding: "8px 16px",
                  fontWeight: "500",
                }}
                onClick={() => setShowCallback(true)}
              >
                Request Callback
              </Button> */}

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Appointment Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm onSuccess={() => setShow(false)} />
        </Modal.Body>
      </Modal>

      {/* Callback Modal */}
      <Modal
        show={showCallback}
        onHide={() => setShowCallback(false)}
        centered
      >
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
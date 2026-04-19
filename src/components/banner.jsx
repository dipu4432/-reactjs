import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import "./banner.css";
import heroBg from "../assets/bgg.webp";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AppointmentForm from "./appointmentForm";

function Banner() {
  const [show, setShow] = useState(false);

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <section
      className="hero-section"
      style={{
        background: `url(${heroBg}) center/cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        {/* Heading */}
        <h1 className="hero-title">
          Trusted Orthopedic <br />
          Care in Bilaspur
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Expert treatment for bones, joints and injuries.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          {/* <button className="btn-primary" onClick={() => setShow(true)}>
            <FaCalendarAlt /> Book Appointment
          </button> */}

          {/* <button className="btn-secondary">
            <FaPhoneAlt /> Call Doctor
          </button> */}
          <Button
            style={{
              backgroundColor: "#3B82A0",
              border: "none",
            }}
            onClick={() => {
              // const phoneNumber = "+919876543210"; // replace with your number
              window.location.href = `tel:${phoneNumber}`;
            }}
          >
            <FaPhoneAlt /> Call Doctor
          </Button>
        </div>
        {/* ✅ Modal OUTSIDE Navbar */}
        <Modal show={show} onHide={() => setShow(false)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Book Appointment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AppointmentForm onSuccess={() => setShow(false)} />
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

export default Banner;

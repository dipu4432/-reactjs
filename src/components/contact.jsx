import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AppointmentForm from "./appointmentForm";

function Contact() {
  const [show, setShow] = useState(false);

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const message = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE);

  // Reusable button style
  const buttonStyle = {
    width: "220px",
    height: "50px",
    border: "none",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    fontWeight: "500",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #ECF2FE 0%,
  #FFFFFF 40%,
  #FFFFFF 60%,
  #ECF2FE 100%)`,
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <Container>
        {/* Heading */}
        <h1 className="fw-bold mb-5">Book Your Appointment Today</h1>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {/* Call Now */}
          {/* <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#2FB36D",
            }}
          >
            <FaPhoneAlt size={16} />
            Call Now
          </Button> */}
          <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#2FB36D",
            }}
            onClick={() => {
              // const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

              window.location.href = `tel:+${phoneNumber}`;
              // console.log(`tel:+${phoneNumber}`);
            }}
          >
            <FaPhoneAlt size={16} />
            Call Now
          </Button>

          {/* WhatsApp */}
          {/* <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#3B82A0",
            }}
          >
            <FaWhatsapp size={18} />
            Whatsapp
          </Button> */}
          <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#3B82A0",
            }}
            onClick={() => {
              // const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

              // const message = encodeURIComponent(
              //   import.meta.env.VITE_WHATSAPP_MESSAGE
              // );

              const url = `https://wa.me/${phoneNumber}?text=${message}`;

              // ✅ Mobile + Desktop support
              if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.open(url, "_self"); // mobile opens app directly
              } else {
                window.open(url, "_blank"); // desktop opens web WhatsApp
              }
            }}
          >
            <FaWhatsapp size={18} />
            Whatsapp
          </Button>

          {/* Book Appointment */}
          <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#F4B350",
              color: "#000",
            }}
            onClick={() => setShow(true)}
          >
            <FaCalendarAlt size={16} />
            Book Appointment
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
      </Container>
    </div>
  );
}

export default Contact;

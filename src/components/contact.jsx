import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Contact() {

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
        background: "linear-gradient(to right, #e9ecef, #dee2e6)",
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <Container>

        {/* Heading */}
        <h1 className="fw-bold mb-5">
          Book Your Appointment Today
        </h1>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-4 flex-wrap">

          {/* Call Now */}
          <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#2FB36D",
            }}
          >
            <FaPhoneAlt size={16} />
            Call Now
          </Button>

          {/* WhatsApp */}
          <Button
            style={{
              ...buttonStyle,
              backgroundColor: "#3B82A0",
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
          >
            <FaCalendarAlt size={16} />
            Book Appointment
          </Button>

        </div>

      </Container>
    </div>
  );
}

export default Contact;
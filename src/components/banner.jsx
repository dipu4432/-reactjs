import { FaPhoneAlt } from "react-icons/fa";
import "./banner.css";
import { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import AppointmentForm from "./appointmentForm";

/* Import your banner images */
import heroBg1 from "../assets/orthopedic-clinic.webp";
import heroBg2 from "../assets/pathoLab.webp";
import heroBg3 from "../assets/ortho.webp";

function Banner() {
  const [show, setShow] = useState(false);

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  /* Banner Slides Data */
  const slides = [
    {
      image: heroBg1,
      title: "Trusted Orthopedic Care in Bilaspur",
      subtitle: "Expert treatment for bones, joints and injuries.",
    },
    {
      image: heroBg2,
      title: "Advanced Patholab Services",
      subtitle: "Accurate tests, fast reports and trusted diagnostic care.",
    },
    {
      image: heroBg3,
      title: "Pain-Free Joint Movement Starts Here",
      subtitle: "Specialized treatment for knee, back and shoulder pain.",
    },
  ];

  return (
    <section className="hero-section">
      {/* Bootstrap Carousel */}
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={3000}
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Background Image */}
            <div
              className="hero-slide"
              style={{
                background: `url(${slide.image}) center/cover no-repeat`,
              }}
            >
              {/* Overlay */}
              <div className="hero-overlay"></div>

              {/* Content */}
              <div className="hero-content container">
                {/* <h1 className="hero-title">{slide.title}</h1> */}
                <h1 className="hero-title">
                  {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                  {slide.title.split(" ").slice(2).join(" ")}
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  {/* Book Appointment */}
                  {/* <Button
                    className="book-btn"
                    onClick={() => setShow(true)}
                  >
                    Book Appointment
                  </Button> */}

                  {/* Call Doctor */}
                  <Button
                    className="call-btn"
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    <FaPhoneAlt /> Call Doctor
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm onSuccess={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Banner;

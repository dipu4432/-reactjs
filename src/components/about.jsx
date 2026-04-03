import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCheck } from "react-icons/fa";
import "./about.css";
import Doctor from "../assets/doctor.webp";
import { IoIosArrowForward } from "react-icons/io";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="about-img-wrapper">
              <img
                src={Doctor}
                alt="Dr. Shekhar Tiwari"
                className="about-img"
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <h2 className="about-title">About Dr. Shekhar Tiwari</h2>

            <div className="about-line"></div>

            {/* Points */}
            <ul className="about-list">
  {[
    "Experienced Orthopedic Doctor",
    "Expert in Bone & Joint Treatment",
    "Advanced Fracture Management",
    "Arthritis & Joint Pain Specialist",
    "Knee Pain & Injury Treatment",
    "Personalized Patient Care",
    "Modern Equipment & Techniques",
    "Fast Recovery Focused Treatment",
    "Friendly & Patient-Centered Approach",
    "Trusted by Hundreds of Patients",
  ]
    .slice(0, showMore ? 10 : 5)
    .map((item, index) => (
      <li key={index}>
        <FaCheck className="icon" />
        {item}
      </li>
    ))}
</ul>

            {/* Button */}
            <button
  className="about-btn d-flex align-items-center gap-2"
  onClick={() => setShowMore(!showMore)}
>
  {showMore ? "Read Less" : "Read More"}
  <IoIosArrowForward size={18} />
</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

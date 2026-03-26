import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCheck } from "react-icons/fa";
import "./about.css";
import Doctor from "../assets/doctor.jpg";
import { IoIosArrowForward } from "react-icons/io";

function About() {
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
              <li>
                <FaCheck className="icon" />
                Experienced Orthopedic Doctor
              </li>
              <li>
                <FaCheck className="icon" />
                Bone & Joint Specialist
              </li>
              <li>
                <FaCheck className="icon" />
                Many successful treatments
              </li>
            </ul>

            {/* Button */}
            <button className="about-btn d-flex align-items-center gap-2">
              Read More <IoIosArrowForward size={18} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

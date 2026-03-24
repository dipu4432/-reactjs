import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBone, FaHandHoldingMedical, FaDumbbell } from "react-icons/fa";
import { GiKneeCap } from "react-icons/gi";
import "./services.css";

function Services() {
  const services = [
    {
      icon: <FaBone size={28} />,
      title: "Fracture Treatment",
      desc: "Bones & Joint Fracture Care",
    },
    {
      icon: <FaBone size={28} />,
      title: "Joint Pain Treatment",
      desc: "Relief from Joint Pain",
    },
    {
      icon: <FaHandHoldingMedical size={28} />,
      title: "Arthritis Treatment",
      desc: "Arthritis & Joint Inflammation Care",
    },
    {
      icon: <FaDumbbell size={28} />,
      title: "Physiotherapy",
      desc: "Rehabilitation & Physical Therapy",
    },
    {
      icon: <GiKneeCap size={28} />,
      title: "Knee Pain Treatment",
      desc: "Advanced Knee Pain Care",
    },
  ];

  return (
    <section className="services-section">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold mb-5 services-title">
          Services We Provide
        </h2>

        {/* Cards */}
        <Row className="g-4 justify-content-center">
          {services.map((item, index) => (
            <Col key={index} className="custom-col">
              <div className="service-card">
                
                {/* Icon */}
                <div className="icon-circle">
                  {item.icon}
                </div>

                {/* Title */}
                <h5 className="fw-bold">{item.title}</h5>

                {/* Description */}
                <p className="text-muted">{item.desc}</p>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
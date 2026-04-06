import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiKneeCap } from "react-icons/gi";
import { MdEmergency } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import {
  FaHospital,
  FaClock,
  FaHandHoldingMedical,
  FaShieldAlt,
  FaBolt,
  FaClinicMedical,
} from "react-icons/fa";

function Features() {
  const features = [
  {
    icon: <GiKneeCap size={28} />,
    title: "Orthopedic Specialist",
    desc: "Bones & Joint Treatment",
  },
  {
    icon: <FaHospital size={28} />,
    title: "Modern Facilities",
    desc: "Advanced medical equipment",
  },
  {
    icon: <FaClock size={28} />,
    title: "Timely Consultation",
    desc: "Quick patient care",
  },
  {
    icon: <FaHandHoldingMedical size={28} />,
    title: "Affordable Treatment",
    desc: "Quality healthcare",
  },
  {
    icon: <MdEmergency size={28} />,
    title: "Emergency Care",
    desc: "24/7 Emergency Support",
  },
  {
    icon: <FaClinicMedical size={28} />,
    title: "Trusted Clinic",
    desc: "Reliable & trusted care",
  },
  {
    icon: <RiHealthBookFill size={28} />,
    title: "Hygiene & Safety",
    desc: "Clean & safe environment",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Quick Recovery",
    desc: "Fast healing process",
  },
];

  return (
    <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}>
      <Container>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    backgroundColor: "#4c8fb5",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Features;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFlask, FaClock, FaHome, FaCog, FaUserMd, FaFileAlt, FaShieldAlt, FaWallet } from "react-icons/fa";

function PythoFeatures() {
  const features = [
    {
      icon: <FaFlask size={28} />,
      title: "Accurate Testing",
      desc: "High accuracy Report",
    },
    {
      icon: <FaClock size={28} />,
      title: "Fast Report",
      desc: "Quick report delivery",
    },
    {
      icon: <FaHome size={28} />,
      title: "Home Sample Collection",
      desc: "Doorstep sample pickup",
    },
    {
      icon: <FaCog size={28} />,
      title: "Advanced Equipment",
      desc: "Modern lab technology",
    },
    {
      icon: <FaUserMd size={28} />,
      title: "Experienced Staff",
      desc: "Skilled lab technicians",
    },
    {
      icon: <FaFileAlt size={28} />,
      title: "Digital Reports",
      desc: "Online report access",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Hygiene & Safety",
      desc: "Clean & safe environment",
    },
    {
      icon: <FaWallet size={28} />,
      title: "Affordable Packages",
      desc: "Budget-friendly tests",
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

export default PythoFeatures;
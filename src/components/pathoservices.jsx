import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaTint,
  FaVial,
  FaHeartbeat,
  FaToiletPaper,
  FaStethoscope,
} from "react-icons/fa";
import { GiKidneys, GiLiver } from "react-icons/gi";

function PathoServices() {
  const services = [
    {
      icon: <FaTint size={50} />,
      title: "Anaemia & Infection",
      tests: ["Complete blood count (CBC).", "ESR."],
    },
    {
      icon: <FaVial size={50} />,
      title: "Diabetes",
      tests: [
        "Fasting blood sugar (FBS).",
        "Post prandial blood sugar (PPBS).",
        "HbA1c (Glycated Haemoglobin).",
        "Random blood sugar (RBS).",
      ],
    },
    {
      icon: <GiLiver size={50} />,
      title: "Liver",
      tests: ["SGOT (AST).", "SGPT (ALT)."],
    },
    {
      icon: <FaStethoscope size={50} />,
      title: "Thyroid",
      tests: ["T3.", "T4.", "TSH."],
    },
    {
      icon: <FaToiletPaper size={50} />,
      title: "Urine",
      tests: ["Routine & Microscopic Examination"],
    },
    {
      icon: <GiKidneys size={50} />,
      title: "Kidney",
      tests: ["Urea.", "Creatinine."],
    },
    {
      icon: <FaHeartbeat size={50} />,
      title: "Heart",
      tests: ["Cholesterol (Total).", "Triglycerides."],
    },
  ];

  return (
    <section style={{ background: "#eef2f6", padding: "50px 0" }}>
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          style={{ fontSize: "2.3rem", color: "#111" }}
        >
          Services We Provide
        </h2>

        <Row className="g-4 justify-content-center">
          {services.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <div
                style={{
                  background: "#dfe6ef",
                  borderRadius: "12px",
                  padding: "22px 18px",
                  minHeight: "240px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <div className="text-center mb-3" style={{ color: "#d9534f" }}>
                  {item.icon}
                </div>

                <h5 className="fw-bold text-center mb-3">{item.title}</h5>

                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    fontSize: "14px",
                    color: "#444",
                    lineHeight: "1.8",
                  }}
                >
                  {item.tests.map((test, i) => (
                    <li key={i}>{test}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PathoServices;
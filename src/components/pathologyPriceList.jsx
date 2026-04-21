import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PathologyPriceList() {
  const tests = [
    ["Hemoglobin", "60/-"],
    ["Complete Blood Count", "250/-"],
    ["Blood Group", "60/-"],
    ["Sickling Test", "160/-"],
    ["Blood Sugar", "50/-"],
    ["HbA1c", "500/-"],
    ["Renal Function Test", "300/-"],
    ["Liver Function Test", "550/-"],
    ["Lipid Profile", "550/-"],
    ["Thyroid Function Test", "500/-"],
    ["Uric Acid", "160/-"],
    ["Vitamin D3", "1200/-"],
    ["Vitamin B12", "800/-"],
    ["Urine Routine", "100/-"],
  ];

  const packageTests = [
    "CBC",
    "Blood Group",
    "Cholest",
    "ESR",
    "RFT",
    "RFT",
    "RBS",
    "Bilirubin",
    "Bilirubin",
    "HbA1c",
    "SGOT, SGPT",
    "SGOT, SGPT",
  ];

  return (
    <section style={{ background: "#eef2f6", padding: "20px 0" }}>
      <Container>
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            border: "1px solid #32b86c",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#32b86c",
              color: "#fff",
              textAlign: "center",
              padding: "14px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Pathology Lab
          </div>

          {/* Content */}
          <div style={{ padding: "30px 25px" }}>
            <Row className="g-4">
              {/* Left Side */}
              <Col lg={5}>
                {tests.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px dashed #ddd",
                      padding: "7px 0",
                      fontSize: "17px",
                    }}
                  >
                    <span>
                      <span style={{ color: "#d6801f" }}>• </span>
                      {item[0]}
                    </span>
                    <span>{item[1]}</span>
                  </div>
                ))}
              </Col>
              

              {/* Right Side */}
              <Col lg={7}>
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Complete Health Package{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "24px",
                    }}
                  >
                    2060
                  </span>{" "}
                  - 1500
                </h3>

                <Row>
                  {packageTests.map((test, index) => (
                    <Col xs={6} md={4} key={index} className="mb-3">
                      <div
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                        }}
                      >
                        {test}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PathologyPriceList;
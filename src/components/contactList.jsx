import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactList() {
  return (
    <div className="contact-card" style={{ background: "#eef2f6", padding: "30px 0" }}>
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>

        <Row className="g-4 justify-content-center">
          {/* Address Card */}
          <Col md={6}>
            <div
              style={{
                background: "linear-gradient(to bottom, #ECF2FE 0%, #FFFFFF 40%, #FFFFFF 60%, #ECF2FE 100%)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <p className="mb-1">
                <strong>Address:</strong>
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                Tiwari Nursing Home, Near Mini Mata Chowk,
                Ring Road, Bilaspur-Chhattisgarh-495001,
                Chhattisgarh.
              </p>
            </div>
          </Col>

          {/* Mobile Number Card */}
          <Col md={6}>
            <div
              style={{
                background: "linear-gradient(to bottom, #ECF2FE 0%, #FFFFFF 40%, #FFFFFF 60%, #ECF2FE 100%)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <p className="mb-1">
                <strong>Mobile Number:</strong>
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                09901106057 <br />
                09300310670
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactList;
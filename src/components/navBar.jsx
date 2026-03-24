import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        
        {/* Logo / Title */}
        <Navbar.Brand className="fw-bold fs-4">
          Tiwari Nursing Home
        </Navbar.Brand>

        {/* Toggle button (mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Reviews</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          {/* Button */}
          <Button
            style={{
              backgroundColor: "#28a745",
              border: "none",
              padding: "8px 16px",
              fontWeight: "500",
            }}
          >
            Book Appointment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
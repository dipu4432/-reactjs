import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AppointmentForm from "./components/AppointmentForm";

function BookAppointmentPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Button */}
      <Button variant="primary" onClick={() => setShow(true)}>
        Book Appointment
      </Button>

      {/* Modal Popup */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookAppointmentPopup;
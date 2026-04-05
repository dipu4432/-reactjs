import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CallbackForm from "./callBackForm";

function CallbackPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Button */}
      <Button
        style={{
          backgroundColor: "#9228a7",
          border: "none",
          padding: "8px 16px",
          fontWeight: "500",
          marginRight: "10px",
        }}
        onClick={() => setShow(true)}
      >
        Request a Callback
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request a Callback</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CallbackForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CallbackPopup;
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./doctors.css";
import AppointmentForm from "./appointmentForm";

function DoctorCard({
  name,
  title,
  hospital,
  tags = [],
  experience,
  fees,
  location,
  icon: Icon,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="doctor-card mb-4">
      {/* Header */}
      <div className="doctor-header">

        {/* Doctor Icon */}
        <div className="doctor-icon-box">
          <Icon className="doctor-icon" />
        </div>

        <div>
          <h5 className="doctor-name">{name}</h5>
          <p className="doctor-title">{title}</p>
          <p className="doctor-hospital">{hospital}</p>

          {/* Tags */}
          <div className="doctor-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          {/* Info */}
          <div className="doctor-info">
            <div>
              <strong>{experience}+ Years</strong>
              <p>Experience</p>
            </div>

            <div>
              <strong>₹ {fees}</strong>
              <p>Fees</p>
            </div>
          </div>

          {/* Location */}
          <p className="doctor-location">
            📍 Available at <strong>{location}</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="doctor-footer">
        <button className="btn-fill" onClick={() => setShow(true)}>
          Book Appointment
        </button>
      </div> */}

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment with {name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm doctorName={name} onSuccess={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DoctorCard;
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./doctors.css";
import AppointmentForm from "./appointmentForm";
import { useNavigate } from "react-router-dom";

function DoctorCard({
  id,
  name,
  title,
  hospital,
  tags = [],
  experience,
  fees,
  location,
  image,
}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="doctor-card mb-5">
      {/* Top Section */}
      <div className="doctor-header">
        <img src={image} alt={name} className="doctor-img" />

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
              <strong>{experience} Years</strong>
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

      {/* Buttons */}
      <div className="doctor-footer">
        {/* <button
          className="btn-outline"
          onClick={() => navigate("/about")}
        >
          View Full Profile
        </button> */}
        <button
          className="btn-outline"
          onClick={() =>
            navigate(`/doctor/${id}`, {
              state: {
                doctor: {
                  name,
                  title,
                  hospital,
                  experience,
                  fees,
                  location,
                  image,
                  tags,
                },
              },
            })
          }
        >
          View Full Profile
        </button>

        <button className="btn-fill" onClick={() => setShow(true)}>
          Book An Appointment
        </button>
      </div>

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

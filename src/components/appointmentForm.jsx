import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./appointmentForm.css";

function AppointmentForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Date select
  const handleDateSelect = (date) => {
    setFormData({ ...formData, date });
  };

  // ✅ Time select
  const handleTimeSelect = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.confirm) {
      alert("Please confirm your details first.");
      return;
    }

    if (!formData.date || !formData.time) {
      alert("Please select date and time.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwKupyUxDkH1MFTb2HLwoxNNE_N5ugmNeU2ek1aFOIyHInURKuaZSNqVKSBIG3D3XgOVw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      alert("Appointment Submitted ✅");

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
        confirm: false,
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <h5 className="text-center mb-3 fw-bold">Book Appointment</h5>

      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Date */}
        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* ✅ Time Sections */}
        <div className="mb-3">
          <p className="fw-bold mb-2">Select Time</p>

          <p className="mb-1">Morning</p>
          <div className="time-boxes mb-2">
            {["9:00 AM", "10:00 AM", "11:00 AM"].map((time) => (
              <div
                key={time}
                className={`time-box ${formData.time === time ? "active" : ""}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>

          <p className="mb-1">Afternoon</p>
          <div className="time-boxes mb-2">
            {["1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
              <div
                key={time}
                className={`time-box ${formData.time === time ? "active" : ""}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>

          <p className="mb-1">Evening</p>
          <div className="time-boxes">
            {["5:00 PM", "6:00 PM", "7:00 PM"].map((time) => (
              <div
                key={time}
                className={`time-box ${formData.time === time ? "active" : ""}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        {/* Reason */}
        <Form.Group className="mb-3">
          <Form.Select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Select reason</option>
            <option>Knee Pain</option>
            <option>Back Pain</option>
            <option>Broken Leg</option>
            <option>Broken Hand</option>
            <option>General Checkup</option>
          </Form.Select>
        </Form.Group>

        {/* Confirm */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="confirm"
            label="I confirm details are correct"
            checked={formData.confirm}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Submit */}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit Appointment
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AppointmentForm;

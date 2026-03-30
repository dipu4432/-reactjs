import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AppointmentForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.confirm) {
      alert("Please confirm your details first.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyhHfGyuOPbxmNNKyT4Bi2vfc8GN2_0eIXmF7EKnaeXkfGB6_WG2Jd0gf5IUr_YStvmZg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      alert("Appointment Submitted ✅");

      setFormData({
        name: "",
        phone: "",
        date: "",
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
      <h5 className="text-center mb-3 fw-bold">
        Book Appointment
      </h5>

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
            <option>Fever</option>
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
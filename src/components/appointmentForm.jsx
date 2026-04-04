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
    // confirm: false,
  });
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      // [name]: type === "checkbox" ? checked : value,
      [name]: value,
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

  const validateForm = () => {
    // Name
    if (!formData.name.trim()) {
      alert("Name is required");
      return false;
    }

    // Phone (India: 10 digits)
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Enter valid 10-digit phone number");
      return false;
    }

    // Date (not past)
    const today = new Date().toISOString().split("T")[0];
    if (!formData.date || formData.date < today) {
      alert("Please select a valid date");
      return false;
    }

    // Time
    if (!formData.time) {
      alert("Please select time");
      return false;
    }

    // Reason
    if (!formData.reason) {
      alert("Please select reason");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.confirm) {
    //   alert("Please confirm your details first.");
    //   return;
    // }

    // if (!formData.date || !formData.time) {
    //   alert("Please select date and time.");
    //   return;
    // }

    if (!validateForm()) return;

    setLoading(true); // ✅ start loading

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Appointment Submitted ✅");

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
        // confirm: false,
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <h5 className="text-center mb-3 fw-bold">Book Appointment</h5> */}

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
            placeholder="Select Date"
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
        {/* <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="confirm"
            label="I confirm details are correct"
            checked={formData.confirm}
            onChange={handleChange}
          />
        </Form.Group> */}

        {/* Submit */}
        <div className="d-grid">
          <Button variant="primary" type="submit" disabled={loading}>
            {/* Submit Appointment */}
            {loading ? "Submitting..." : "Submit Appointment"}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AppointmentForm;

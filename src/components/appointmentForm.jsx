import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./appointmentForm.css";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

function AppointmentForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); 

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  // real-time validation function
  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
    }

    if (name === "phone") {
      if (!value) error = "Phone is required";
      else if (!/^[6-9]\d{9}$/.test(value))
        error = "Enter valid 10-digit number";
    }

    if (name === "reason") {
      if (!value) error = "Please select reason";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // updated handleChange
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Name: block numbers
    if (name === "name") {
      if (!/^[A-Za-z\s.-]*$/.test(value)) return;
    }

    // Phone: only digits
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value); // real-time validation
  };

  // Date select
  const handleDateSelect = (date) => {
    setFormData({ ...formData, date });

    if (!date) {
      setErrors((prev) => ({ ...prev, date: "Select date" }));
    } else {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  // Time select
  const handleTimeSelect = (time) => {
    setFormData({ ...formData, time });

    setErrors((prev) => ({ ...prev, time: "" }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.dismiss();
      toast.warning("Name is required");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast.warning("Enter valid 10-digit phone number");
      return false;
    }

    const today = new Date().toISOString().split("T")[0];
    if (!formData.date || formData.date < today) {
      toast.warning("Please select a valid date");
      return false;
    }

    if (!formData.time) {
      toast.warning("Please select time");
      return false;
    }

    if (!formData.reason) {
      toast.warning("Please select reason");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const toastId = toast.loading("Submitting...");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.update(toastId, {
        render: "Appointment Submitted",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
      });

      setErrors({});

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error:", error);

      toast.update(toastId, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Name */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Phone */}
      <Form.Group className="mb-3">
        <Form.Control
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Date */}
      <Form.Group className="mb-3">
        <div style={{ position: "relative" }}>
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date) =>
              handleDateSelect(date.toISOString().split("T")[0])
            }
            minDate={new Date()}
            placeholderText="Select Date"
            dateFormat="yyyy-MM-dd"
            className="form-control"
          />

          <FaCalendarAlt
            size={16}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#817f08",
            }}
          />
        </div>
        {errors.date && <small className="text-danger">{errors.date}</small>}
      </Form.Group>

      {/* Time */}
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

        {errors.time && <div className="text-danger">{errors.time}</div>}
      </div>

      {/* Reason */}
      <Form.Group className="mb-3">
        <Form.Select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          isInvalid={!!errors.reason}
        >
          <option value="">Select reason</option>
          <option>Knee Pain</option>
          <option>Back Pain</option>
          <option>Broken Leg</option>
          <option>Broken Hand</option>
          <option>General Checkup</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.reason}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Submit */}
      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Appointment"}
        </Button>
      </div>
    </Form>
  );
}

export default AppointmentForm;
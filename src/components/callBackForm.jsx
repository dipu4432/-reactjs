import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const CALLBACK_SCRIPT_URL = import.meta.env.VITE_CALLBACK_SCRIPT_URL;

function CallbackForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change with UX validation
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Name: allow only letters, space, dot, hyphen
    if (name === "name") {
      if (!/^[A-Za-z\s.-]*$/.test(value)) return;
    }

    // Phone: allow only digits, max 10
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    // Comments: limit 200
    if (name === "comments") {
      value = value.slice(0, 200);
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    validateField(name, value);
  };

  // Validate single field (UX improvement)
  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      }
    }

    if (name === "phone") {
      if (!value) {
        error = "Phone number is required";
      } else if (!/^[6-9]\d{9}$/.test(value)) {
        error = "Enter valid 10-digit number";
      }
    }

    if (name === "comments") {
      if (value.length > 200) {
        error = "Max 200 characters allowed";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Full validation before submit
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (formData.comments.length > 200) {
      newErrors.comments = "Max 200 characters allowed";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors");
      return;
    }

    try {
      setLoading(true);

      await fetch(CALLBACK_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Callback request sent successfully!");

      if (onSuccess) onSuccess();

      setFormData({
        name: "",
        phone: "",
        comments: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
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
          placeholder="Your Name"
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

      {/* Comments */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          name="comments"
          placeholder="Comments"
          rows={3}
          value={formData.comments}
          onChange={handleChange}
          isInvalid={!!errors.comments}
        />
        <div className="text-end small text-muted">
          {formData.comments.length}/200
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.comments}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Submit */}
      <Button type="submit" className="w-100" disabled={loading}>
        {loading ? "Sending..." : "Request a Callback"}
      </Button>
    </Form>
  );
}

export default CallbackForm;
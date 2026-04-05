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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.comments.length > 200) {
      newErrors.comments = "Comments must be under 200 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
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

      toast.success("Callback request sent successfully. We will contact you soon!");

      // close modal from parent (Navbar)
      if (onSuccess) onSuccess();

      setFormData({
        name: "",
        phone: "",
        comments: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again!");
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
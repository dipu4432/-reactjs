import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import "./banner.css";
import heroBg from "../assets/hero-bg.jpg";

function Banner() {
  return (
    <section
      className="hero-section"
      style={{
        background: `url(${heroBg}) center/cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        {/* Heading */}
        <h1 className="hero-title">
          Trusted Orthopedic <br />
          Care in Bilaspur
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Expert treatment for bones, joints and injuries.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">
            <FaCalendarAlt /> Book Appointment
          </button>

          <button className="btn-secondary">
            <FaPhoneAlt /> Call Doctor
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

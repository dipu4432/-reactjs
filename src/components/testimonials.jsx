import { FaStar } from "react-icons/fa";
import user2 from "../assets/doctor.jpg";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Patient Reviews</h2>

        <div className="row g-4 mb-3">
          {/* Map Card */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card p-3 shadow-sm rounded h-100">
              <h5 className="fw-bold mb-3">Google Map</h5>

              <div style={{ position: "relative" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949238.4586701337!2d81.2431527555758!3d21.66530718347842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b3c438b8b81%3A0xfc65aaaed727c0be!2sTiwari%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1774532816446!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "10px" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Review 1 */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card p-4 shadow-sm rounded h-100">
              <div className="d-flex align-items-center mb-3 gap-3">
                <img
                  src="/assets/user1.jpg"
                  className="rounded-circle"
                  width="50"
                  height="50"
                  alt="user"
                />
                <h6 className="mb-0 fw-bold">Rinju Singh</h6>
              </div>

              <p className="text-muted">
                Best orthopedic doctor in Bilaspur. I got relief from knee pain.
              </p>

              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card p-4 shadow-sm rounded h-100">
              <div className="d-flex align-items-center mb-3 gap-3">
                <img
                  src={user2}
                  className="rounded-circle"
                  width="50"
                  height="50"
                  alt="user"
                />
                <h6 className="mb-0 fw-bold">Sujit Singh</h6>
              </div>

              <p className="text-muted">
                Highly recommended. Doctor explains everything clearly.
              </p>

              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

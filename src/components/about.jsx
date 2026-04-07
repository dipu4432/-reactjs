import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return <h2 className="text-center mt-5">No Doctor Data Found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="card p-4 shadow">
        <div className="d-flex gap-4 align-items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{ width: "120px", borderRadius: "50%" }}
          />

          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.title}</p>
            <p>{doctor.hospital}</p>
          </div>
        </div>

        <hr />

        <div className="d-flex gap-5 mt-3">
          <div>
            <h5>{doctor.experience} Years</h5>
            <p>Experience</p>
          </div>
          <div>
            <h5>₹ {doctor.fees}</h5>
            <p>Fees</p>
          </div>
        </div>

        <p className="mt-3">
          📍 Available at <strong>{doctor.location}</strong>
        </p>

        <div className="mt-3">
          {doctor.tags.map((tag, i) => (
            <span key={i} className="badge bg-secondary me-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
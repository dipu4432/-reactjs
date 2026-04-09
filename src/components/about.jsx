import { useParams } from "react-router-dom";
import doctors from "../data/doctorsData";
import "./about.css";

function About() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return <h2 className="text-center mt-5">No Doctor Found</h2>;
  }

  return (
    <div
      style={{ backgroundColor: "#f4f6f9" }}
    >
      <div className="container py-4">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-7">
            {/* Doctor Header */}
            <div className="doctor-header-card">
              <img src={doctor.image} alt={doctor.name} />

              <div>
                <h4>{doctor.name}</h4>
                <p className="title">{doctor.title}</p>

                <div className="tags">
                  {doctor.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* About */}
            <div className="info-card">
              <h6>About</h6>
              <p>{doctor.about}</p>
            </div>

            {/* Education */}
            <div className="info-card">
              <h6>Education</h6>
              <p>{doctor.education}</p>
            </div>

            {/* Awards */}
            <div className="info-card">
              <h6>Awards & Accolades</h6>
              <p>{doctor.awards}</p>
            </div>

            {/* Publications */}
            <div className="info-card">
              <h6>Publications</h6>
              <p>{doctor.publications}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5">
            <div className="appointment-card">
              <h5>Schedule Appointment</h5>

              <div className="btn-group">
                <button className="active">Book Hospital Visit</button>
                <button>Book Video Consult</button>
              </div>

              {/* Date Row */}
              <div className="date-row">
                {[
                  "Wed 08 Apr",
                  "Thu 09 Apr",
                  "Fri 10 Apr",
                  "Sat 11 Apr",
                  "Sun 12 Apr",
                ].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              <p className="no-slot">
                No slots available for the selected date.
              </p>

              <div className="action-btns">
                <button className="primary">Find Next Slot</button>
                <button className="secondary">Request A Call Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

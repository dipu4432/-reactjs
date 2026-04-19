import DoctorCard from "./doctorCard";
import doctors from "../data/doctorsData";

function Doctors() {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {doctors.map((doc) => (
          <div className="col-lg-4 col-md-6 col-12 d-flex" key={doc.id}>
            <DoctorCard
              name={doc.name}
              title={doc.title}
              hospital={doc.hospital}
              tags={doc.tags}
              experience={doc.experience}
              fees={doc.fees}
              location={doc.location}
              icon={doc.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
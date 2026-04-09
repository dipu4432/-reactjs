import DoctorCard from "./doctorCard";
import doctors from "../data/doctorsData";

function Doctors() {
  return (
    <div className="container mt-4 d-flex gap-4 flex-wrap justify-content-center">
      {doctors.map((doc) => (
        <DoctorCard
          key={doc.id}
          id={doc.id}
          name={doc.name}
          title={doc.title}
          hospital={doc.hospital}
          tags={doc.tags}
          experience={doc.experience}
          fees={doc.fees}
          location={doc.location}
          image={doc.image}
        />
      ))}
    </div>
  );
}

export default Doctors;
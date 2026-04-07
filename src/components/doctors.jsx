import DoctorCard from "./doctorCard";
import doc1 from "../assets/doctor.webp";
import doc2 from "../assets/doctor2.jpeg";

function Doctors() {
  return (
    <div className="container mt-4 d-flex gap-4 flex-wrap justify-content-center">
      <DoctorCard
        name="Dr. Shekhar Tiwari"
        title="HEAD OF ORTHOPEDIC DEPARTMENT"
        hospital="Orthopedic Surgeon at Tiwari Nursing Home"
        tags={["Cardiac Sciences", "Interventional Cardiology"]}
        experience={35}
        fees={2000}
        location="Bilaspur, Chhattisgarh"
        image={doc1}
      />

      <DoctorCard
        name="Dr. Vaibhav Tiwari"
        title="ASSISTANT CONSULTANT - GENERAL SURGERY"
        hospital="Orthopedic Surgeon at Tiwari Nursing Home"
        tags={[
          "General Surgery",
          "Laparoscopic Surgery",
          "Oncology",
        ]}
        experience={25}
        fees={1500}
        location="Bilaspur, Chhattisgarh"
        image={doc2}
      />
    </div>
  );
}

export default Doctors;
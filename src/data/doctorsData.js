import doc1 from "../assets/doctor.webp";
import doc2 from "../assets/doctor2.jpeg";

const doctors = [
  {
    id: "shekhar-tiwari",
    image: doc1,
    name: "Dr. Shekhar Tiwari",
    title: "Senior Orthopedic Surgeon & Trauma Specialist",
    experience: 38,
    fees: 1600,
    hospital: "Orthopedic and Trauma Center, Bilaspur",
    tags: [
      "Joint Replacement",
      "Fracture Treatment",
      "Trauma Surgery",
      "Arthroscopy",
      "Spine Care",
    ],
    about:
      "Dr. Shekhar Tiwari is a highly experienced orthopedic surgeon specializing in joint replacement and trauma care. With decades of surgical expertise, he has successfully treated complex fractures, sports injuries, and degenerative bone conditions.",
    education:
      "MBBS, MS (Orthopedics), Fellowship in Joint Replacement Surgery",
    awards:
      "Recognized for excellence in orthopedic surgery with thousands of successful joint replacement and trauma surgeries.",
    publications:
      "Published research on advanced fracture management, joint replacement techniques, and minimally invasive orthopedic procedures.",
  },

  {
    id: "vaibhav-tiwari",
    image: doc2,
    name: "Dr. Vaibhav Tiwari",
    title: "Consultant Orthopedic Surgeon",
    experience: 25,
    fees: 1500,
    hospital: "Orthopedic and Trauma Center, Bilaspur",
    tags: [
      "Sports Injury",
      "Arthroscopy",
      "Ligament Reconstruction",
      "Knee & Shoulder Surgery",
      "Minimally Invasive Surgery",
    ],
    about:
      "Dr. Vaibhav Tiwari specializes in sports injuries and minimally invasive orthopedic procedures. He focuses on quick recovery treatments for ligament injuries, joint pain, and mobility issues.",
    education:
      "MBBS, MS (Orthopedics), Fellowship in Arthroscopy & Sports Medicine",
    awards:
      "Awarded for excellence in sports injury management and arthroscopic surgery.",
    publications:
      "Research work in arthroscopy, ligament reconstruction, and sports injury rehabilitation.",
  },
];

export default doctors;
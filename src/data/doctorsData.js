import { FaUserMd, FaFlask } from "react-icons/fa";

const doctors = [
  {
    id: "shekhar-tiwari",
    icon: FaUserMd,
    name: "Dr. Shekhar Tiwari",
    title: "Senior Orthopedic Surgeon & Trauma Specialist",
    experience: 30,
    fees: 600,
    hospital: "Orthopedic and Trauma Center, Bilaspur",
    location: "Bilaspur",
    tags: [
      "Joint Replacement",
      "Fracture Treatment",
      "Trauma Surgery",
      "Arthroscopy",
    ],
  },

  {
    id: "vaibhav-tiwari",
    icon: FaUserMd,
    name: "Dr. Vaibhav Tiwari",
    title: "Consultant Orthopedic Surgeon",
    experience: 6,
    fees: 500,
    hospital: "Orthopedic and Trauma Center, Bilaspur",
    location: "Bilaspur",
    tags: [
      "Sports Injury",
      "Arthroscopy",
      "Ligament Reconstruction",
      "Knee Surgery",
    ],
  },

  {
    id: "city-patholab",
    icon: FaFlask,
    name: "Dr. Palki Tiwari",
    title: "Trusted Diagnostic & Lab Testing Center",
    experience: 6,
    fees: 300,
    hospital: "Advanced Pathology Center, Bilaspur",
    location: "Bilaspur",
    tags: [
      "Blood Test",
      "Urine Test",
      "X-Ray",
      "ECG",
      "Full Body Checkup",
      "Diabetes Test",
    ],
  },
];

export default doctors;
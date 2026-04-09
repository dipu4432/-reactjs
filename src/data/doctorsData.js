import doc1 from "../assets/doctor.webp";
import doc2 from "../assets/doctor2.jpeg";

const doctors = [
  {
    id: "shekhar-tiwari",
    image: doc1,
    name: "Dr. Shekhar Tiwari",
    title: "CHAIRMAN CARDIAC SCIENCE",
    experience: 38,
    fees: 1600,
    hospital: "Orthopedic and Trauma Center, Billaspur",
    tags: ["Cardiac Sciences", "Adult CTVS", "Heart Transplant"],
    about: "Dr. Shekhar Tiwari is listed among the top cardiac surgeons...",
    education: "MBBS, MS, MCh...",
    awards: "Top cardiac surgeon with 20,000+ surgeries...",
    publications: "Highest number of TAVR surgeries...",
  },

  {
    id: "vaibhav-tiwari",
    image: doc2,
    name: "Dr. Vaibhav Tiwari",
    title: "HOD GI SURGERY",
    experience: 25,
    fees: 1500,
    hospital: "Orthopedic and Trauma Center, Billaspur",
    tags: ["General Surgery", "Laparoscopic Surgery", "Oncology"],
    about: "Expert in GI and bariatric surgery...",
    education: "MBBS, MS...",
    awards: "Recognized GI surgeon...",
    publications: "Research in GI oncology...",
  },
];

export default doctors;
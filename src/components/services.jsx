import Container from "react-bootstrap/Container";
import "./services.css";

import fractureImg from "../assets/services/fracture-treatment.webp";
import jointImg from "../assets/services/joint.webp";
import arthritisImg from "../assets/services/arthritis-treatment.webp";
import physioImg from "../assets/services/Physiotherapy.webp";
import kneeImg from "../assets/services/knee.webp";

function Services() {
  const services = [
    {
      image: fractureImg,
      title: "Fracture Treatment",
      desc: "Bones & Joint Fracture Care",
    },
    {
      image: jointImg,
      title: "Joint Pain Treatment",
      desc: "Relief from Joint Pain",
    },
    {
      image: arthritisImg,
      title: "Arthritis Treatment",
      desc: "Arthritis & Joint Inflammation Care",
    },
    {
      image: physioImg,
      title: "Physiotherapy",
      desc: "Rehabilitation & Physical Therapy",
    },
    {
      image: kneeImg,
      title: "Knee Pain Treatment",
      desc: "Advanced Knee Pain Care",
    },
  ];

  return (
    <section className="services-section">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold services-title">
          Services We Provide
        </h2>

        {/* Row */}
        <div className="services-row">
          {services.map((item, index) => (
            <div key={index} className="service-card-wrapper">
              
              <div className="service-card">
                {/* Icon */}
                <div className="icon-circle">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-img"
                  />
                </div>

                {/* Title */}
                <h5 className="fw-bold">{item.title}</h5>

                {/* Description */}
                <p className="text-muted">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
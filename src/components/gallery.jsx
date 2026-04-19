import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./gallery.css";

import g1 from "../assets/gallery/gallery1.webp";
import g2 from "../assets/gallery/gallery2.webp";
import g3 from "../assets/gallery/gallery3.webp";
import c1 from "../assets/gallery/img1.webp";
import c2 from "../assets/gallery/img2.webp";
import c3 from "../assets/gallery/img3.webp";
import c4 from "../assets/gallery/img4.webp";
import about from "../assets/gallery/about.webp";
import comp from "../assets/gallery/comp.webp";
import detailing from "../assets/gallery/detailing.webp";
import fever from "../assets/gallery/fever.webp";
import inside from "../assets/gallery/inside.webp";
import inv from "../assets/gallery/inv.webp";
import main from "../assets/gallery/main.webp";
import pathHome from "../assets/gallery/path-home.webp";
import rest from "../assets/gallery/rest.webp";
import sug from "../assets/gallery/sug.webp";
import sugar from "../assets/gallery/sugar.webp";

function Gallery() {
  const images = [g1, g2, g3, c1, c2, c3, c4, about, comp, detailing, fever, inside, inv, main, pathHome, rest, sug, sugar];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 576) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 992) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Auto rotate (slightly slower = better UX)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000); // changed to 3s

    return () => clearInterval(interval);
  }, [images.length]);

  // Visible images
  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(images[(startIndex + i) % images.length]);
    }
    return result;
  };

  return (
    <section className="gallery-section">
      <Container>
        <h2 className="text-center fw-bold mb-4">Gallery</h2>

        <div className="gallery-wrapper">
          <div className="gallery-row">
            {getVisibleImages().map((img, index) => (
              <div key={index} className="gallery-card">
                <img src={img} alt={`gallery-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
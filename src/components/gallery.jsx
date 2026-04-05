import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./gallery.css";

import g1 from "../assets/gallery/gallery1.webp";
import g2 from "../assets/gallery/gallery2.webp";
import g3 from "../assets/gallery/gallery3.webp";
import c1 from "../assets/gallery/img1.webp";
import c2 from "../assets/gallery/img2.webp";
import c3 from "../assets/gallery/img3.webp";
import c4 from "../assets/gallery/img4.webp";

function Gallery() {
  const images = [g1, g2, g3, c1, c2, c3, c4];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  //  Responsive visible count
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

  // 👉 Get visible images (circular)
  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(images[(startIndex + i) % images.length]);
    }
    return result;
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <section className="gallery-section">
      <Container>
        <h2 className="text-center fw-bold mb-3">Gallery</h2>

        <div className="gallery-wrapper">
          {/* Prev Button */}
          <button className="nav-btn left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          {/* Images */}
          <div className="gallery-row">
            {getVisibleImages().map((img, index) => (
              <div key={index} className="gallery-card">
                <img src={img} alt="gallery" />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button className="nav-btn right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
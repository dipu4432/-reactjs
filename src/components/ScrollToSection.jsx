import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay ensures DOM is loaded
      }
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToSection;
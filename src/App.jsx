import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import NavBar from "./components/navBar";
import HOME from "./components/home";
import Footer from "./components/footer";
import ScrollToSection from "./components/ScrollToSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pytholab from "./components/pytholab";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Navbar */}
      <NavBar />
      <ScrollToSection />

      {/* Routes */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/doctor/:id" element={<About />} />
          <Route path="/pytholab" element={<Pytholab />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
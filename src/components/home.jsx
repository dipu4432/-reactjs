import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Features from "./features";
import Gallery from "./gallery";
import Services from "./services";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <div>
        <Banner />
        <Features />
        <About />
        <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div>
        <Services />
        <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div>
        <Gallery />
        <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div>
        <Contact />
        <Testimonials />
    </div>
  )
}

export default Home
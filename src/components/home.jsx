import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Features from "./features";
import Gallery from "./gallery";
import Services from "./services";
import Testimonials from "./testimonials";
import ContactList from "./contactList";

const Home = () => {
  return (
    <div>
        <div id="home"><Banner /></div>
        <div id="features"><Features /></div>
        <div id="about"><About /></div>
        {/* <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div> */}
        <div id="services"><Services /></div>
        {/* <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div> */}
        <div id="gallery"><Gallery /></div>
        {/* <div style={{ backgroundColor: "#eef2f6", padding: "40px 0" }}></div> */}
        {/* <div id="contact"><Contact /></div> */}
        <Contact />
        <div id="reviews"><Testimonials /></div>
        <div id="contact"><ContactList /></div>
    </div>
  )
}

export default Home
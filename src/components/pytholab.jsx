import "./pytholab.css";
import bannerImg from "../assets/patholab-bg.webp";

function Pytholab() {
  return (
    <section className="physio-page">
      {/* Banner */}
      <div
        className="physio-banner"
        style={{
          background: `url(${bannerImg}) center/cover no-repeat`,
        }}
      >
        <div className="physio-overlay"></div>

        <div className="physio-content">
          <h1>Advanced Patholab Services</h1>
          <p>
            Accurate testing, trusted diagnostics and fast reports for better
            healthcare decisions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="physio-details">
        <h2>Our Patholab Services</h2>

        <p>
          We provide modern laboratory testing with reliable results and quick
          turnaround time. Our services help doctors diagnose and monitor health
          conditions accurately.
        </p>

        <p>
          Blood tests, urine tests, diabetes screening, thyroid profile, liver
          function test, kidney function test and many more health checkups are
          available.
        </p>
      </div>
    </section>
  );
}

export default Pytholab;
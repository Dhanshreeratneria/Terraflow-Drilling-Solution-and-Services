import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css"; // Ensure this CSS file exists
function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <img
          src="/prduct.jpg"
          alt="Rainbow over field and red truck"
          className="about-image"
        />
        <div className="about-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="about-tagline">
        <p>
          TerraFlow Drilling & Well Service LLP is a family-owned business with
          our main office located in the heart of Madhya Pradesh, in the city of Bhopal.
          We take immense pride in our local communities and strive to contribute
          to their growth and well-being. A dependable water system is essential,
          and we are committed to delivering just that.
        </p>
        <p>
          We have a team of licensed and experienced water well professionals who
          provide personalized service to each of our valued clients. We use
          high-quality products and modern techniques to ensure that your water
          system needs are met with ease, efficiency, and reliability.
        </p>
        <p>
          At TerraFlow, we come from a long legacy of water well specialists—
          three generations strong. Our family has been in the water well industry
          for more than sixty years. Over the decades, we’ve worked with residential
          homeowners, agricultural operations, livestock and dairy farms, local
          municipalities, and irrigation-focused businesses. We take great pride in
          helping our clients meet their goals. A large part of our clientele comes
          through referrals, a reflection of the trust and satisfaction we’ve built
          over the years.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-banner">
          <img
            src="/lasttruck.jpg"
            alt="Drilling Site"
            className="footer-image"
          />
          <button className="consult-button">SCHEDULE A CONSULT</button>
        </div>

        <div className="footer-content">
          {/* Left Section */}
            <div className="footer-left">
            <img
              src="/logo.jpeg"
              alt="TerraFlow"
              className="footer-logo"
            />
            <p className="footer-brand">TerraFlow Drilling and Well Services</p>
            <p className="footer-contact">teraflowdrilling@gmail.com</p>
            <p className="footer-contact">Bhopal, Madhya Pradesh, India</p>
          </div>

          {/* Right Section */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <Link to="/drilling">Drilling</Link>
              <Link to="/PumpInstallation">Pump Installations</Link>
              <Link to="/well-service">Well Service</Link>
              <Link to="/solar-installations">Solar Installations</Link>
              <Link to="/WaterStorage">Water Storage</Link>
              <Link to="/well-rehabilitation">Well Rehabilitation</Link>
              <Link to="/drilling-permits">Drilling Permits</Link>
              <Link to="/well-diagnostics">Well Diagnostics</Link>
              <Link to="/down-hole-camera">Down Hole Camera</Link>
              <Link to="/plugging">Plugging</Link>
              <Link to="/wind-turbines">Wind Turbines</Link>
            </div>

            <div className="footer-column">
              <h4>Info</h4>
              <Link to="/product">Products We Use</Link>
              <Link to="/drilling-permits">Drilling Permits</Link>
              <Link to="aboutus">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;

import { Link } from "react-router-dom";
  import "./HomePage.css";

function HomePage() {
  const services = [
    {
      title: "Drilling",
      image: "/Drilling.webp",
      link: "/drilling",
    },
    {
      title: "Pump Installations",
      image: "/PumpInstallation.jpg",
      link: "/pump-installation",
    },
    {
      title: "Well Service",
      image: "/well-service",
      link: "/well-service",
    },
    {
      title: "Solar Installations",
      image: "/solarinstallation.webp",
      link: "/solar-installations",
    }
  ];

  return (
    <div>
      {/* Hero Section 1 */}
      <div className="homepage-container">
        <div className="homepage-overlay">
          <h4 className="homepage-subtitle">TerraFlow Drilling and Well Services</h4>
          <h1 className="homepage-title">
            Water Solutions for Every <br /> Property
          </h1>
          <div className="homepage-buttons">
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="service-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="overlay">
                <h3>{service.title}</h3>
                <button className="explore-btn">Explore</button>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/services" className="explore-all-btn">
          Explore All Services
        </Link>
      </div>

      {/* Hero Section 2 */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Water Well Drilling Professionals of West Texas</h1>
            <p>
              At TerraFlow Drilling and Well Services LLC, we provide high-quality
              services tailored to your specific needs. Whether you are a rancher,
              homeowner, or commercial company, we build the perfect water system
              for you.
            </p>
            <Link to="/services" className="hero-button">
              Explore All Services
            </Link>
          </div>

          <div className="hero-image">
            <img src="/Truck.jpg" alt="Well Drilling" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-banner">
          <img src="/lasttruck.jpg" alt="Drilling Site" className="footer-image" />
          <button className="consult-button">SCHEDULE A CONSULT</button>
        </div>

        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <img src="/logo.jpeg" alt="Logo" className="footer-logo" />
            <p className="footer-brand">TerraFlow Drilling and Well Services</p>
            <p className="footer-contact">teraflowdrilling@gmail.com</p>
            <p className="footer-contact">P.O. Box 1903, Alpine, TX 79831</p>
          </div>

          {/* Right Section */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <Link to="/drilling">Drilling</Link>
              <Link to="/pump-installation">Pump Installations</Link>
              <Link to="/well-service">Well Service</Link>
              <Link to="/solar-installations">Solar Installations</Link>
              <Link to="/water-storage">Water Storage</Link>
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
              <Link to="/aboutus">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

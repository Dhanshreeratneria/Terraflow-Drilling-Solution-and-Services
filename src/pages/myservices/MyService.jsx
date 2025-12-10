import React from "react";
import { Link } from "react-router-dom";
import "./MyService.css";

function Myservices() {
  return (
    <div className="services-wrapper">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        <div className="service-box">
          <Link to="/Drilling">Drilling</Link>
          <p>Expert drilling services for residential, ranch, agriculture, and commercial needs in Brewster County.</p>
        </div>
        <div className="service-box">
          <Link to="/PumpInstallation">Pump Installations</Link>
          <p>Quality pump installations tailored to your property's specific water needs.</p>
        </div>
        <div className="service-box">
          <Link to="/well-service">Well Service</Link>
          <p>Full-service well maintenance to ensure your water supply remains uninterrupted.</p>
        </div>
        <div className="service-box">
          <Link to="/solar-installations">Solar Installations</Link>
          <p>Switch to efficient solar-powered water systems, ideal for any property.</p>
        </div>
        <div className="service-box">
          <Link to="/WaterStorage">Water Storage</Link>
          <p>Custom water storage solutions to fit your personal or commercial needs.</p>
        </div>
        <div className="service-box">
          <Link to="/well-rehabilitation">Well Rehabilitation</Link>
          <p>Restore your well’s performance with our comprehensive rehabilitation services.</p>
        </div>
        <div className="service-box">
          <Link to="/drilling-permits">Drilling Permits</Link>
          <p>Navigate the legal requirements of water well drilling and ensure your project is compliant.</p>
        </div>
        <div className="service-box">
          <Link to="/well-diagnostics">Well Diagnostics</Link>
          <p>Annual well check-ups to ensure efficient operation and water quality.</p>
        </div>
        <div className="service-box">
          <Link to="/down-hole-camera">Down Hole Camera</Link>
          <p>Identify water well issues with our quality specialized equipment.</p>
        </div>
        <div className="service-box">
          <Link to="/plugging">Plugging</Link>
          <p>Secure & environmentally friendly water well plugging for abandoned wells.</p>
        </div>
        <div className="service-box">
          <Link to="/wind-turbines">Wind Turbines</Link>
          <p>Efficient and sustainable wind turbine installation services.</p>
        </div>
      </div>
    </div>
  );
}

export default Myservices;

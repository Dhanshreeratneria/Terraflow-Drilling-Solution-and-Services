import React from "react";
import "./WellServices.css";

function WellServices() {
  return (
    <div className="well-page">
      <section className="well-header">
        <div className="service-title">
          <span className="service-tag">    SERVICES</span>
          <h1>      Well Service</h1>
        </div>
        <div className="service-image">
          <img
            src="/wellservice.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="well-description">
        <h2>
          Full Service Well Maintenance & Repair for Water Well Systems
        </h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
          We understand that water is a necessity whether you have a residential, agricultural, or commercial system.

        We are a turn-key water well service provider with licensed professionals available for complete well service.  
        </p>
      </section>
    </div>
  );
}

export default WellServices;

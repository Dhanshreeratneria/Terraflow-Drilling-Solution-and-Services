import React from "react";
import "./Drilling.css";

function Drilling() {
  return (
    <div className="drilling-page">
      <section className="drilling-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Drilling</h1>
        </div>
        <div className="service-image">
          <img
            src="/Drilling.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="drilling-description">
        <h2>
          Expert water well drilling service for residential, agricultural, and
          commercial needs in West Texas.
        </h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
          We work with homeowners, ranchers, and commercial properties, tailoring
          our services to customers’ needs—whether it’s deepening, plugging, or
          drilling new wells.
        </p>
      </section>
    </div>
  );
}

export default Drilling;

import React from "react";
import "./WaterStorage.css";

function WaterStorage() {
  return (
    <div className="well-page">
      <section className="well-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Water Storage</h1>
        </div>
        <div className="service-image">
          <img
            src="/Water.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="water-description">
        <h2>
Custom water storage solutions to fit your personal or commercial needs.
        </h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
We can adjust your system to fit your needs. If you need extra water storage and a booster system, we can engineer a system that will work for you. All of our storage tanks are BPA free and designed to withstand the elements to provide you with safe drinking water.
        </p>
      </section>
    </div>
  );
}

export default WaterStorage;

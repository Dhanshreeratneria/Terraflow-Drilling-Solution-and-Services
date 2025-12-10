import React from "react";
import "./PumpInstallation.css";

function PumpInstallation() {
  return (
    <div>
    <div className="pump-page">
      <section className="pump-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Pump Installation</h1>
        </div>
        <div className="service-image">
          <img
            src="\public\PumpInstallation.jpg"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="pump-description">
        <h2>
          Quality pump installations tailored to your property's specific water needs.
        </h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
     We have what you need to help your water system run properly.
        </p>
      </section>
    </div>
    </div>
  )
}

export default PumpInstallation

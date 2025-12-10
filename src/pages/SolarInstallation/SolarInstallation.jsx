import React from "react";
import "./SolarInstallation.css";

function SolarInstallation() {
  return (
    <div className="solar-page">
      <section className="solar-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Solar Installation</h1>
        </div>
        <div className="service-image">
          <img
            src="/solarinstallation.webp"
            alt="Solar-powered water system"
          />
        </div>
      </section>

      <section className="solar-description">
        <h2>Efficient and Flexible Solar Powered Water Systems</h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
          Are you looking to replace a windmill or avoid running electricity to your well site? 
          A solar water system might be an option for you!
        </p>
        <p>
          Solar water systems can be used for residential, agricultural, or commercial solutions. 
          Each of our solar systems is individually sized to fit your specific needs, 
          with options for water storage and dual power configurations. 
          We can also integrate with existing solar systems if you're looking to upgrade.
        </p>
      </section>
    </div>
  );
}

export default SolarInstallation;

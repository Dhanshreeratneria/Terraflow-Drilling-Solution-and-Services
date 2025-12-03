import React from "react";
import "./WellRebilition.css"; // Ideally rename this file too, see note below

function WellRehabilitation() {
  return (
    <div className="wellr-page">
      <section className="wellr-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Well Rehabilitation</h1>
        </div>
        <div className="service-image">
          <img
            src="/Wellre.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="wellr-description">
        <h2>
          Restore your well’s performance with our comprehensive rehabilitation services.
        </h2>
        <p>
          TerraFlow Drilling and Well Service LLC has generational family
          experience with drilling water wells in the area.
        </p>
        <p>
          Diagnosing the problem is the first step in well rehabilitation. Your well may need to be deepened, cleaned out, or have its casing replaced. 
          Whatever the issue, we’ll provide available options and help you create a plan of action that’s right for you.
        </p>
      </section>
    </div>
  );
}

export default WellRehabilitation;

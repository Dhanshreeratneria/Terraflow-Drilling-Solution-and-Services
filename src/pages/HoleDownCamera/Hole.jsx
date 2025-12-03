import React from "react";
import "./Hole.css";

function Hole() {
  return (
    <div className="drilling-page">
      <section className="drilling-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Down Hole Camera</h1>
        </div>
        <div className="service-image">
          <img
            src="\HoleCamera.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="drilling-description">
        <h2>
        Identify Water Well Issues With Our Quality Specialized Equipment.
        </h2>
        <p>
Our down hole camera can be used to help diagnose certain problems or issues 
you might be having with your water well.   We are able to see color images with our 
HERON camera making it a helpful exploratory tool in assessing water wells.        </p>
        <p>
Our HERON down hole water level meter is another specialized tool we can use when assessing water wells.

        </p>
      </section>
    </div>
  );
}

export default Hole;

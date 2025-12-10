import React from "react";
import "./Well.css";

function Well() {
  return (
    <div className="well-page">
      <section className="well-header">
        <div className="service-title">
          <span className="service-tag">SERVICES</span>
          <h1>Well Diagnostic</h1>
        </div>
        <div className="service-image">
          <img
            src="\WellDia.webp"
            alt="Drilling rigs in West Texas"
          />
        </div>
      </section>

      <section className="water-description">
        <h2>
We Can Troubleshoot The Problem! <br></br>
Need to Camera Down a Well or an Official Inspection for a Real Estate Transaction?        </h2>
        <p>
         With years of experience, expert knowledge of wells and water systems, and quality equipment we will inspect and troubleshoot your well water system to help you determine the right course of action.
          </p>
<p>
We offer preventative assessment inspections to ensure your water system is running efficiently. We recommend an annual well inspection in order to catch any issues that can cause premature wear and tear on your water system components.  
        </p>

       
        <p>
        Purchasing a new property?  We also provide official well inspections for real estate transactions. Our inspections are detailed and thorough to help provide you with peace of mind when looking to invest in real estate.

        </p>
      </section>
    </div>
  );
}

export default Well;

import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product-page">
      {/* Header Section */}
      <div className="product-header">
        <img
          src="\prduct.jpg"
          alt="Product banner"
          className="product-image"
        />
        <h1 className="product-title">Products We Use</h1>
      </div>

      {/* Intro Text */}
      <div className="product-content">
        <h2>We take pride in the quality of our products.</h2>
        <p>
          All of the products we offer are from trusted brands in the well
          drilling industry. Our solutions serve residential, agricultural, and
          commercial clients across West Texas.
        </p>
        <p>
          From drilling and pump installations to solar-powered systems and
          maintenance services, our equipment ensures reliability, quality, and
          performance for each project we take on.
        </p>
      </div>

      {/* Brand Section */}
      <div className="brands-section">
        <h2>Why do we use these brands?</h2>
        <p className="brand-description">
          At TerraFlow Well Service, we conduct our business to the highest of
          industry standards. This requires that we use the trusted brands of
          the water well industry. We understand your needs because we too use
          water for livestock, houses, gardening, irrigation, and for work.
          We also know what it’s like to be without water. Therefore, it is
          our job to make sure that you have the best possible equipment so
          that you aren’t without water when you need it the most.
        </p>

        <div className="brand-cards">
          <div className="brand-card">
            <img src="\project1.jpeg" alt="Grundfos Logo" />
            <button>Grundfos Submersible Pump Curves</button>
            <button>Grundfos Solar Pump Curves</button>
          </div>

          <div className="brand-card">
            <img src="\project2.png" alt="Franklin Electric Logo" />
            <button>Franklin Electric Submersible Pump Curves</button>
            <button>Franklin Electric Control Boxes</button>
          </div>
        </div>
      </div>

      {/* ➕ Additional Image Section */}
      <div className="additional-images">
        <h2>Our Equipment in Action</h2>
        <div className="image-gallery">
          <img src="/project5.jpg" alt="Project 1" />
          <img src="/project4.jpeg" alt="Project 2" />
          <img src="\project7.png" alt="Project 3" />
          <img src="\pro8.png" alt="Project 4" />
        </div>
      </div>
    </div>
  );
}

export default Product;

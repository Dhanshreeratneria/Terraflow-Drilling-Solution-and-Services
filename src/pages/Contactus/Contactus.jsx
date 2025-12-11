import React, { useState } from "react";
import "./Contactus.css";
import { db, auth } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceAddress: "",
    city: "",
    state: "",
    zipCode: "",
    password: "",   // <<<<< changed from gps
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // =============== SAVE TO FIREBASE ==================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 1️⃣ Create user in Firebase Auth
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // 2️⃣ Save user info in Firestore **without password**
      await addDoc(collection(db, "contacts"), {
        ...formData,
        password: null,
        createdAt: serverTimestamp(),
      });

      setStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceAddress: "",
        city: "",
        state: "",
        zipCode: "",
        password: "",
        message: "",
      });

    } catch (err) {
      console.error("Error adding document:", err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div>
      <section className="banner">
        <img src="/CONTACT.jpg" alt="Drilling trucks" className="banner-img" />
        <h1 className="contact-title">Contact Us</h1>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>We'd love to hear from you!</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          {loading && <p className="info-msg">Submitting your message...</p>}
          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Failed to send message. Try again.</p>
          )}

          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ADDRESS FIELDS */}
          <div className="form-row">
            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                name="serviceAddress"
                value={formData.serviceAddress}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group" style={{ flex: 2 }}>
              <label>Create Password *</label>
              <input
                type="password"
                name="password"
                required
                minLength={6}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label>Message *</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;

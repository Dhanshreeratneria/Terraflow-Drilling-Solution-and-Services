import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./CustomerPage.css";

function CustomerPage() {
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCustomer = async () => {
    setLoading(true);
    setCustomer(null);

    const q = query(
      collection(db, "contacts"),
      where("email", "==", email)
    );

    const snap = await getDocs(q);
    if (!snap.empty) {
      setCustomer(snap.docs[0].data());
    } else {
      setCustomer("not_found");
    }

    setLoading(false);
  };

  return (
    <div className="cust-container">
      <h1 className="cust-title">Track Your Service Progress</h1>

      <div className="cust-search-box">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={searchCustomer} disabled={loading}>
          {loading ? "Searching..." : "Check Status"}
        </button>
      </div>

      {customer === "not_found" && (
        <p className="cust-error">No record found for this email.</p>
      )}

      {customer && customer !== "not_found" && (
        <div className="cust-status-card">
          <h2>{customer.firstName} {customer.lastName}</h2>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>

          <div className="cust-status">
            <strong>Current Status:</strong> 
            <span className="badge">{customer.status || "Not Started"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerPage;

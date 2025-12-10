import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Admin.css";

const Admin = () => {
  const [customers, setCustomers] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);

  // ----------------------------
  // FETCH CUSTOMERS
  // ----------------------------
  const fetchCustomers = async () => {
    try {
      const snap = await getDocs(collection(db, "users"));
      const list = [];

      snap.forEach((doc) => {
        if (doc.data().Role === "Customer") {
          list.push({ id: doc.id, ...doc.data() });
        }
      });

      setCustomers(list);
      setLoadingCustomers(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // ----------------------------
  // FETCH CONTACT FORM SUBMISSIONS
  // ----------------------------
  const fetchContacts = async () => {
    try {
      const snap = await getDocs(collection(db, "contacts"));
      const list = [];

      snap.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));

      setContacts(list);
      setLoadingContacts(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchContacts();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1 className="admin-title">ADMIN DASHBOARD</h1>

        {/* TOTAL COUNTS */}
        <div className="stats-grid">
          <div className="count-box">
            <h2>Total Customers</h2>
            <p className="count-number">
              {loadingCustomers ? "..." : customers.length}
            </p>
          </div>

          <div className="count-box">
            <h2>Total Contact Us Messages</h2>
            <p className="count-number">
              {loadingContacts ? "..." : contacts.length}
            </p>
          </div>
        </div>

        {/* CUSTOMER LIST */}
        <h2 className="sub-title">Registered Customers</h2>

        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name || "No Name"}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CONTACT US LIST */}
        <h2 className="sub-title" style={{ marginTop: "30px" }}>
          Contact Us Submissions
        </h2>

        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td>{c.firstName} {c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.message}</td>
                <td className="status-field">
                  {c.status ? c.status : "Not Started"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

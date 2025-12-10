import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Profile.css";

const ProfilePage = () => {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));

  const navigate = useNavigate();
  const { login, signUpWithEmailAndProfile, signInWithGoogle } = useAuth();

  const refreshCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  };

  // -----------------------------
  // ADMIN LOGIN (Fix: Fetch role directly from Firestore)
  // -----------------------------
  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(captchaAnswer) !== num1 + num2) {
      alert("Incorrect captcha!");
      refreshCaptcha();
      setCaptchaAnswer("");
      return;
    }

    if (!email || !password) {
      alert("Please enter admin email and password");
      return;
    }

    try {
      const loggedUser = await login(email, password);

      // Fetch role from Firestore
      const snap = await getDoc(doc(db, "users", loggedUser.uid));

      if (!snap.exists()) {
        alert("User not found in Firestore!");
        return;
      }

      const userRole = snap.data().Role;

      if (userRole !== "Admin") {
        alert("Access denied: Not an Admin!");
        return;
      }

      alert("Admin login successful!");
      navigate("/admin");
    } catch (error) {
      alert("Admin login failed: " + error.message);
    }
  };

  // -----------------------------
  // CUSTOMER LOGIN
  // -----------------------------
  const handleCustomerSignIn = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const loggedUser = await login(email, password);

      const snap = await getDoc(doc(db, "users", loggedUser.uid));
      if (!snap.exists()) {
        alert("User not found!");
        return;
      }

      const userRole = snap.data().Role;

      if (userRole !== "Customer") {
        alert("Access denied: Not a Customer!");
        return;
      }

      alert("Customer login successful!");
      navigate("/customer");
    } catch (error) {
      alert("Customer login failed: " + error.message);
    }
  };

  // -----------------------------
  // CUSTOMER SIGNUP
  // -----------------------------
  const handleCustomerSignUp = async () => {
    if (!email || !password) {
      alert("Please fill email & password");
      return;
    }

    try {
      await signUpWithEmailAndProfile({
        email,
        password,
        name: "New User",
        phone: "",
        address: "",
      });

      alert("Customer signup successful! You can login now.");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  // -----------------------------
  // GOOGLE LOGIN (Fetch role from DB)
  // -----------------------------
  const handleGoogleLogin = async () => {
    try {
      const firebaseUser = await signInWithGoogle();

      const snap = await getDoc(doc(db, "users", firebaseUser.uid));
      const userRole = snap.exists() ? snap.data().Role : null;

      if (userRole === "Admin") navigate("/admin");
      else if (userRole === "Customer") navigate("/customer");
      else alert("Role not found!");

    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>

        <label>User Type</label>
        <select className="select-box" onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select</option>
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
        </select>

        {/* ADMIN LOGIN */}
        {userType === "Admin" && (
          <>
            <label>Admin Email:</label>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="captcha-box">
              <p>{num1} + {num2} =</p>
              <input
                type="number"
                placeholder="Answer"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
              />
            </div>

            <button className="submit-btn" onClick={handleAdminSubmit}>
              Login as Admin
            </button>
          </>
        )}

        {/* CUSTOMER LOGIN */}
        {userType === "Customer" && (
          <>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="submit-btn" onClick={handleCustomerSignIn}>
              Sign In
            </button>

            <button className="outline-btn" onClick={handleCustomerSignUp}>
              Sign Up
            </button>

            <button className="google-btn" onClick={handleGoogleLogin}>
              Login with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

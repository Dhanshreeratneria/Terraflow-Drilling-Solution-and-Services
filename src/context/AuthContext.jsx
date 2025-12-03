// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // GOOGLE LOGIN
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await createOrUpdateUserInDB(result.user, "Customer");
      return result.user;
    } catch (error) {
      console.error("Google Login error:", error);
      throw error;
    }
  };

  // CUSTOMER SIGNUP
  const signUpWithEmailAndProfile = async ({
    email,
    password,
    name,
    phone,
    address,
  }) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = result.user;

      await setDoc(doc(db, "users", firebaseUser.uid), {
        uid: firebaseUser.uid,
        email,
        name,
        phone,
        address,
        Role: "Customer",
      });

      return firebaseUser;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  // LOGIN (ADMIN + CUSTOMER)
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = result.user;

      const docRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setRole(snap.data().Role || null);
      } else {
        console.warn("⚠️ No user profile in DB — creating now");
        await createOrUpdateUserInDB(firebaseUser, "Customer");
      }

      return firebaseUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // LOGOUT
  const logOut = async () => {
    setRole(null);
    await signOut(auth);
  };

  // CREATE USER IF NOT EXISTS
  const createOrUpdateUserInDB = async (firebaseUser, defaultRole) => {
    const userRef = doc(db, "users", firebaseUser.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        Role: defaultRole,
      });
    }
  };

  // AUTH STATE LISTENER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const snap = await getDoc(doc(db, "users", firebaseUser.uid));
        if (snap.exists()) {
          setRole(snap.data().Role || null);
        }
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: !!user,
        login,
        signInWithGoogle,
        signUpWithEmailAndProfile,
        logOut,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

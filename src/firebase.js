// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// ---------------------- MAIN PROJECT CONFIG ----------------------
const firebaseConfig = {
  apiKey: "AIzaSyBo9-2XD_Nr-ZTKUpnlgDHBTskWft1H5sU",
  authDomain: "contactus-94306.firebaseapp.com",
  projectId: "contactus-94306",
  storageBucket: "contactus-94306.firebasestorage.app",
  messagingSenderId: "462321947450",
  appId: "1:462321947450:web:6435c70cae97f7e5fb3603",
  measurementId: "G-SS9N692TM4",
  databaseURL: "https://contactus-94306-default-rtdb.firebaseio.com"
};

// Initialize single Firebase app
const app = initializeApp(firebaseConfig);

// Export authentication and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

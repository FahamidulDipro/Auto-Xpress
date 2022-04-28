// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt2zG8jSaUnkIGQDVDl08iCqb295JpO0g",
  authDomain: "auto-xpress.firebaseapp.com",
  projectId: "auto-xpress",
  storageBucket: "auto-xpress.appspot.com",
  messagingSenderId: "1098041718358",
  appId: "1:1098041718358:web:e1479970f5ef8195ad6df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
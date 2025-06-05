// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_T-bTk2_K10Ysr1XI8upTwFFi3AprBk",
  authDomain: "foodnest-7e187.firebaseapp.com",
  projectId: "foodnest-7e187",
  storageBucket: "foodnest-7e187.firebasestorage.app",
  messagingSenderId: "971870171822",
  appId: "1:971870171822:web:d65c36a11fe07dd557733f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
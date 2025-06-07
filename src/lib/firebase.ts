// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ma0CSdgMbndXeJ3e5uu2ka1NWRUSx1s",
  authDomain: "foodnest-edfcb.firebaseapp.com",
  projectId: "foodnest-edfcb",
  storageBucket: "foodnest-edfcb.firebasestorage.app",
  messagingSenderId: "908550400741",
  appId: "1:908550400741:web:100abc2880c4d878e9820c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
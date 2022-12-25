// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFfgHOuNL57mbZ-_BAE6DKMBYdJM8wfLw",
  authDomain: "website-tekat.firebaseapp.com",
  projectId: "website-tekat",
  storageBucket: "website-tekat.appspot.com",
  messagingSenderId: "361770981281",
  appId: "1:361770981281:web:e20efca1bc2a1a1924dde0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

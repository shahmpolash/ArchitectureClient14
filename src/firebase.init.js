// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Jn0PHRpzP0FjMtwHGXyEfiB2GpLoc7Y",
  authDomain: "architecturefirmsseoservicenew.firebaseapp.com",
  projectId: "architecturefirmsseoservicenew",
  storageBucket: "architecturefirmsseoservicenew.appspot.com",
  messagingSenderId: "90781462846",
  appId: "1:90781462846:web:6d4159bb9b7c695474fc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;